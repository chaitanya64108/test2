/* my-questions-solutions3/mqs3-helpers.js
   Part 3 (Surd / Algebra / Number-theory banks) ke descriptive per-template solvers ka shared helper.
   NAYA file; kisi existing file ko modify nahi karta.
   window.MQS2 (my-questions-solutions2/mqs2-helpers.js) ko reuse karta hai -- same API (TRI, K, RT, ...).
   Load order (sqrt.html):
     <script src="my-questions-part3.js"></script>
     <script src="my-questions-solutions1/mqs-helpers.js"></script>
     <script src="my-questions-solutions2/mqs2-helpers.js"></script>
     <script src="my-questions-solutions3/mqs3-helpers.js"></script>
     <script src="my-questions-solutions3/mqs3-a.js"></script> (aur baaki mqs3-*.js)
*/
(function () {
  'use strict';
  if (!window.MQS2) { try { console.warn('[mqs3] window.MQS2 missing. Load mqs2-helpers.js first.'); } catch (e) {} return; }
  window.MQS3 = window.MQS2;
  try { console.log('[mqs3-helpers] ready'); } catch (e) {}
})();
