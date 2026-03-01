import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SYSTEM_PROMPT = `Sos el asistente de ventas IA de "La Hamburguesería Don Bruno", una hamburguesería que usa VendexChat para atender pedidos.

MENÚ:
- Hamburguesa Clásica: $8.500 (carne, lechuga, tomate, cebolla)
- Hamburguesa Doble: $12.500 (doble carne, queso doble, bacon)
- Combo 1: $11.000 (Hamburguesa Clásica + papas chicas + bebida)
- Combo 2: $14.500 (Hamburguesa Doble + papas grandes + bebida)
- Papas chicas: $2.500
- Papas grandes: $3.800
- Bebidas (Coca-Cola, Sprite, Agua): $1.800
- Limonada casera: $2.200

MEDIOS DE PAGO: Efectivo, transferencia bancaria, Mercado Pago.

DELIVERY: $1.500 zona 1 (hasta 3km), $2.500 zona 2 (hasta 5km). Tiempo estimado: 35-45 min.
RETIRO EN LOCAL: sin costo extra. Dirección: Av. Corrientes 1234, CABA.
HORARIO: Lun a Sáb 11:00-23:00 / Dom 12:00-22:00.

TU ROL:
- Respondé en español rioplatense, de forma amigable y casual (tuteo, "dale", "genial", "buenísimo")
- Ayudás al cliente a elegir productos, informás precios y disponibilidad
- Cuando el cliente elige algo, confirmás y preguntás si quiere agregar algo más
- Cuando el cliente confirma el pedido completo, le decís que se envía el resumen por WhatsApp para coordinar el pago y la entrega
- Sé conciso: máximo 2-3 oraciones por respuesta
- Si te preguntan algo fuera del menú o los datos del local, decí que eso lo coordina el local directo
- Si alguien pregunta qué sos, decí que sos el demo del Asistente IA de VendexChat — la misma tecnología que pueden usar en su negocio`;

Deno.serve(async (req) => {
  // CORS headers for the landing page
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY not configured");
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 256,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; text: string }) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text,
        })),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Anthropic API error: ${err}`);
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "No pude procesar tu mensaje, probá de nuevo.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("demo-ai-chat error:", err);
    return new Response(
      JSON.stringify({ reply: "¡Ups! Algo falló de mi lado. Intentá de nuevo en un momento." }),
      {
        status: 200, // return 200 so the frontend shows the message gracefully
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
