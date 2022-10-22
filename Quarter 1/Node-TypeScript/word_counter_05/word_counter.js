import inquirer from "inquirer";

// word counter

inquirer
  .prompt([
    {
      type: "input",
      name: "sentence",
      message: "Enter a paragraph of text:",
    },
  ])
  .then((answers) => {
    console.log(`Word count: ${wordCounter(answers.sentence)}`);
    console.log(`Character count: ${charactersCounter(answers.sentence)}`);
  }
  );
  // count words in a sentence
  function wordCounter(sentence) {
    return sentence.split(" ").length;
  }

  // count characters in a sentence - space excluded
  function charactersCounter(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        count++;
      }
    }
    return count;
  }