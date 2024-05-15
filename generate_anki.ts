const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Load the JSON file
const jsonFilePath = 'rawData.json';
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

const output = [];

// Process consonants
jsonData.consonants.forEach(consonant => {
  const card = {
    type: 'Basic',
    tags: ['consonant'],
    fields: {
      Front: `<b>${consonant.symbol}</b>`,
      Back: `[sound:${path.basename(consonant.audio)}] <br >Initial: ${consonant.romanization_initial}<br>Final: ${consonant.romanization_final}<br>Pronunciation: ${consonant.pronunciation}`
    }
  };
  output.push(card);
});

// Process vowels
jsonData.vowels.forEach(vowel => {
  const card = {
    type: 'Basic',
    tags: ['vowel'],
    fields: {
      Front: `<b>${vowel.symbol}</b>`,
      Back: ` [sound:${path.basename(vowel.audio)}] <br> Romanization: ${vowel.romanization}<br>Pronunciation: ${vowel.pronunciation}`
    }
  };
  output.push(card);
});
// Convert to YAML
const yamlStr = yaml.dump(output);

// Write to YAML file
const yamlFilePath = 'cards.yaml';
fs.writeFileSync(yamlFilePath, yamlStr, 'utf8');

console.log(`YAML file has been generated at ${yamlFilePath}`);
