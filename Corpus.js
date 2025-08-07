const corpus = {
      "ubuntu": {
        english: "humanity",
        usage: "Ubuntu buhlanganisa abantu. (Ubuntu brings people together.)",
        paired: ["umuntu", "ngabantu", "inxibelelwano"],
        frequency: 58,
        stats: "Found mostly in philosophical or social contexts. Used across Southern Africa."
      },
      "sawubona": {
        english: "hello",
        usage: "Sawubona, baba! (Hello, sir!)",
        paired: ["unjani", "ngikhona", "sawubona mama"],
        frequency: 95,
        stats: "Most common greeting in spoken isiZulu. Used in both formal and informal contexts."
      },
      "umndeni": {
        english: "family",
        usage: "Umndeni wami uhlala eMlazi. (My family lives in Umlazi.)",
        paired: ["ubaba", "umama", "abantwana"],
        frequency: 41,
        stats: "Used frequently in personal and cultural contexts to refer to the extended family."
      }
    };

    function searchCorpus() {
      const input = document.getElementById("searchInput").value.trim().toLowerCase();
      const resultBox = document.getElementById("results");
      const noResults = document.getElementById("noResults");

      if (corpus[input]) {
        const wordData = corpus[input];

        document.getElementById("zuluWord").textContent = input;
        document.getElementById("englishTranslation").textContent = wordData.english;
        document.getElementById("usageExample").textContent = wordData.usage;
        document.getElementById("wordFrequency").textContent = wordData.frequency;
        document.getElementById("otherStats").textContent = wordData.stats;

        // Populate paired words
        const pairedList = document.getElementById("pairedWords");
        pairedList.innerHTML = ""; // Clear old results
        wordData.paired.forEach(pair => {
          const li = document.createElement("li");
          li.textContent = pair;
          pairedList.appendChild(li);
        });

        resultBox.style.display = "block";
        noResults.style.display = "none";
      } else {
        resultBox.style.display = "none";
        noResults.style.display = "block";
      }
    }