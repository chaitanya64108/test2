// ===================== TIER 10 — BATCH 1 SOLUTION BUILDERS =====================
// Templates covered:
// 1) sq_direct  — V0 to V4
// 2) sq_pf      — V0 to V4
// 3) sq_longdiv — V0 to V4
//
// Existing helpers expected:
// makeStyledSolution({ en, hing, hi })
// step(title, body)
// mistake(wrong, why)
//
// KaTeX note:
// All math is wrapped using k("..."), which returns "\\(...\\)".
// Make sure frontend KaTeX auto-render supports \( ... \) delimiters.

function k(tex) {
  return `\\(${tex}\\)`;
}

function lines(...items) {
  return items.filter(Boolean).join('\n');
}

function boxed(tex) {
  return k(`\\boxed{${tex}}`);
}

function sqNum(n) {
  return n * n;
}

function primeFactors(n) {
  const factors = [];
  let x = n;
  let d = 2;

  while (d * d <= x) {
    while (x % d === 0) {
      factors.push(d);
      x = x / d;
    }
    d++;
  }

  if (x > 1) factors.push(x);
  return factors;
}

function factorCounts(factors) {
  return factors.reduce((acc, f) => {
    acc[f] = (acc[f] || 0) + 1;
    return acc;
  }, {});
}

function factorListTex(factors) {
  return factors.join(' \\times ');
}

function squarePairTexFromFactors(factors) {
  const counts = factorCounts(factors);
  const parts = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const count = counts[p];
      const pairs = Math.floor(count / 2);
      const leftover = count % 2;

      for (let i = 0; i < pairs; i++) {
        parts.push(`(${p} \\times ${p})`);
      }

      if (leftover) {
        parts.push(`${p}`);
      }
    });

  return parts.join(' \\times ');
}

function oneFromEachPairTex(factors) {
  const counts = factorCounts(factors);
  const selected = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const pairs = Math.floor(counts[p] / 2);
      for (let i = 0; i < pairs; i++) selected.push(p);
    });

  return selected.join(' \\times ');
}

function product(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

function unpairedFactorProductForSquare(n) {
  const counts = factorCounts(primeFactors(n));
  const unpaired = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      if (counts[p] % 2 !== 0) unpaired.push(p);
    });

  return product(unpaired);
}

function longDivisionTwoPairData(num, root) {
  const s = String(num);
  const firstLen = s.length % 2 === 0 ? 2 : 1;
  const firstPairText = s.slice(0, firstLen);
  const secondPairText = s.slice(firstLen).padStart(2, '0');
  const firstPair = Number(firstPairText);
  const secondPair = Number(secondPairText);

  const firstDigit = Math.floor(Math.sqrt(firstPair));
  const firstSquare = firstDigit * firstDigit;
  const firstRemainder = firstPair - firstSquare;

  const newNumber = Number(`${firstRemainder}${secondPairText}`);
  const doubledQuotient = firstDigit * 2;
  const trialDigit = root % 10;
  const trialBase = doubledQuotient * 10;
  const trialDivisor = trialBase + trialDigit;
  const trialProduct = trialDivisor * trialDigit;

  return {
    pairText: `${firstPairText}\\ |\\ ${secondPairText}`,
    firstPair,
    secondPair,
    firstDigit,
    firstSquare,
    firstRemainder,
    newNumber,
    doubledQuotient,
    trialDigit,
    trialBase,
    trialDivisor,
    trialProduct
  };
}

// **Template: sq_direct**

// sq_direct V0
function buildSqDirectV0Solution({ n = 12, ans = sqNum(n) } = {}) {
  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: Square of ${k(String(n))}.`
        )),
        step('Step 2: Formula', lines(
          'Square of a number means:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: Put the value', lines(
          `Here, ${k(`n = ${n}`)}, so:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: Multiply', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2`)} is a known square, so answer is ${k(String(ans))}.`,
      hint: `Use ${k(`${n}^2 = (${n} \\times ${n})`)}.`
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: ${k(String(n))} ka square nikalna hai.`
        )),
        step('Step 2: Formula', lines(
          'Kisi number ka square ka matlab hota hai:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: Value rakho', lines(
          `Yahan, ${k(`n = ${n}`)}, isliye:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: Multiply karo', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2`)} common square hai, isliye answer direct ${k(String(ans))}.`,
      hint: `${k(`${n}^2 = (${n} \\times ${n})`)} use karo.`
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(n))} का वर्ग ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(n))} का वर्ग।`
        )),
        step('Step 2: सूत्र', lines(
          'किसी संख्या का वर्ग होता है:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: मान रखो', lines(
          `यहाँ, ${k(`n = ${n}`)}, इसलिए:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: गुणा करो', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: अंतिम उत्तर', `उत्तर: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2`)} एक सामान्य वर्ग है, इसलिए उत्तर सीधे ${k(String(ans))}.`,
      hint: `${k(`${n}^2 = (${n} \\times ${n})`)} उपयोग करो।`
    }
  });
}

// sq_direct V1
function buildSqDirectV1Solution({ n = 25, ans = sqNum(n) } = {}) {
  const tensDigit = Math.floor(n / 10);
  const nextDigit = tensDigit + 1;
  const prefix = tensDigit * nextDigit;

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: Square of ${k(String(n))}.`
        )),
        step('Step 2: Formula', lines(
          'Square of a number means:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: Put the value', lines(
          `Here, ${k(`n = ${n}`)}, so:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: Multiply using book-style form', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `For a number ending in ${k('5')}, use ${k(`${n}^2 = (${tensDigit} \\times ${nextDigit})\\text{ followed by }25 = ${ans}`)}.`,
      hint: `${k(`${n}^2 = (${n} \\times ${n})`)}.`
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: ${k(String(n))} ka square nikalna hai.`
        )),
        step('Step 2: Formula', lines(
          'Square ka matlab hota hai:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: Value rakho', lines(
          `Yahan, ${k(`n = ${n}`)}, isliye:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: Multiply karo', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k('5')} par end hone wale number ke liye: ${k(`${tensDigit} \\times ${nextDigit} = ${prefix}`)}, phir ${k('25')} likho. Isliye ${k(`${n}^2 = ${ans}`)}.`,
      hint: `${k(`${n}^2 = (${n} \\times ${n})`)} use karo.`
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(n))} का वर्ग ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(n))} का वर्ग।`
        )),
        step('Step 2: सूत्र', lines(
          'वर्ग का अर्थ होता है:',
          k('n^2 = (n \\times n)')
        )),
        step('Step 3: मान रखो', lines(
          `यहाँ, ${k(`n = ${n}`)}, इसलिए:`,
          k(`${n}^2 = (${n} \\times ${n})`)
        )),
        step('Step 4: गुणा करो', k(`${n}^2 = (${n} \\times ${n}) = ${ans}`)),
        step('Step 5: अंतिम उत्तर', `उत्तर: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k('5')} पर समाप्त संख्या के लिए: ${k(`${tensDigit} \\times ${nextDigit} = ${prefix}`)}, फिर ${k('25')} लिखो। इसलिए ${k(`${n}^2 = ${ans}`)}.`,
      hint: `${k(`${n}^2 = (${n} \\times ${n})`)} उपयोग करो।`
    }
  });
}

// sq_direct V2
function buildSqDirectV2Solution({ n = 49, base = 50, diff = 1, ans = sqNum(n) } = {}) {
  const baseSq = sqNum(base);
  const middle = 2 * base * diff;
  const diffSq = sqNum(diff);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: Square of ${k(String(n))}.`
        )),
        step('Step 2: Use identity', lines(
          'Use:',
          k('(a - b)^2 = a^2 - (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: Write the number near a base', k(`${n}^2 = (${base} - ${diff})^2`)),
        step('Step 4: Expand with BODMAS brackets', k(`${n}^2 = (${base}^2) - (2 \\times ${base} \\times ${diff}) + (${diff}^2)`)),
        step('Step 5: Solve each part', k(`${n}^2 = ${baseSq} - ${middle} + ${diffSq}`)),
        step('Step 6: Final calculation', k(`${n}^2 = (${baseSq} - ${middle}) + ${diffSq} = ${ans}`)),
        step('Step 7: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} - ${diff})^2 = ${ans}`)}.`,
      hint: `Use ${k(`(${base} - ${diff})^2`)}.`
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: ${k(String(n))} ka square nikalna hai.`
        )),
        step('Step 2: Identity use karo', lines(
          'Use karo:',
          k('(a - b)^2 = a^2 - (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: Number ko base ke paas likho', k(`${n}^2 = (${base} - ${diff})^2`)),
        step('Step 4: BODMAS brackets ke saath expand karo', k(`${n}^2 = (${base}^2) - (2 \\times ${base} \\times ${diff}) + (${diff}^2)`)),
        step('Step 5: Har part solve karo', k(`${n}^2 = ${baseSq} - ${middle} + ${diffSq}`)),
        step('Step 6: Final calculation', k(`${n}^2 = (${baseSq} - ${middle}) + ${diffSq} = ${ans}`)),
        step('Step 7: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} - ${diff})^2 = ${ans}`)}.`,
      hint: `${k(`(${base} - ${diff})^2`)} use karo.`
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(n))} का वर्ग ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(n))} का वर्ग।`
        )),
        step('Step 2: सर्वसमिका उपयोग करो', lines(
          'उपयोग करो:',
          k('(a - b)^2 = a^2 - (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: संख्या को base के पास लिखो', k(`${n}^2 = (${base} - ${diff})^2`)),
        step('Step 4: BODMAS brackets के साथ विस्तार करो', k(`${n}^2 = (${base}^2) - (2 \\times ${base} \\times ${diff}) + (${diff}^2)`)),
        step('Step 5: हर भाग हल करो', k(`${n}^2 = ${baseSq} - ${middle} + ${diffSq}`)),
        step('Step 6: अंतिम गणना', k(`${n}^2 = (${baseSq} - ${middle}) + ${diffSq} = ${ans}`)),
        step('Step 7: अंतिम उत्तर', `उत्तर: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} - ${diff})^2 = ${ans}`)}.`,
      hint: `${k(`(${base} - ${diff})^2`)} उपयोग करो।`
    }
  });
}

// sq_direct V3
function buildSqDirectV3Solution({ n = 105, base = 100, extra = 5, ans = sqNum(n) } = {}) {
  const baseSq = sqNum(base);
  const middle = 2 * base * extra;
  const extraSq = sqNum(extra);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: Square of ${k(String(n))}.`
        )),
        step('Step 2: Use identity', lines(
          'Use:',
          k('(a + b)^2 = a^2 + (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: Write the number near a base', k(`${n}^2 = (${base} + ${extra})^2`)),
        step('Step 4: Expand with brackets', k(`${n}^2 = (${base}^2) + (2 \\times ${base} \\times ${extra}) + (${extra}^2)`)),
        step('Step 5: Solve each part', k(`${n}^2 = ${baseSq} + ${middle} + ${extraSq}`)),
        step('Step 6: Add using BODMAS brackets', k(`${n}^2 = (${baseSq} + ${middle}) + ${extraSq} = ${ans}`)),
        step('Step 7: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} + ${extra})^2 = ${ans}`)}.`,
      hint: `Use ${k(`(${base} + ${extra})^2`)}.`
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the square of ${k(String(n))}.`,
          `Find out: ${k(String(n))} ka square nikalna hai.`
        )),
        step('Step 2: Identity use karo', lines(
          'Use karo:',
          k('(a + b)^2 = a^2 + (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: Number ko base ke paas likho', k(`${n}^2 = (${base} + ${extra})^2`)),
        step('Step 4: Brackets ke saath expand karo', k(`${n}^2 = (${base}^2) + (2 \\times ${base} \\times ${extra}) + (${extra}^2)`)),
        step('Step 5: Har part solve karo', k(`${n}^2 = ${baseSq} + ${middle} + ${extraSq}`)),
        step('Step 6: BODMAS brackets ke saath add karo', k(`${n}^2 = (${baseSq} + ${middle}) + ${extraSq} = ${ans}`)),
        step('Step 7: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} + ${extra})^2 = ${ans}`)}.`,
      hint: `${k(`(${base} + ${extra})^2`)} use karo.`
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(n))} का वर्ग ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(n))} का वर्ग।`
        )),
        step('Step 2: सर्वसमिका उपयोग करो', lines(
          'उपयोग करो:',
          k('(a + b)^2 = a^2 + (2 \\times a \\times b) + b^2')
        )),
        step('Step 3: संख्या को base के पास लिखो', k(`${n}^2 = (${base} + ${extra})^2`)),
        step('Step 4: Brackets के साथ विस्तार करो', k(`${n}^2 = (${base}^2) + (2 \\times ${base} \\times ${extra}) + (${extra}^2)`)),
        step('Step 5: हर भाग हल करो', k(`${n}^2 = ${baseSq} + ${middle} + ${extraSq}`)),
        step('Step 6: BODMAS brackets के साथ जोड़ो', k(`${n}^2 = (${baseSq} + ${middle}) + ${extraSq} = ${ans}`)),
        step('Step 7: अंतिम उत्तर', `उत्तर: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${n}^2 = (${base} + ${extra})^2 = ${ans}`)}.`,
      hint: `${k(`(${base} + ${extra})^2`)} उपयोग करो।`
    }
  });
}

// sq_direct V4
function buildSqDirectV4Solution({ n = 99, base = 100, diff = 1, ans = sqNum(n) } = {}) {
  return buildSqDirectV2Solution({ n, base, diff, ans });
}

// **Template: sq_pf**

function buildSqPfRootSolution({ num, root }) {
  const factors = primeFactors(num);
  const factorsTex = factorListTex(factors);
  const pairsTex = squarePairTexFromFactors(factors);
  const oneEachTex = oneFromEachPairTex(factors);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt{${num}}`)} using prime factorization.`,
          `Find out: Square root of ${k(String(num))}.`
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Make pairs', k(`${num} = ${pairsTex}`)),
        step('Step 4: Take one factor from each pair', k(`\\sqrt{${num}} = ${oneEachTex}`)),
        step('Step 5: Multiply', k(`\\sqrt{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, so ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'Pair equal prime factors and take one factor from each pair.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt{${num}}`)} using prime factorization.`,
          `Find out: ${k(String(num))} ka square root nikalna hai.`
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Same factors ki pair banao', k(`${num} = ${pairsTex}`)),
        step('Step 4: Har pair se ek factor lo', k(`\\sqrt{${num}} = ${oneEachTex}`)),
        step('Step 5: Multiply karo', k(`\\sqrt{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, isliye ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'Same factors ki pair banao aur har pair se ek factor lo.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: अभाज्य गुणनखंड विधि से ${k(String(num))} का वर्गमूल ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(num))} का वर्गमूल।`
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: समान गुणनखंडों के जोड़े बनाओ', k(`${num} = ${pairsTex}`)),
        step('Step 4: हर जोड़े से एक गुणनखंड लो', k(`\\sqrt{${num}} = ${oneEachTex}`)),
        step('Step 5: गुणा करो', k(`\\sqrt{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, इसलिए ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'समान गुणनखंडों के जोड़े बनाओ और हर जोड़े से एक गुणनखंड लो।'
    }
  });
}

// sq_pf V0
function buildSqPfV0Solution({ num = 144, root = 12 } = {}) {
  return buildSqPfRootSolution({ num, root });
}

// sq_pf V1
function buildSqPfV1Solution({ num = 196, root = 14 } = {}) {
  return buildSqPfRootSolution({ num, root });
}

// sq_pf V2
function buildSqPfV2Solution({ num = 180, multiplier } = {}) {
  const factor = multiplier || unpairedFactorProductForSquare(num);
  const productNum = num * factor;
  const factors = primeFactors(num);
  const factorsTex = factorListTex(factors);
  const pairsTex = squarePairTexFromFactors(factors);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be multiplied to make it a perfect square.`,
          'Find out: Smallest multiplier.'
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Make pairs', k(`${num} = ${pairsTex}`)),
        step('Step 4: Identify unpaired factor', `The unpaired factor is ${k(String(factor))}.`),
        step('Step 5: Multiply by unpaired factor', k(`${num} \\times ${factor} = ${productNum}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Unpaired prime factor is ${k(String(factor))}.`,
      hint: 'Every prime factor must be paired.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be multiplied to make it a perfect square.`,
          'Find out: smallest multiplier nikalna hai.'
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Pair banao', k(`${num} = ${pairsTex}`)),
        step('Step 4: Unpaired factor dekho', `${k(String(factor))} unpaired hai.`),
        step('Step 5: Unpaired factor se multiply karo', k(`${num} \\times ${factor} = ${productNum}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Unpaired factor ${k(String(factor))} hai.`,
      hint: 'Har factor pair me hona chahiye.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(num))} को पूर्ण वर्ग बनाने के लिए किस सबसे छोटी संख्या से गुणा करना होगा?`,
          'ज्ञात करना है: सबसे छोटा गुणक।'
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: जोड़े बनाओ', k(`${num} = ${pairsTex}`)),
        step('Step 4: बिना जोड़े वाला गुणनखंड देखो', `${k(String(factor))} बिना जोड़े का है।`),
        step('Step 5: उसी से गुणा करो', k(`${num} \\times ${factor} = ${productNum}`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `बिना जोड़े वाला गुणनखंड ${k(String(factor))} है।`,
      hint: 'हर गुणनखंड जोड़े में होना चाहिए।'
    }
  });
}

// sq_pf V3
function buildSqPfV3Solution({ num = 300, divisor } = {}) {
  const factor = divisor || unpairedFactorProductForSquare(num);
  const result = num / factor;
  const factors = primeFactors(num);
  const factorsTex = factorListTex(factors);
  const pairsTex = squarePairTexFromFactors(factors);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be divided to make it a perfect square.`,
          'Find out: Smallest divisor.'
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Make pairs', k(`${num} = ${pairsTex}`)),
        step('Step 4: Identify unpaired factor', `The unpaired factor is ${k(String(factor))}.`),
        step('Step 5: Divide by unpaired factor', k(`\\frac{${num}}{${factor}} = ${result}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Divide by the unpaired factor ${k(String(factor))}.`,
      hint: 'Remove the factor without a pair.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be divided to make it a perfect square.`,
          'Find out: smallest divisor nikalna hai.'
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Pair banao', k(`${num} = ${pairsTex}`)),
        step('Step 4: Unpaired factor dekho', `Unpaired factor ${k(String(factor))} hai.`),
        step('Step 5: Divide karo', k(`\\frac{${num}}{${factor}} = ${result}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Unpaired factor ${k(String(factor))} se divide karo.`,
      hint: 'Jiska pair nahi hai, usko remove karo.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(num))} को पूर्ण वर्ग बनाने के लिए किस सबसे छोटी संख्या से भाग देना होगा?`,
          'ज्ञात करना है: सबसे छोटा भाजक।'
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: जोड़े बनाओ', k(`${num} = ${pairsTex}`)),
        step('Step 4: बिना जोड़े वाला गुणनखंड देखो', `बिना जोड़े वाला गुणनखंड ${k(String(factor))} है।`),
        step('Step 5: भाग दो', k(`\\frac{${num}}{${factor}} = ${result}`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(factor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `बिना जोड़े वाले गुणनखंड ${k(String(factor))} से भाग दो।`,
      hint: 'जिसका जोड़ा नहीं है, उसे हटाओ।'
    }
  });
}

// sq_pf V4
function buildSqPfV4Solution({ num = 225 } = {}) {
  const factors = primeFactors(num);
  const factorsTex = factorListTex(factors);
  const pairsTex = squarePairTexFromFactors(factors);
  const unpaired = unpairedFactorProductForSquare(num);
  const isPerfectSquare = unpaired === 1;

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Check whether ${k(String(num))} is a perfect square using prime factorization.`,
          `Find out: Whether ${k(String(num))} is a perfect square.`
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Make pairs', k(`${num} = ${pairsTex}`)),
        step('Step 4: Check pairs', isPerfectSquare ? 'All factors are paired.' : `Unpaired factor is ${k(String(unpaired))}.`),
        step('Step 5: Final answer', `Answer: ${boxed(isPerfectSquare ? `${num}\\text{ is a perfect square}` : `${num}\\text{ is not a perfect square}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: 'If all prime factors are paired, the number is a perfect square.',
      hint: 'Perfect square means all prime factors are in pairs.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Check whether ${k(String(num))} is a perfect square using prime factorization.`,
          `Find out: ${k(String(num))} perfect square hai ya nahi.`
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Pair banao', k(`${num} = ${pairsTex}`)),
        step('Step 4: Pairs check karo', isPerfectSquare ? 'Sab factors pair me hain.' : `Unpaired factor ${k(String(unpaired))} hai.`),
        step('Step 5: Final answer', `Answer: ${boxed(isPerfectSquare ? `${num}\\text{ perfect square hai}` : `${num}\\text{ perfect square nahi hai}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: 'Sab factors pair me hon to number perfect square hota hai.',
      hint: 'Perfect square me sab factors pair me hote hain.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: अभाज्य गुणनखंड विधि से जाँचिए कि ${k(String(num))} पूर्ण वर्ग है या नहीं।`,
          `ज्ञात करना है: ${k(String(num))} पूर्ण वर्ग है या नहीं।`
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: जोड़े बनाओ', k(`${num} = ${pairsTex}`)),
        step('Step 4: जोड़े जाँचो', isPerfectSquare ? 'सभी गुणनखंड जोड़ों में हैं।' : `बिना जोड़े वाला गुणनखंड ${k(String(unpaired))} है।`),
        step('Step 5: अंतिम उत्तर', `उत्तर: ${boxed(isPerfectSquare ? `${num}\\text{ पूर्ण वर्ग है}` : `${num}\\text{ पूर्ण वर्ग नहीं है}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: 'सभी गुणनखंड जोड़ों में हों, तो संख्या पूर्ण वर्ग होती है।',
      hint: 'पूर्ण वर्ग में सभी गुणनखंड जोड़ों में होते हैं।'
    }
  });
}

// **Template: sq_longdiv**

function buildSqLongdivBaseSolution({ num, root }) {
  const d = longDivisionTwoPairData(num, root);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt{${num}}`)} by the long division method.`,
          `Find out: Square root of ${k(String(num))}.`
        )),
        step('Step 2: Make pairs from right side', k(`${num} \\rightarrow ${d.pairText}`)),
        step('Step 3: Choose first digit', `Largest square less than or equal to ${k(String(d.firstPair))} is ${k(`${d.firstDigit}^2 = ${d.firstSquare}`)}, so first digit is ${k(String(d.firstDigit))}.`),
        step('Step 4: Subtract and bring down next pair', `${k(`${d.firstPair} - ${d.firstSquare} = ${d.firstRemainder}`)}, bring down next pair, so new number is ${k(String(d.newNumber))}.`),
        step('Step 5: Double the quotient', `Current quotient is ${k(String(d.firstDigit))}, so double is ${k(`${d.firstDigit} \\times 2 = ${d.doubledQuotient}`)}.`),
        step('Step 6: Find next digit', lines(
          `Find digit ${k('x')} such that ${k(`(${d.trialBase} + x) \\times x \\leq ${d.newNumber}`)}.`,
          `Try ${k(`x = ${d.trialDigit}`)}: ${k(`(${d.trialBase} + ${d.trialDigit}) \\times ${d.trialDigit} = ${d.trialProduct}`)}.`
        )),
        step('Step 7: Final answer', `Answer: ${boxed(`\\sqrt{${num}} = ${root}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, so ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'Pair digits from the right side first.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt{${num}}`)} by the long division method.`,
          `Find out: ${k(String(num))} ka square root nikalna hai.`
        )),
        step('Step 2: Right side se pairs banao', k(`${num} \\rightarrow ${d.pairText}`)),
        step('Step 3: First digit choose karo', `${k(String(d.firstPair))} se chhota ya equal largest square ${k(`${d.firstDigit}^2 = ${d.firstSquare}`)} hai, isliye first digit ${k(String(d.firstDigit))}.`),
        step('Step 4: Subtract karo aur next pair lao', `${k(`${d.firstPair} - ${d.firstSquare} = ${d.firstRemainder}`)}, next pair lao, new number ${k(String(d.newNumber))}.`),
        step('Step 5: Quotient ko double karo', `Current quotient ${k(String(d.firstDigit))} hai, double ${k(`${d.firstDigit} \\times 2 = ${d.doubledQuotient}`)}.`),
        step('Step 6: Next digit find karo', lines(
          `Aisa digit ${k('x')} chahiye jisme ${k(`(${d.trialBase} + x) \\times x \\leq ${d.newNumber}`)}.`,
          `Try ${k(`x = ${d.trialDigit}`)}: ${k(`(${d.trialBase} + ${d.trialDigit}) \\times ${d.trialDigit} = ${d.trialProduct}`)}.`
        )),
        step('Step 7: Final answer', `Answer: ${boxed(`\\sqrt{${num}} = ${root}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, isliye ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'Pehle right side se digit pairs banao.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: लंबी भाग विधि से ${k(`\\sqrt{${num}}`)} ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(num))} का वर्गमूल।`
        )),
        step('Step 2: दाईं ओर से जोड़े बनाओ', k(`${num} \\rightarrow ${d.pairText}`)),
        step('Step 3: पहला अंक चुनो', `${k(String(d.firstPair))} से छोटा या बराबर सबसे बड़ा वर्ग ${k(`${d.firstDigit}^2 = ${d.firstSquare}`)} है, इसलिए पहला अंक ${k(String(d.firstDigit))}.`),
        step('Step 4: घटाओ और अगला जोड़ा नीचे लाओ', `${k(`${d.firstPair} - ${d.firstSquare} = ${d.firstRemainder}`)}, अगला जोड़ा नीचे लाओ, नई संख्या ${k(String(d.newNumber))}.`),
        step('Step 5: भागफल को दोगुना करो', `वर्तमान भागफल ${k(String(d.firstDigit))} है, इसका दोगुना ${k(`${d.firstDigit} \\times 2 = ${d.doubledQuotient}`)}.`),
        step('Step 6: अगला अंक ज्ञात करो', lines(
          `ऐसा अंक ${k('x')} चाहिए कि ${k(`(${d.trialBase} + x) \\times x \\leq ${d.newNumber}`)}.`,
          `${k(`x = ${d.trialDigit}`)} लेने पर: ${k(`(${d.trialBase} + ${d.trialDigit}) \\times ${d.trialDigit} = ${d.trialProduct}`)}.`
        )),
        step('Step 7: अंतिम उत्तर', `उत्तर: ${boxed(`\\sqrt{${num}} = ${root}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^2 = ${num}`)}, इसलिए ${k(`\\sqrt{${num}} = ${root}`)}.`,
      hint: 'सबसे पहले दाईं ओर से अंकों के जोड़े बनाओ।'
    }
  });
}

// sq_longdiv V0
function buildSqLongdivV0Solution({ num = 529, root = 23 } = {}) {
  return buildSqLongdivBaseSolution({ num, root });
}

// sq_longdiv V1
function buildSqLongdivV1Solution({ num = 1521, root = 39 } = {}) {
  return buildSqLongdivBaseSolution({ num, root });
}

// sq_longdiv V2
function buildSqLongdivV2Solution({ num = 784, root = 28 } = {}) {
  return buildSqLongdivBaseSolution({ num, root });
}

// sq_longdiv V3
function buildSqLongdivV3Solution({ num = 2025, root = 45 } = {}) {
  return buildSqLongdivBaseSolution({ num, root });
}

// sq_longdiv V4
function buildSqLongdivV4Solution({ num = 4096, root = 64 } = {}) {
  return buildSqLongdivBaseSolution({ num, root });
}

// ===================== INTEGRATION EXAMPLES =====================
// solution: buildSqDirectV0Solution({ n: 12, ans: 144 })
// solution: buildSqPfV0Solution({ num: 144, root: 12 })
// solution: buildSqLongdivV0Solution({ num: 529, root: 23 })

// ===================== TIER 10 — BATCH 2 SOLUTION BUILDERS =====================
// **Template: cb_pf**
// Cube-root prime-factorization / cube-root simplification builders.
// Paste this after Batch 1 helpers in solution-builders.js.
//
// Required helpers from Batch 1:
// k(tex), lines(...items), boxed(tex), primeFactors(n), factorCounts(factors), product(arr)
// makeStyledSolution({ en, hing, hi }), step(title, body)

// ---------- cb_pf helper functions ----------

function cbNum(n) {
  return n * n * n;
}

function cubeTripletTexFromFactors(factors) {
  const counts = factorCounts(factors);
  const parts = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const count = counts[p];
      const triplets = Math.floor(count / 3);
      const leftover = count % 3;

      for (let i = 0; i < triplets; i++) {
        parts.push(`(${p} \\times ${p} \\times ${p})`);
      }

      for (let i = 0; i < leftover; i++) {
        parts.push(`${p}`);
      }
    });

  return parts.join(' \\times ');
}

function oneFromEachTripletTex(factors) {
  const counts = factorCounts(factors);
  const selected = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const triplets = Math.floor(counts[p] / 3);
      for (let i = 0; i < triplets; i++) selected.push(p);
    });

  return selected.join(' \\times ');
}

function missingMultiplierForCube(n) {
  const counts = factorCounts(primeFactors(n));
  const missing = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const rem = counts[p] % 3;
      const need = rem === 0 ? 0 : 3 - rem;
      for (let i = 0; i < need; i++) missing.push(p);
    });

  return missing.length ? product(missing) : 1;
}

function removeDivisorForCube(n) {
  const counts = factorCounts(primeFactors(n));
  const remove = [];

  Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((p) => {
      const rem = counts[p] % 3;
      for (let i = 0; i < rem; i++) remove.push(p);
    });

  return remove.length ? product(remove) : 1;
}

function factorListTexCb(n) {
  return primeFactors(n).join(' \\times ');
}

// cb_pf V0
function buildCbPfV0Solution(num = 125, root = Math.round(Math.cbrt(num))) {
  const factors = primeFactors(num);
  const factorsTex = factorListTexCb(num);
  const tripletsTex = cubeTripletTexFromFactors(factors);
  const oneEachTex = oneFromEachTripletTex(factors) || String(root);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt[3]{${num}}`)} using prime factorization.`,
          `Find out: Cube root of ${k(String(num))}.`
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Make triplets', k(`${num} = ${tripletsTex}`)),
        step('Step 4: Take one factor from each triplet', k(`\\sqrt[3]{${num}} = ${oneEachTex}`)),
        step('Step 5: Multiply', k(`\\sqrt[3]{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^3 = ${num}`)}, so ${k(`\\sqrt[3]{${num}} = ${root}`)}.`,
      hint: 'Make groups of three equal prime factors.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find ${k(`\\sqrt[3]{${num}}`)} using prime factorization.`,
          `Find out: ${k(String(num))} ka cube root nikalna hai.`
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Triplets banao', k(`${num} = ${tripletsTex}`)),
        step('Step 4: Har triplet se ek factor lo', k(`\\sqrt[3]{${num}} = ${oneEachTex}`)),
        step('Step 5: Multiply karo', k(`\\sqrt[3]{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^3 = ${num}`)}, isliye ${k(`\\sqrt[3]{${num}} = ${root}`)}.`,
      hint: 'Same prime factors ke groups of 3 banao.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: अभाज्य गुणनखंड विधि से ${k(String(num))} का घनमूल ज्ञात कीजिए।`,
          `ज्ञात करना है: ${k(String(num))} का घनमूल।`
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: तीन-तीन के समूह बनाओ', k(`${num} = ${tripletsTex}`)),
        step('Step 4: हर समूह से एक गुणनखंड लो', k(`\\sqrt[3]{${num}} = ${oneEachTex}`)),
        step('Step 5: गुणा करो', k(`\\sqrt[3]{${num}} = ${oneEachTex} = ${root}`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(root))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`${root}^3 = ${num}`)}, इसलिए ${k(`\\sqrt[3]{${num}} = ${root}`)}.`,
      hint: 'समान अभाज्य गुणनखंडों के तीन-तीन के समूह बनाओ।'
    }
  });
}

// cb_pf V1
function buildCbPfV1Solution(num = 216, root = Math.round(Math.cbrt(num))) {
  return buildCbPfV0Solution(num, root);
}

// cb_pf V2
function buildCbPfV2Solution(num = 72, multiplier = missingMultiplierForCube(num)) {
  const result = num * multiplier;
  const factorsTex = factorListTexCb(num);
  const resultRoot = Math.round(Math.cbrt(result));

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be multiplied to make it a perfect cube.`,
          'Find out: Smallest multiplier.'
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Complete triplets', `To make a perfect cube, every prime factor count must be a multiple of ${k('3')}.`),
        step('Step 4: Find missing factor', `The smallest required multiplier is ${k(String(multiplier))}.`),
        step('Step 5: Check', k(`${num} \\times ${multiplier} = ${result} = ${resultRoot}^3`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(multiplier))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Complete prime-factor triplets; missing multiplier is ${k(String(multiplier))}.`,
      hint: 'For a perfect cube, factor powers must be multiples of 3.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be multiplied to make it a perfect cube.`,
          'Find out: smallest multiplier nikalna hai.'
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Triplets complete karo', `Perfect cube ke liye har prime factor count ${k('3')} ka multiple hona chahiye.`),
        step('Step 4: Missing factor find karo', `Smallest required multiplier ${k(String(multiplier))} hai.`),
        step('Step 5: Check karo', k(`${num} \\times ${multiplier} = ${result} = ${resultRoot}^3`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(multiplier))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Prime-factor triplets complete karo; missing multiplier ${k(String(multiplier))} hai.`,
      hint: 'Perfect cube me powers 3 ke multiples hote hain.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(num))} को पूर्ण घन बनाने के लिए किस सबसे छोटी संख्या से गुणा करना होगा?`,
          'ज्ञात करना है: सबसे छोटा गुणक।'
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: तीन-तीन के समूह पूरे करो', `पूर्ण घन के लिए हर अभाज्य गुणनखंड की घात ${k('3')} की multiple होनी चाहिए।`),
        step('Step 4: missing factor ज्ञात करो', `सबसे छोटा आवश्यक गुणक ${k(String(multiplier))} है।`),
        step('Step 5: जाँच करो', k(`${num} \\times ${multiplier} = ${result} = ${resultRoot}^3`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(multiplier))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `तीन-तीन के समूह पूरे करो; missing multiplier ${k(String(multiplier))} है।`,
      hint: 'पूर्ण घन में सभी prime powers 3 की multiples होती हैं।'
    }
  });
}

// cb_pf V3
function buildCbPfV3Solution(num = 360, divisor = removeDivisorForCube(num)) {
  const result = num / divisor;
  const resultRoot = Math.round(Math.cbrt(result));
  const factorsTex = factorListTexCb(num);

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be divided to make it a perfect cube.`,
          'Find out: Smallest divisor.'
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Remove incomplete triplet factors', 'To make a perfect cube by division, remove factors that do not complete a triplet.'),
        step('Step 4: Smallest divisor', `Required divisor is ${k(String(divisor))}.`),
        step('Step 5: Check', k(`\\frac{${num}}{${divisor}} = ${result} = ${resultRoot}^3`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(divisor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Remove leftover prime factors; divisor is ${k(String(divisor))}.`,
      hint: 'Divide out the factors that do not form complete triplets.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Find the smallest number by which ${k(String(num))} must be divided to make it a perfect cube.`,
          'Find out: smallest divisor nikalna hai.'
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Incomplete triplet factors remove karo', 'Division se perfect cube banane ke liye incomplete triplet wale factors remove karo.'),
        step('Step 4: Smallest divisor', `Required divisor ${k(String(divisor))} hai.`),
        step('Step 5: Check karo', k(`\\frac{${num}}{${divisor}} = ${result} = ${resultRoot}^3`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(divisor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `Leftover prime factors remove karo; divisor ${k(String(divisor))} hai.`,
      hint: 'Jo factors complete triplet nahi bana rahe, unhe divide out karo.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(String(num))} को पूर्ण घन बनाने के लिए किस सबसे छोटी संख्या से भाग देना होगा?`,
          'ज्ञात करना है: सबसे छोटा भाजक।'
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: अधूरे समूह वाले factors हटाओ', 'भाग देकर पूर्ण घन बनाने के लिए अधूरे तीन-तीन के समूह वाले factors हटाते हैं।'),
        step('Step 4: सबसे छोटा भाजक', `आवश्यक भाजक ${k(String(divisor))} है।`),
        step('Step 5: जाँच करो', k(`\\frac{${num}}{${divisor}} = ${result} = ${resultRoot}^3`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(divisor))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `बचे हुए prime factors हटाओ; divisor ${k(String(divisor))} है।`,
      hint: 'जो factors पूरे तीन-तीन के समूह नहीं बनाते, उन्हें divide out करो।'
    }
  });
}

// cb_pf V4
function buildCbPfV4Solution(num = 512) {
  const factorsTex = factorListTexCb(num);
  const divisor = removeDivisorForCube(num);
  const multiplier = missingMultiplierForCube(num);
  const isPerfectCube = divisor === 1 && multiplier === 1;
  const root = Math.round(Math.cbrt(num));

  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Check whether ${k(String(num))} is a perfect cube using prime factorization.`,
          `Find out: Whether ${k(String(num))} is a perfect cube.`
        )),
        step('Step 2: Prime factorization', k(`${num} = ${factorsTex}`)),
        step('Step 3: Check triplets', isPerfectCube ? 'All prime factors can be grouped in triplets.' : 'Some prime factors cannot be grouped in triplets.'),
        step('Step 4: Final answer', `Answer: ${boxed(isPerfectCube ? `${num}\\text{ is a perfect cube}` : `${num}\\text{ is not a perfect cube}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: isPerfectCube ? `${k(`${root}^3 = ${num}`)}.` : 'A perfect cube must have prime-factor powers in multiples of 3.',
      hint: 'Check whether every prime factor count is a multiple of 3.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: Check whether ${k(String(num))} is a perfect cube using prime factorization.`,
          `Find out: ${k(String(num))} perfect cube hai ya nahi.`
        )),
        step('Step 2: Prime factorization karo', k(`${num} = ${factorsTex}`)),
        step('Step 3: Triplets check karo', isPerfectCube ? 'Sab prime factors triplets me group ho rahe hain.' : 'Kuch prime factors triplets me group nahi ho rahe.'),
        step('Step 4: Final answer', `Answer: ${boxed(isPerfectCube ? `${num}\\text{ perfect cube hai}` : `${num}\\text{ perfect cube nahi hai}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: isPerfectCube ? `${k(`${root}^3 = ${num}`)}.` : 'Perfect cube me prime-factor powers 3 ke multiples hote hain.',
      hint: 'Har prime factor count 3 ka multiple hai ya nahi check karo.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: अभाज्य गुणनखंड विधि से जाँचिए कि ${k(String(num))} पूर्ण घन है या नहीं।`,
          `ज्ञात करना है: ${k(String(num))} पूर्ण घन है या नहीं।`
        )),
        step('Step 2: अभाज्य गुणनखंड करो', k(`${num} = ${factorsTex}`)),
        step('Step 3: तीन-तीन के समूह जाँचो', isPerfectCube ? 'सभी prime factors तीन-तीन के समूह में हैं।' : 'कुछ prime factors तीन-तीन के समूह में नहीं हैं।'),
        step('Step 4: अंतिम उत्तर', `उत्तर: ${boxed(isPerfectCube ? `${num}\\text{ पूर्ण घन है}` : `${num}\\text{ पूर्ण घन नहीं है}`)}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: isPerfectCube ? `${k(`${root}^3 = ${num}`)}.` : 'पूर्ण घन में prime-factor powers 3 की multiples होती हैं।',
      hint: 'जाँचो कि हर prime factor count 3 का multiple है या नहीं।'
    }
  });
}

// cb_pf V5
function buildCbPfV5Solution(a, b, num, den, ans) {
  return makeStyledSolution({
    en: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: ${k(`\\sqrt[3]{${num}}`)} ÷ ${k(`\\sqrt[3]{${den}}`)} = ?`,
          `Find out: Value of ${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}}`)}.`
        )),
        step('Step 2: Use cube root division property', lines(
          'For same-index cube roots:',
          k('\\sqrt[3]{x} \\div \\sqrt[3]{y} = \\sqrt[3]{\\frac{x}{y}}')
        )),
        step('Step 3: Combine under one cube root',
          k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{\\frac{${num}}{${den}}}`)),
        step('Step 4: Simplify the fraction',
          k(`\\frac{${num}}{${den}} = \\frac{(${a}^3 \\times ${b}^3)}{${b}^3} = ${a}^3`)),
        step('Step 5: Take cube root',
          k(`\\sqrt[3]{${a}^3} = ${a}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{${a}^3} = ${a}`)}.`,
      hint: 'Combine both cube roots first, then simplify the fraction.'
    },
    hing: {
      steps: [
        step('Step 1: Question given', lines(
          `Question: ${k(`\\sqrt[3]{${num}}`)} ÷ ${k(`\\sqrt[3]{${den}}`)} = ?`,
          `Find out: ${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}}`)} ka value.`
        )),
        step('Step 2: Cube root division property use karo', lines(
          'Same-index cube roots ke liye:',
          k('\\sqrt[3]{x} \\div \\sqrt[3]{y} = \\sqrt[3]{\\frac{x}{y}}')
        )),
        step('Step 3: Dono ko ek cube root ke andar combine karo',
          k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{\\frac{${num}}{${den}}}`)),
        step('Step 4: Fraction simplify karo',
          k(`\\frac{${num}}{${den}} = \\frac{(${a}^3 \\times ${b}^3)}{${b}^3} = ${a}^3`)),
        step('Step 5: Cube root lo',
          k(`\\sqrt[3]{${a}^3} = ${a}`)),
        step('Step 6: Final answer', `Answer: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{${a}^3} = ${a}`)}.`,
      hint: 'Pehle cube roots combine karo, phir fraction simplify karo.'
    },
    hi: {
      steps: [
        step('Step 1: दिया गया प्रश्न', lines(
          `प्रश्न: ${k(`\\sqrt[3]{${num}}`)} ÷ ${k(`\\sqrt[3]{${den}}`)} = ?`,
          `ज्ञात करना है: ${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}}`)} का मान।`
        )),
        step('Step 2: घनमूल भाग का नियम उपयोग करो', lines(
          'समान घातांक वाले घनमूलों के लिए:',
          k('\\sqrt[3]{x} \\div \\sqrt[3]{y} = \\sqrt[3]{\\frac{x}{y}}')
        )),
        step('Step 3: दोनों को एक घनमूल में लिखो',
          k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{\\frac{${num}}{${den}}}`)),
        step('Step 4: भिन्न को सरल करो',
          k(`\\frac{${num}}{${den}} = \\frac{(${a}^3 \\times ${b}^3)}{${b}^3} = ${a}^3`)),
        step('Step 5: घनमूल लो',
          k(`\\sqrt[3]{${a}^3} = ${a}`)),
        step('Step 6: अंतिम उत्तर', `उत्तर: ${boxed(String(ans))}`)
      ],
      teachersSay: '',
      mistakes: [],
      shortcut: `${k(`\\sqrt[3]{${num}} \\div \\sqrt[3]{${den}} = \\sqrt[3]{${a}^3} = ${a}`)}.`,
      hint: 'पहले घनमूलों को combine करो, फिर भिन्न को सरल करो।'
    }
  });
}

// Integration example from your variants.js:
// const sol = buildCbPfV5Solution(a, b, num, den, ans);