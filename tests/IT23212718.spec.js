const { test, expect } = require('@playwright/test');

const testData = [
  //   POSITIVE FUNCTIONAL TESTS 
  {
    id: 'Pos_Fun_0001',
    input: 'oya hoDHIn innavadha?',
    expected: 'ඔය හොඳින් ඉන්නවද?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'mama kadeeta yanavaa.',
    expected: 'මම කඩේට යනවා.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0003',
    input: 'Api sellam karamu',
    expected: 'අපි සෙල්ලම් කරමු',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'Oyaa heta Campus enevanam mata oyaagen lecture notes tika ganna puLuvandha, mokadha mata adha enna baerivunaa asaniipa vuna nisaa?',
    expected: 'ඔයා හෙට Campus එනෙවනම් මට ඔයාගෙන් lecture notes ටික ගන්න පුළුවන්ද, මොකද මට අද එන්න බැරිවුනා අසනීප වුන නිසා?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0005',
    input: 'api hoDHin paadam karoth viBhaagaya leesi veevi.',
    expected: 'අපි හොඳින් පාඩම් කරොත් විභාගය ලේසි වේවි.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'Oyaa heta gedharanam api koLaBA yamu.',
    expected: 'ඔයා හෙට ගෙදරනම් අපි කොළඹ යමු.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0007',
    input: 'mama pothak kiyevvemi.',
    expected: 'මම පොතක් කියෙව්වෙමි.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'machan iiyee Cricket Match eka baeluvadha, lQQkava hoDHA tharaGAyak dhiilaa dhinne, ekanm maara Match ekak?',
    expected: 'මචන් ඊයේ Cricket Match එක බැලුවද, ලංකව හොඳ තරඟයක් දීලා දින්නෙ, එකන්ම් මාර Match එකක්?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'mama iiyee giyaa apee iskolee balanna saeehenna kaalekata passe.',
    expected: 'මම ඊයේ ගියා අපේ ඉස්කොලේ බලන්න සෑහෙන්න කාලෙකට පස්සෙ.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'vaahana naevathviima thahanam!',
    expected: 'වාහන නැවත්වීම තහනම්!',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'gedhara giyaata passe call ekak ganna.',
    expected: 'ගෙදර ගියාට පස්සෙ call එකක් ගන්න.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'mata Rs. 1000 k dhenna puluvandha?',
    expected: 'මට Rs. 1000 ක් දෙන්න පුලුවන්ද?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'Mama aasayi chithrapatiyak balanna yanna.',
    expected: 'මම ආසයි චිත්‍රපටියක් බලන්න යන්න.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'Mama gedhara yanavaa, oyath enavadha maath ekka yanna?',
    expected: 'මම ගෙදර යනවා, ඔයත් එනවද මාත් එක්ක යන්න?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'maargaya lissana suLuyi!',
    expected: 'මාර්ගය ලිස්සන සුළුයි!',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'mama iiye gedharin eliyata yanna hadhadhdhi magee ballaa sathuten midhule sellam kara kara innava dhaekka.',
    expected: 'මම ඊයෙ ගෙදරින් එලියට යන්න හදද්දි මගේ බල්ලා සතුටෙන් මිදුලෙ සෙල්ලම් කර කර ඉන්නව දැක්ක.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'api heta udhee 9:30 yamu',
    expected: 'අපි හෙට උදේ 9:30 යමු',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'apee trip ekee photos tika mama Whatsapp group ekata dhammaa',
    expected: 'අපේ trip එකේ photos ටික මම Whatsapp group එකට දම්මා',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'peredhaa api kattiya ekathu velaa nuvara yanna giyaa. paandhara pahata vagee thamayi api gamana pitath vunee. maarga thadhabadhayak thibune naethi nisaa api saeehenna ikmanata nuvarata giyaa. Hotel ekata giyaata passe api udhee kaeema kaevaa. iita passe api dhaLadhaa maaligaava balanna giyaa. maaligaava balalaa ivara velaa api hotel eke Swimming Pool ekee godak velaa piinala sellam kalaa. hariyama lassanayi ee paeththa. api haemooma godak sathutin hitiya dhavasak eeka.',
    expected: 'පෙරෙදා අපි කට්ටිය එකතු වෙලා නුවර යන්න ගියා. පාන්දර පහට වගේ තමයි අපි ගමන පිටත් වුනේ. මාර්ග තදබදයක් තිබුනෙ නැති නිසා අපි සෑහෙන්න ඉක්මනට නුවරට ගියා. Hotel එකට ගියාට පස්සෙ අපි උදේ කෑම කැවා. ඊට පස්සෙ අපි දළදා මාලිගාව බලන්න ගියා. මාලිගාව බලලා ඉවර වෙලා අපි hotel eke Swimming Pool එකේ ගොඩක් වෙලා පීනල සෙල්ලම් කලා. හරියම ලස්සනයි ඒ පැත්ත. අපි හැමෝම ගොඩක් සතුටින් හිටිය දවසක් ඒක.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0020',
    input: 'kohedha yannee?',
    expected: 'කොහෙද යන්නේ?',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0021',
    input: 'othanin dhakuNata haravanna.',
    expected: 'ඔතනින් දකුණට හරවන්න.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0022',
    input: 'mama heta vaedata yanavaa.',
    expected: 'මම හෙට වැඩට යනවා.',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0023',
    input: 'suvapath vethvaa!',
    expected: 'සුවපත් වෙත්වා!',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0024',
    input: 'ehenam bQQ api heta hambemu.',
    expected: 'එහෙනම් බං අපි හෙට හම්බෙමු.',
    type: 'Positive'
  },

  //     NEGATIVE FUNCTIONAL TESTS 
  {
    id: 'Neg_Fun_0001',
    input: 'mama iiye Kaduwela yanna bus ekata naegala tika dhurak yadhdhi oyava dhaekka SLIIT eka LaGa hitagena innavaa, oyata iiye lectures thibbadha? naethnam nikan yaluvoth ekka aevilla kathaa baha karala iilaga project ekea vaeda patnganndha aavee?',
    expected: 'මම ඊයේ කඩුවෙල යන්න bus එකට නැගල ටික දුරක් යද්දි ඔයව දැක්ක SLIIT එක ළඟ හිටගෙන ඉන්නවා, ඔයට ඊයෙ lectures තිබ්බද? නැත්නම් නිකන් යාලුවොත් එක්ක ඇවිල්ල කතා බහ කරල ඊලග project එකේ වැඩ පට්න්ගන්න්ද ආවේ?',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'oyaakohedhainne?',
    expected: 'ඔයා කොහෙද ඉන්නේ?',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'mata wathura tikak dhenawadha?',
    expected: 'මට වතුර ටිකක් දෙනවද?',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'fmaslfmaesmfclasdmcmdslvcmddc lmjlkmlmmlm jnkjnknn',
    expected: 'invalid input',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'mama aluth nissan car ekak ganna inne.',
    expected: 'මම අලුත් nissan car එකක් ගන්න ඉන්නේ.',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'OOKA MAGEE PAENA',
    expected: 'ඕක මගේ පෑන',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0007',
    input: "heta thamaa sahan's birthday celebration eka thiyannee.",
    expected: 'හෙට තමා සහන්ගේ birthday celebration එක තියන්නේ.',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'apee exam 1st of March nedha?',
    expected: 'අපේ exam 1st of March නේද?',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'oyata movie ratings dhaenaganna oonnam imdb.com website ekata gihin balanna.',
    expected: 'ඔයට movie ratings දැනගන්න ඕන්නම් imdb.com website එකට ගිහින් බලන්න.',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'bohooma pin sidhdhavenavaa',
    expected: 'බොහෝම පිං සිද්දවෙනවා',
    type: 'Negative'
  },

  //    UI TESTS 
  {
    id: 'Pos_UI_0001', input: 'oyaa kohedha inne??',
    expected: 'ඔයා කොහෙද ඉන්නේ?',
    type: 'Positive'
  }
];

test.describe('SwiftTranslator Transliteration Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  for (const data of testData) {
    test(`${data.id}: ${data.type} Test for input "${data.input}"`, async ({ page }) => {
      const inputLocator = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      const outputLocator = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      // Use sequential typing for UI tests and fill for functional tests
      if (data.id.includes('UI')) {
        await inputLocator.pressSequentially(data.input, { delay: 50 });
      } else {
        await inputLocator.fill(data.input);
      }

      // Assertions based on expected output recorded in Excel
      if (data.type === 'Positive') {
        await expect(outputLocator).toContainText(data.expected, { timeout: 7000 });
      } else {
        // For Negative tests, verify the specific error or unconverted text 
        await expect(outputLocator).toContainText(data.expected);
      }
    });
  }
});