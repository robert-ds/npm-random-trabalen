const trabaLenguas = [
  "El limpiador límpido limpia lunetas el lunes, si el límpido limpiador lunetas limpia el lunes.",
  "Si la perra de Parra no trepa la parra de Guerra, Guerra no le pega con la porra a la perra de Parra.",
  "Zorro, zorro modorro, pide socorro con un gorro.",
  "Perejil comí, perejil cené, y de tanto comer perejil, me emperejilé",
  "A Cuesta le cuesta subir la cuesta y en medio de la cuesta va y se acuesta.",
  "Pepe Peña pela papa, pica piña, pita un pito, pica piña, pela papa, Pepe Peña.",
  "Si yo como como como, y tú comes como comes, ¿cómo comes como como? Si yo como como como.",
  "Tan caro es ese carro que por caro no compro el carro.",
  "Rosa Rosales cortó una rosa, qué roja la rosa de Rosa Rosales.",
  "¿Por qué a la bota se le llama bota y a la pelota pelota, si rebota más la pelota que la bota?",
  "Cuando yo digo Diego, digo digo y cuando digo digo, digo Diego",
  "Cada vez que me baño me hace daño, por eso me baño una vez al año.",
  "El hipopótamo Hipo está con hipo. ¿Quién le quita el hipo al hipopótamo Hipo?",
  "Pablito clavó un clavito en la calva de un calvito. Un clavito clavó Pablito en la calva de un calvito. ¿Qué clavito clavó Pablito?",
  "Cuando cuentes cuentos, cuenta cuántos cuentos cuentas, porque si no cuentas cuántos cuentos cuentas, nunca sabrás cuántos cuentos cuentas tú.",
  "Pedro Pablo Pérez Pereira, pobre pintor portugués, pinta preciosos paisajes por poca plata, para poder pasar por París",
  "¿Cómo quieres que te quiera si el que quiero no me quiere como quiero que me quiera?",
  "Si tu gusto no gusta del gusto que gusta mi gusto, qué disgusto se lleva mi gusto al saber que tu gusto no gusta del gusto que gusta mi gusto.",
  "Hugo tuvo un tubo, pero el tubo que tuvo se le rompió. Para recuperar el tubo que tuvo, tuvo que comprar un tubo igual al tubo que tuvo."
];

const randomMsg = () => {
  const messages = trabaLenguas[Math.floor(Math.random() * trabaLenguas.length)];
  console.log(messages);
}

module.exports = {randomMsg};

