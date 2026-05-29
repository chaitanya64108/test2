/* my-questions-solutions1/mqs-b.js
   Descriptive (page-style) DYNAMIC solutions - Part B: word problems
   (uprooting, fencing, paths, tiles, distribution, perfect-square check).
   Covers (10): mq_uproot, mq_fence, mq_path_out, mq_path_in, mq_tiles_total,
                mq_tiles_side, mq_tile_cost, mq_equal, mq_distrib, mq_sq_check.
   NEW file - does NOT modify any existing file. Requires mqs-helpers.js loaded first.
   Steps + shortcuts are descriptive (beginner-friendly); hints are one-liners.
   Every base generator AND all VARIANTS are wrapped, so solutions are per-question dynamic.
*/
(function () {
  'use strict';
  var M = window.MQS;
  if (!M) { try { console.warn('[mqs-b] MQS missing; load mqs-helpers.js first'); } catch (e) {} return; }
  var K = M.K, RT = M.RT, FR = M.FR, POW = M.POW, BOX = M.BOX, X = M.X, L = M.L,
      steps = M.steps, MK = M.MK, ints = M.ints, ansN = M.ansN, isqrt = M.isqrt;

  function solUproot(u, rem, k) {
    var orig = u + rem, addEq = K(rem + ' + ' + u + ' = ' + orig), rootEq = K(RT(orig) + ' = ' + k),
        ans = K(BOX(k)), scut = K(RT(rem + ' + ' + u) + ' = ' + k);
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'At the start everything was arranged in a perfect square, so the total was (side x side). Then ' + u + ' were removed and ' + rem + ' are left. To find the side we must first rebuild the ORIGINAL total.'],
        ['Step 2 - Rebuild the original total', 'Original total = items left + items removed = ' + addEq + '.'],
        ['Step 3 - Take the square root', 'The number in each row (the side) is ' + rootEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Add the removed ones back to the remaining ones, then square-root the total: ' + scut + '. Never take the root of the leftover alone.', h: 'Add removed + remaining, then take the square root.' },
      { s: steps([
        ['Step 1 - Samjho', 'Shuru me sab kuch ek perfect square me laga tha, yaani total = (side x side). Phir ' + u + ' hata diye gaye aur ' + rem + ' bache. Side nikaalne ke liye pehle ORIGINAL total wapas banao.'],
        ['Step 2 - Original total wapas banao', 'Original total = bache + hataye = ' + addEq + '.'],
        ['Step 3 - Square root lo', 'Har row me number (side) = ' + rootEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Hataye gaye ko bache hue me wapas jodo, phir total ka square root lo: ' + scut + '. Sirf bache hue ka root mat lo.', h: 'Hataye + bache jodo, phir square root.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0936\u0941\u0930\u0942 \u092e\u0947\u0902 \u0938\u092c \u0915\u0941\u091b \u090f\u0915 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092e\u0947\u0902 \u0932\u0917\u093e \u0925\u093e, \u092f\u093e\u0928\u0940 \u0915\u0941\u0932 = (\u092d\u0941\u091c\u093e x \u092d\u0941\u091c\u093e)\u0964 \u092b\u093f\u0930 ' + u + ' \u0939\u091f\u093e \u0926\u093f\u090f \u0917\u090f \u0914\u0930 ' + rem + ' \u092c\u091a\u0947\u0964 \u092d\u0941\u091c\u093e \u0928\u093f\u0915\u093e\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092a\u0939\u0932\u0947 \u092e\u0942\u0932 \u0915\u0941\u0932 \u0935\u093e\u092a\u0938 \u092c\u0928\u093e\u0913\u0964'],
        ['\u091a\u0930\u0923 2 - \u092e\u0942\u0932 \u0915\u0941\u0932 \u0935\u093e\u092a\u0938 \u092c\u0928\u093e\u0913', '\u092e\u0942\u0932 \u0915\u0941\u0932 = \u092c\u091a\u0947 + \u0939\u091f\u093e\u090f = ' + addEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0932\u094b', '\u0939\u0930 \u092a\u0902\u0915\u094d\u0924\u093f \u092e\u0947\u0902 \u0938\u0902\u0916\u094d\u092f\u093e (\u092d\u0941\u091c\u093e) = ' + rootEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0939\u091f\u093e\u090f \u0917\u090f \u0915\u094b \u092c\u091a\u0947 \u0939\u0941\u0913\u0902 \u092e\u0947\u0902 \u0935\u093e\u092a\u0938 \u091c\u094b\u0921\u093c\u094b, \u092b\u093f\u0930 \u0915\u0941\u0932 \u0915\u093e \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0932\u094b: ' + scut + '\u0964', h: '\u0939\u091f\u093e\u090f + \u0936\u0947\u0937 \u091c\u094b\u0921\u093c\u094b, \u092b\u093f\u0930 \u0935\u0930\u094d\u0917\u092e\u0942\u0932\u0964' }
    );
  }

  function solFence(cost, rate) {
    var per = cost / rate, side = per / 4, area = side * side,
        perEq = K(FR(cost, rate) + ' = ' + per), sideEq = K(FR(per, 4) + ' = ' + side),
        areaEq = K('(' + side + X() + side + ') = ' + area), ans = K(BOX(area));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'The fencing cost depends on the perimeter: total cost = perimeter x rate. So dividing the cost by the rate gives the perimeter; from the perimeter we get the side, and then the area.'],
        ['Step 2 - Find the perimeter', 'Perimeter = total cost / rate = ' + perEq + ' m.'],
        ['Step 3 - Find the side, then the area', L('A square has 4 equal sides, so side = perimeter / 4 = ' + sideEq + ' m.', 'Area = side x side = ' + areaEq + ' sq m.')],
        ['Step 4 - Answer', ans]
      ]), c: 'Perimeter = cost / rate, side = perimeter / 4, area = side squared. Here side = ' + side + ' m, so area = ' + area + ' sq m.', h: 'Cost / rate gives perimeter; / 4 gives side; then square it.' },
      { s: steps([
        ['Step 1 - Samjho', 'Fencing cost perimeter par depend karti hai: total cost = perimeter x rate. To cost ko rate se divide karne par perimeter milta hai; perimeter se side, phir area.'],
        ['Step 2 - Perimeter nikaalo', 'Perimeter = total cost / rate = ' + perEq + ' m.'],
        ['Step 3 - Side, phir area', L('Square ki 4 barabar sides hoti hain, to side = perimeter / 4 = ' + sideEq + ' m.', 'Area = side x side = ' + areaEq + ' sq m.')],
        ['Step 4 - Answer', ans]
      ]), c: 'Perimeter = cost / rate, side = perimeter / 4, area = side ka square. Yahan side = ' + side + ' m, to area = ' + area + ' sq m.', h: 'Cost / rate se perimeter; / 4 se side; phir square.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0924\u093e\u0930\u092c\u0902\u0926\u0940 \u0915\u0940 \u0932\u093e\u0917\u0924 \u092a\u0930\u093f\u092e\u093e\u092a \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0939\u0948: \u0915\u0941\u0932 \u0932\u093e\u0917\u0924 = \u092a\u0930\u093f\u092e\u093e\u092a x \u0926\u0930\u0964 \u0924\u094b \u0932\u093e\u0917\u0924 \u0915\u094b \u0926\u0930 \u0938\u0947 \u092d\u093e\u0917 \u0926\u0947\u0928\u0947 \u092a\u0930 \u092a\u0930\u093f\u092e\u093e\u092a \u092e\u093f\u0932\u0924\u093e \u0939\u0948; \u092a\u0930\u093f\u092e\u093e\u092a \u0938\u0947 \u092d\u0941\u091c\u093e, \u092b\u093f\u0930 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932\u0964'],
        ['\u091a\u0930\u0923 2 - \u092a\u0930\u093f\u092e\u093e\u092a \u0928\u093f\u0915\u093e\u0932\u094b', '\u092a\u0930\u093f\u092e\u093e\u092a = \u0915\u0941\u0932 \u0932\u093e\u0917\u0924 / \u0926\u0930 = ' + perEq + ' m\u0964'],
        ['\u091a\u0930\u0923 3 - \u092d\u0941\u091c\u093e, \u092b\u093f\u0930 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932', L('\u0935\u0930\u094d\u0917 \u0915\u0940 4 \u092c\u0930\u093e\u092c\u0930 \u092d\u0941\u091c\u093e\u090f\u0901 \u0939\u094b\u0924\u0940 \u0939\u0948\u0902, \u0924\u094b \u092d\u0941\u091c\u093e = \u092a\u0930\u093f\u092e\u093e\u092a / 4 = ' + sideEq + ' m\u0964', '\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092d\u0941\u091c\u093e x \u092d\u0941\u091c\u093e = ' + areaEq + ' sq m\u0964')],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u092a\u0930\u093f\u092e\u093e\u092a = \u0932\u093e\u0917\u0924 / \u0926\u0930, \u092d\u0941\u091c\u093e = \u092a\u0930\u093f\u092e\u093e\u092a / 4, \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092d\u0941\u091c\u093e\u00b2\u0964 \u092f\u0939\u093e\u0901 \u092d\u0941\u091c\u093e = ' + side + ' m, \u0924\u094b \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = ' + area + ' sq m\u0964', h: '\u0932\u093e\u0917\u0924 / \u0926\u0930 \u0938\u0947 \u092a\u0930\u093f\u092e\u093e\u092a; / 4 \u0938\u0947 \u092d\u0941\u091c\u093e; \u092b\u093f\u0930 \u0935\u0930\u094d\u0917\u0964' }
    );
  }

  function solPathOut(s, w) {
    var o = s + 2 * w, area = o * o - s * s,
        outerEq = K(s + ' + (2' + X() + w + ') = ' + o),
        areaEq = K('(' + o + X() + o + ') - (' + s + X() + s + ') = ' + (o * o) + ' - ' + (s * s) + ' = ' + area), ans = K(BOX(area));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'A path of width ' + w + ' m runs OUTSIDE a square of side ' + s + ' m. Going outward, the width is added on BOTH opposite sides, so the outer side grows by 2 x width.'],
        ['Step 2 - Find the outer side', 'Outer side = inner side + 2 x width = ' + outerEq + ' m.'],
        ['Step 3 - Path area = outer area - inner area', areaEq + ' sq m.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Outer side = side + 2 x width. Path area = (outer side) squared - (inner side) squared = ' + area + ' sq m.', h: 'Outer side = side + 2 x width, then subtract the inner area.' },
      { s: steps([
        ['Step 1 - Samjho', w + ' m chaudai ka path square (side ' + s + ' m) ke BAHAR hai. Bahar jaate hue width dono opposite sides par judti hai, to outer side 2 x width se badhti hai.'],
        ['Step 2 - Outer side nikaalo', 'Outer side = inner side + 2 x width = ' + outerEq + ' m.'],
        ['Step 3 - Path area = outer area - inner area', areaEq + ' sq m.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Outer side = side + 2 x width. Path area = (outer side)\u00b2 - (inner side)\u00b2 = ' + area + ' sq m.', h: 'Outer side = side + 2 x width, phir inner area ghatao.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', w + ' m \u091a\u094c\u0921\u093c\u093e\u0908 \u0915\u093e \u0930\u093e\u0938\u094d\u0924\u093e \u0935\u0930\u094d\u0917 (\u092d\u0941\u091c\u093e ' + s + ' m) \u0915\u0947 \u092c\u093e\u0939\u0930 \u0939\u0948\u0964 \u092c\u093e\u0939\u0930 \u091c\u093e\u0924\u0947 \u0939\u0941\u090f \u091a\u094c\u0921\u093c\u093e\u0908 \u0926\u094b\u0928\u094b\u0902 \u0913\u0930 \u091c\u0941\u0921\u093c\u0924\u0940 \u0939\u0948, \u0924\u094b \u092c\u093e\u0939\u0930\u0940 \u092d\u0941\u091c\u093e 2 x \u091a\u094c\u0921\u093c\u093e\u0908 \u0938\u0947 \u092c\u0922\u093c\u0924\u0940 \u0939\u0948\u0964'],
        ['\u091a\u0930\u0923 2 - \u092c\u093e\u0939\u0930\u0940 \u092d\u0941\u091c\u093e \u0928\u093f\u0915\u093e\u0932\u094b', '\u092c\u093e\u0939\u0930\u0940 \u092d\u0941\u091c\u093e = \u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e + 2 x \u091a\u094c\u0921\u093c\u093e\u0908 = ' + outerEq + ' m\u0964'],
        ['\u091a\u0930\u0923 3 - \u092a\u0925 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092c\u093e\u0939\u0930\u0940 - \u092d\u0940\u0924\u0930\u0940', areaEq + ' sq m\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u092c\u093e\u0939\u0930\u0940 \u092d\u0941\u091c\u093e = \u092d\u0941\u091c\u093e + 2 x \u091a\u094c\u0921\u093c\u093e\u0908\u0964 \u092a\u0925 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = (\u092c\u093e\u0939\u0930\u0940)\u00b2 - (\u092d\u0940\u0924\u0930\u0940)\u00b2 = ' + area + ' sq m\u0964', h: '\u092c\u093e\u0939\u0930\u0940 \u092d\u0941\u091c\u093e = \u092d\u0941\u091c\u093e + 2 x \u091a\u094c\u0921\u093c\u093e\u0908, \u092b\u093f\u0930 \u092d\u0940\u0924\u0930\u0940 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0918\u091f\u093e\u0913\u0964' }
    );
  }

  function solPathIn(s, w) {
    var inr = s - 2 * w, area = inr * inr,
        innerEq = K(s + ' - (2' + X() + w + ') = ' + inr), areaEq = K('(' + inr + X() + inr + ') = ' + area), ans = K(BOX(area));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'The path runs INSIDE the square, eating width ' + w + ' m from both sides. What remains is a smaller square whose side = ' + s + ' - 2 x width.'],
        ['Step 2 - Find the inner side', 'Inner side = ' + innerEq + ' m.'],
        ['Step 3 - Find the inner area', 'Inner area = ' + areaEq + ' sq m.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Inner side = side - 2 x width; remaining area = (inner side) squared = ' + area + ' sq m.', h: 'Inner side = side - 2 x width, then square it.' },
      { s: steps([
        ['Step 1 - Samjho', 'Path square ke ANDAR hai, dono taraf se ' + w + ' m width khaa jaata hai. Jo bachta hai woh ek chhota square hai jiski side = ' + s + ' - 2 x width.'],
        ['Step 2 - Inner side nikaalo', 'Inner side = ' + innerEq + ' m.'],
        ['Step 3 - Inner area nikaalo', 'Inner area = ' + areaEq + ' sq m.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Inner side = side - 2 x width; bacha area = (inner side)\u00b2 = ' + area + ' sq m.', h: 'Inner side = side - 2 x width, phir square.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0930\u093e\u0938\u094d\u0924\u093e \u0935\u0930\u094d\u0917 \u0915\u0947 \u0905\u0902\u0926\u0930 \u0939\u0948, \u0926\u094b\u0928\u094b\u0902 \u0913\u0930 \u0938\u0947 ' + w + ' m \u091a\u094c\u0921\u093c\u093e\u0908 \u0916\u093e \u091c\u093e\u0924\u093e \u0939\u0948\u0964 \u091c\u094b \u092c\u091a\u0924\u093e \u0939\u0948 \u0935\u0939 \u090f\u0915 \u091b\u094b\u091f\u093e \u0935\u0930\u094d\u0917 \u0939\u0948 \u091c\u093f\u0938\u0915\u0940 \u092d\u0941\u091c\u093e = ' + s + ' - 2 x \u091a\u094c\u0921\u093c\u093e\u0908\u0964'],
        ['\u091a\u0930\u0923 2 - \u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e \u0928\u093f\u0915\u093e\u0932\u094b', '\u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e = ' + innerEq + ' m\u0964'],
        ['\u091a\u0930\u0923 3 - \u092d\u0940\u0924\u0930\u0940 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932', '\u092d\u0940\u0924\u0930\u0940 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = ' + areaEq + ' sq m\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e = \u092d\u0941\u091c\u093e - 2 x \u091a\u094c\u0921\u093c\u093e\u0908; \u092c\u091a\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = (\u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e)\u00b2 = ' + area + ' sq m\u0964', h: '\u092d\u0940\u0924\u0930\u0940 \u092d\u0941\u091c\u093e = \u092d\u0941\u091c\u093e - 2 x \u091a\u094c\u0921\u093c\u093e\u0908, \u092b\u093f\u0930 \u0935\u0930\u094d\u0917\u0964' }
    );
  }

  function solTilesTotal(fA, tA) {
    var t = fA / tA, eq = K(FR(fA, tA) + ' = ' + t), ans = K(BOX(t));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'Every tile covers ' + tA + ' of area. The number of tiles needed = total floor area / area of one tile.'],
        ['Step 2 - Divide', 'Number of tiles = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Tiles = floor area / one tile area = ' + t + '.', h: 'Divide the floor area by one tile area.' },
      { s: steps([
        ['Step 1 - Samjho', 'Har tile ' + tA + ' area cover karti hai. Tiles ki sankhya = total floor area / ek tile ka area.'],
        ['Step 2 - Divide karo', 'Tiles = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Tiles = floor area / ek tile area = ' + t + '.', h: 'Floor area ko ek tile area se divide karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0939\u0930 \u091f\u093e\u0907\u0932 ' + tA + ' \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0918\u0947\u0930\u0924\u0940 \u0939\u0948\u0964 \u091f\u093e\u0907\u0932\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e = \u0915\u0941\u0932 \u092b\u0930\u094d\u0936 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 / \u090f\u0915 \u091f\u093e\u0907\u0932 \u0915\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932\u0964'],
        ['\u091a\u0930\u0923 2 - \u092d\u093e\u0917 \u0926\u094b', '\u091f\u093e\u0907\u0932\u0947\u0902 = ' + eq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u091f\u093e\u0907\u0932\u0947\u0902 = \u092b\u0930\u094d\u0936 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 / \u090f\u0915 \u091f\u093e\u0907\u0932 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = ' + t + '\u0964', h: '\u092b\u0930\u094d\u0936 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0915\u094b \u090f\u0915 \u091f\u093e\u0907\u0932 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b\u0964' }
    );
  }

  function solTilesSide(F, ts) {
    var n = F / ts, eq = K(FR(F, ts) + ' = ' + n), ans = K(BOX(n));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'Along one edge, a floor side of ' + F + ' is covered by tiles each of side ' + ts + '. Tiles along that side = floor side / tile side.'],
        ['Step 2 - Divide', 'Tiles along a side = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Tiles along a side = side / tile side = ' + n + '.', h: 'Divide the side length by the tile side.' },
      { s: steps([
        ['Step 1 - Samjho', 'Ek edge par floor side ' + F + ' ko ' + ts + ' side wali tiles cover karti hain. Us side par tiles = floor side / tile side.'],
        ['Step 2 - Divide karo', 'Ek side par tiles = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Ek side par tiles = side / tile side = ' + n + '.', h: 'Side ko tile side se divide karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u090f\u0915 \u0915\u093f\u0928\u093e\u0930\u0947 \u092a\u0930 ' + F + ' \u092d\u0941\u091c\u093e \u0915\u094b ' + ts + ' \u092d\u0941\u091c\u093e \u0935\u093e\u0932\u0940 \u091f\u093e\u0907\u0932\u0947\u0902 \u0922\u0915\u0924\u0940 \u0939\u0948\u0902\u0964 \u0909\u0938 \u092d\u0941\u091c\u093e \u092a\u0930 \u091f\u093e\u0907\u0932\u0947\u0902 = \u092d\u0941\u091c\u093e / \u091f\u093e\u0907\u0932 \u092d\u0941\u091c\u093e\u0964'],
        ['\u091a\u0930\u0923 2 - \u092d\u093e\u0917 \u0926\u094b', '\u090f\u0915 \u092d\u0941\u091c\u093e \u092a\u0930 \u091f\u093e\u0907\u0932\u0947\u0902 = ' + eq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u090f\u0915 \u092d\u0941\u091c\u093e \u092a\u0930 \u091f\u093e\u0907\u0932\u0947\u0902 = \u092d\u0941\u091c\u093e / \u091f\u093e\u0907\u0932 \u092d\u0941\u091c\u093e = ' + n + '\u0964', h: '\u092d\u0941\u091c\u093e \u0915\u094b \u091f\u093e\u0907\u0932 \u092d\u0941\u091c\u093e \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b\u0964' }
    );
  }

  function solTileCost(s, rate, cost) {
    var area = s * s, areaEq = K('(' + s + X() + s + ') = ' + area), costEq = K('(' + area + X() + rate + ') = ' + cost), ans = K(BOX(cost));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'First find how much floor there is (area = side x side), then multiply that area by the cost per square unit.'],
        ['Step 2 - Find the area', 'Area = ' + areaEq + ' sq m.'],
        ['Step 3 - Multiply by the rate', 'Total cost = area x rate = ' + costEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Area = side squared = ' + area + '; total cost = area x rate = ' + cost + '.', h: 'Area = side squared, then multiply by the rate.' },
      { s: steps([
        ['Step 1 - Samjho', 'Pehle floor kitna hai (area = side x side) nikaalo, phir us area ko per square unit cost se multiply karo.'],
        ['Step 2 - Area nikaalo', 'Area = ' + areaEq + ' sq m.'],
        ['Step 3 - Rate se multiply', 'Total cost = area x rate = ' + costEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Area = side ka square = ' + area + '; total cost = area x rate = ' + cost + '.', h: 'Area = side\u00b2, phir rate se multiply.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u092a\u0939\u0932\u0947 \u092b\u0930\u094d\u0936 \u0915\u093f\u0924\u0928\u093e \u0939\u0948 (\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092d\u0941\u091c\u093e x \u092d\u0941\u091c\u093e) \u0928\u093f\u0915\u093e\u0932\u094b, \u092b\u093f\u0930 \u0909\u0938 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0915\u094b \u092a\u094d\u0930\u0924\u093f \u0935\u0930\u094d\u0917 \u0907\u0915\u093e\u0908 \u0926\u0930 \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b\u0964'],
        ['\u091a\u0930\u0923 2 - \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 \u0928\u093f\u0915\u093e\u0932\u094b', '\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = ' + areaEq + ' sq m\u0964'],
        ['\u091a\u0930\u0923 3 - \u0926\u0930 \u0938\u0947 \u0917\u0941\u0923\u093e', '\u0915\u0941\u0932 \u0932\u093e\u0917\u0924 = \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 x \u0926\u0930 = ' + costEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092d\u0941\u091c\u093e\u00b2 = ' + area + '; \u0915\u0941\u0932 \u0932\u093e\u0917\u0924 = \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 x \u0926\u0930 = ' + cost + '\u0964', h: '\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092b\u0932 = \u092d\u0941\u091c\u093e\u00b2, \u092b\u093f\u0930 \u0926\u0930 \u0938\u0947 \u0917\u0941\u0923\u093e\u0964' }
    );
  }

  function solEqual(n) {
    var tot = n * n, eq = K('(' + n + X() + n + ') = ' + POW(n, 2) + ' = ' + tot), ans = K(BOX(tot));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'There are ' + n + ' members and each one contributes an amount EQUAL to the number of members, i.e. ' + n + ' each. So total = members x contribution = ' + n + ' x ' + n + '.'],
        ['Step 2 - Multiply', 'Total = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'When each of n people gives n, the total = n x n = ' + tot + '.', h: 'Total = number x number (n squared).' },
      { s: steps([
        ['Step 1 - Samjho', n + ' members hain aur har ek members ki SANKHYA ke barabar amount deta hai, yaani ' + n + ' har ek. To total = members x contribution = ' + n + ' x ' + n + '.'],
        ['Step 2 - Multiply karo', 'Total = ' + eq + '.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Jab n logon me se har ek n de, to total = n x n = ' + tot + '.', h: 'Total = sankhya x sankhya (n\u00b2).' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', n + ' \u0938\u0926\u0938\u094d\u092f \u0939\u0948\u0902 \u0914\u0930 \u0939\u0930 \u090f\u0915 \u0938\u0926\u0938\u094d\u092f\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0930\u093e\u0936\u093f \u0926\u0947\u0924\u093e \u0939\u0948, \u092f\u093e\u0928\u0940 ' + n + ' \u0939\u0930 \u090f\u0915\u0964 \u0924\u094b \u0915\u0941\u0932 = \u0938\u0926\u0938\u094d\u092f x \u092f\u094b\u0917\u0926\u093e\u0928 = ' + n + ' x ' + n + '\u0964'],
        ['\u091a\u0930\u0923 2 - \u0917\u0941\u0923\u093e', '\u0915\u0941\u0932 = ' + eq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u091c\u092c n \u0932\u094b\u0917\u094b\u0902 \u092e\u0947\u0902 \u0938\u0947 \u0939\u0930 \u090f\u0915 n \u0926\u0947, \u0924\u094b \u0915\u0941\u0932 = n x n = ' + tot + '\u0964', h: '\u0915\u0941\u0932 = \u0938\u0902\u0916\u094d\u092f\u093e x \u0938\u0902\u0916\u094d\u092f\u093e (n\u00b2)\u0964' }
    );
  }

  function solDist(tot, kk, n) {
    var q = tot / kk, divEq = K(POW('count', 2) + ' = ' + FR(tot, kk) + ' = ' + q), rootEq = K(RT(q) + ' = ' + n), ans = K(BOX(n));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'Each person receives ' + kk + ' times the number of people, so total = ' + kk + ' x (count) x (count) = ' + kk + ' x count squared. We reverse it: first divide by ' + kk + ', then take the square root.'],
        ['Step 2 - Divide by ' + kk, divEq + '.'],
        ['Step 3 - Take the square root', rootEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'count = square root of (total / ' + kk + ') = ' + n + '.', h: 'Divide the total by ' + kk + ', then take the square root.' },
      { s: steps([
        ['Step 1 - Samjho', 'Har vyakti ko logon ki sankhya ka ' + kk + ' guna milta hai, to total = ' + kk + ' x count x count = ' + kk + ' x count\u00b2. Ise ulta karo: pehle ' + kk + ' se divide, phir square root.'],
        ['Step 2 - ' + kk + ' se divide', divEq + '.'],
        ['Step 3 - Square root lo', rootEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'count = (total / ' + kk + ') ka square root = ' + n + '.', h: 'Total ko ' + kk + ' se divide, phir square root.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0939\u0930 \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0915\u094b \u0932\u094b\u0917\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e ' + kk + ' \u0917\u0941\u0928\u093e \u092e\u093f\u0932\u0924\u093e \u0939\u0948, \u0924\u094b \u0915\u0941\u0932 = ' + kk + ' x \u0938\u0902\u0916\u094d\u092f\u093e\u00b2\u0964 \u0907\u0938\u0947 \u0909\u0932\u091f\u093e \u0915\u0930\u094b: \u092a\u0939\u0932\u0947 ' + kk + ' \u0938\u0947 \u092d\u093e\u0917, \u092b\u093f\u0930 \u0935\u0930\u094d\u0917\u092e\u0942\u0932\u0964'],
        ['\u091a\u0930\u0923 2 - ' + kk + ' \u0938\u0947 \u092d\u093e\u0917', divEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0932\u094b', rootEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0938\u0902\u0916\u094d\u092f\u093e = (\u0915\u0941\u0932 / ' + kk + ') \u0915\u093e \u0935\u0930\u094d\u0917\u092e\u0942\u0932 = ' + n + '\u0964', h: '\u0915\u0941\u0932 \u0915\u094b ' + kk + ' \u0938\u0947 \u092d\u093e\u0917, \u092b\u093f\u0930 \u0935\u0930\u094d\u0917\u092e\u0942\u0932\u0964' }
    );
  }

  function solSqChk(sq, k) {
    var rootEq = K(RT(sq) + ' = ' + k), ans = K(BOX(sq));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'To arrange everyone in a perfect square, the total must equal (count) x (count) - that is, it must be a PERFECT SQUARE. So we test which total has an exact whole-number square root.'],
        ['Step 2 - Check the square root', rootEq + ' is a whole number, so ' + sq + ' can form a perfect square.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Pick the total whose square root is a whole number: ' + rootEq + '.', h: 'Choose the option with an exact (whole-number) square root.' },
      { s: steps([
        ['Step 1 - Samjho', 'Sabko perfect square me lagane ke liye total (count) x (count) hona chahiye - yaani PERFECT SQUARE. To dekho kis total ka exact whole-number square root hai.'],
        ['Step 2 - Square root check karo', rootEq + ' ek whole number hai, isliye ' + sq + ' perfect square ban sakta hai.'],
        ['Step 3 - Answer', ans]
      ]), c: 'Wahi total chuno jiska square root whole number ho: ' + rootEq + '.', h: 'Exact (whole-number) square root wala option chuno.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u092c\u0915\u094b \u090f\u0915 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092e\u0947\u0902 \u0932\u0917\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u0941\u0932 (\u0938\u0902\u0916\u094d\u092f\u093e) x (\u0938\u0902\u0916\u094d\u092f\u093e) \u0939\u094b\u0928\u093e \u091a\u093e\u0939\u093f\u090f - \u092f\u093e\u0928\u0940 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917\u0964 \u0924\u094b \u0926\u0947\u0916\u094b \u0915\u093f\u0938 \u0915\u0941\u0932 \u0915\u093e \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0939\u0948\u0964'],
        ['\u091a\u0930\u0923 2 - \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u091c\u093e\u0901\u091a\u094b', rootEq + ' \u090f\u0915 \u092a\u0942\u0930\u094d\u0923 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u0948, \u0907\u0938\u0932\u093f\u090f ' + sq + ' \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092c\u0928 \u0938\u0915\u0924\u093e \u0939\u0948\u0964'],
        ['\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0935\u0939\u0940 \u0915\u0941\u0932 \u091a\u0941\u0928\u094b \u091c\u093f\u0938\u0915\u093e \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u092a\u0942\u0930\u094d\u0923 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u094b: ' + rootEq + '\u0964', h: '\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0935\u093e\u0932\u093e \u0935\u093f\u0915\u0932\u094d\u092a \u091a\u0941\u0928\u094b\u0964' }
    );
  }

  var SOL = {
    mq_uproot: function (o) { var p = ints(o.question.en); return solUproot(p[0], p[1], ansN(o)); },
    mq_fence: function (o) { var p = ints(o.question.en); return solFence(p[0], p[1]); },
    mq_path_out: function (o) { var p = ints(o.question.en); return solPathOut(p[1], p[0]); },
    mq_path_in: function (o) { var p = ints(o.question.en); return solPathIn(p[1], p[0]); },
    mq_tiles_total: function (o) { var p = ints(o.question.en); return solTilesTotal(p[0], p[1]); },
    mq_tiles_side: function (o) { var p = ints(o.question.en); return solTilesSide(p[0], p[1]); },
    mq_tile_cost: function (o) { var p = ints(o.question.en); return solTileCost(p[0], p[1], ansN(o)); },
    mq_equal: function (o) { return solEqual(ints(o.question.en)[0]); },
    mq_distrib: function (o) { var p = ints(o.question.en); return solDist(p[0], p[1], ansN(o)); },
    mq_sq_check: function (o) { var sq = ansN(o); return solSqChk(sq, isqrt(sq)); }
  };
  var n = M.wrapAll(SOL);
  try { console.log('[mqs-b] descriptive solutions attached to', n, 'templates (base + all variants).'); } catch (e) {}
})();
