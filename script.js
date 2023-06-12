function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const familyBelong = {
  familyStats: [
    'Vold',
    'Zuli',
    'Ilda',
    'Sumafi',
    'Sumari',
    'Gramada',
    'Tumold',
    'Milumet',
    'Borledim',
  ],
  energyCenter: [
    'purple',
    'indigo',
    'blue',
    'pink',
    'green',
    'yellow',
    'orange',
    'red',
  ],
  advice: [
    'align your centers',
    'relax',
    'listened more to your intuition',
    'follow your impulses',
    'trust and accept yourself',
    "don't follow feelings",
    'stop loop thinking',
  ],
};

// Store the 'stats' in an array
let essenceWisdom = [];

// Iterate over the object
for (let info in familyBelong) {
  let statIdx = generateRandomNumber(familyBelong[info].length);

  // Use the object's properties to customize the message being added to essenceWisdom

  switch (info) {
    case 'familyStats':
      essenceWisdom.push(
        `Your essence family is "${familyBelong[info][statIdx]}".`
      );
      break;
    case 'energyCenter':
      essenceWisdom.push(
        `You are dominant in: "${familyBelong[info][statIdx]}".`
      );
      break;
    case 'advice':
      essenceWisdom.push(`What if you: "${familyBelong[info][statIdx]}"?`);
      break;
    default:
      essenceWisdom.push('You just be you, Boo.');
  }
}

function formatFamilies(wisdom) {
  const formatted = wisdom.join('\n');
  console.log(formatted);
}

formatFamilies(essenceWisdom);
