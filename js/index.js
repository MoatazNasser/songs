
var currentSinger = -1;

var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");
var select3 = document.getElementById("select3");
var select4 = document.getElementById("select4");
var select5 = document.getElementById("select5");
var select6 = document.getElementById("select6");
var select7 = document.getElementById("select7");
var select8 = document.getElementById("select8");
var select9 = document.getElementById("select9");
var select10 = document.getElementById("select10");

var singerData = document.getElementById("singerData");
var playBtn = document.getElementById("playBtn");
var volumeUp = document.getElementById("volumeUp");
var songText = document.getElementById("songText");

var currentIndex = 0;
var lastIndex = 0;

var singersArr = [
  {
    singerName: "Angham",
    songsTitle: [
      "عارفة قيمتى",
      "لوحة باهتة",
      "لو تشوف",
      "ونفضل نرقص",
      "أنا بعته كتير",
    ],
    songsMp3: [
      "عارفة_قيمتى",
      "لوحة_باهتة",
      "لو_تشوف",
      "ونفضل_نرقص",
      "أنا_بعته_كتير",
    ],
    songsText: [
      `
      بنخطف وقت من الدنيا ونتسابق مع الأيام
      وعمرنا كام
      عشان نقبل ثواني في عمرنا يضيعوا
      بقيت ما بجيش على نفسي عشان مخلوق
      أنا اللي بسوق
      وقبل ما حد بيبعني أنا ببيعه
      عارفة قيمتي وعارفة أنا مين
      ده الطريق اللي أنا ماشياه
      مش مهم الناس عايزين
      المهم اللي أنا عايزاه
      كل ثانية أنا ناوية أعيش
      واللي فات هنساه
      `,
      `
      عارف إحنا طول فراقنا زي إيه
      
      زي لوحة باهتة لونها مايترسمش
      
      زي سطر في صفحة متشخبط عليه
      
      مهما تقرأ فيه تلاقيه مابيتفهمش
      
      زي طفلين وقت لما بيغلطوا
      
      بتلاقيهم خافوا يومها وعيطوا
      
      زي حرفين مشبوكين واتفرطوا
      
      زي طرفين مقطوعين مابنتلضمش`,
      `لو تشوف الفرحة في عيوني وأنا امك
      فى زفـافك وانت مقبـل يـا بـْعدي
      قلبي ودّه يْفارق ضلوعي وْ يضمك
      وْبِك يباهي الدنيا و ايقول..إولدي
      
      روحي بسم الله تِحَصّنك وْ تِعِمك
      يالمحيّا السمْح وْيا القلب النِدي
      هـامتِـك يفخر بها بـشت ٍيـلمّـك
      وْ طلِّتِـك منها المهـابـة تـبـتـدي`,
      `ونفضل نرقص نرقص نرقص لما العالم يفنى ويخلص
    يلاقونا لسة بنرقص نرقص مابنشبعش ماهو مينفعش
    اصل احنا بنرقص نرقص نرقص لما العالم يفنى ويخلص
    يلاقونا لسة بنرقص نرقص مابنشبعش ماهو مينفعش`,
      `
      أنا بعته كتير ووجعته كتير
      وأنا فاكر إن لا يمكن من إيدي يطير
      وسقاني خلاص من نفس الكاس
      ولا يمكن هقدر أقول إن معندوش إحساس
      وهلوم على مين وهغلط مين
      مش هفتح بقى معاه
      طب أعاتبه بأي عين
      مش أنا اللي بديت
      هديت ما بنيت
      فكرت إن أنا ضامنة
      وأديني على بعده صحيت`,
    ],
  },
  {
    singerName: "Mohamed Hamaki",
    songsTitle: [
      "ادرينالين",
      "جمالها استثنائى",
      "لا ملامه",
      "ودينا بعيد",
      "نادانا",
    ],
    songsMp3: [
      "ادرينالين",
      "جمالها_استثنائى",
      "لا_ملامه",
      "ودينا_بعيد",
      "نادانا",
    ],
    songsText: [
      `لمست إيدي عملت contact، الكهربا مسكت في الشرايين
    زودت الأدرينالين قلبي وعيني مش قادرين
    مشت قلبي على الخط ما راحش شمال وما شافش يمين
    أنا هنجت، اتبنجت، اتمزجت، أنا معمولي كمين
    الله ع البسمة، البسمة والعود والرسمة، الرسمة
    جايه في وقتها والله ما هي جت في اللحظة الحاسمة
    الله ع الخفة، الخفة والعود واللفة، اللفة
    جايه في وقتها والله ما هي جت من بعد اللهفة
    `,
      `أنا دُخت كتير وراها، لو أشوفها أنا ببقى طاير
    زي اللي مسك في لعبة داس على كل الزراير
    ما أنا من إعجابي بيها متلخبط مش هجادل
    أنا بس فاضللي حبة وأديها عمري اللي فاضل
    جمالها استثنائي، جمالها استثنائي
    مفيش منه نهائي، دي غطت عالباقي
    `,
      `لا ملامة ع اللي حبه لا ملامة
    ده اللي ساب في القلب يجي مائة علامة
    مش طبيعي لو ظهر بتقوم قيامة
    من أول مقابلة سحر عينه ناداني
    بالطريقة شد قلبي بالطريقة
    مُت فيه سلمت من أول دقيقة
    وأعمل إيه كان لازم أضعف في الحقيقة
    دي عيون ثبتوني نص ساعة في مكاني`,
      `أنا نفسي اقولك
    كل كلام الحب في كلمة ماحدش قالها
    نفسي أوصّلّك
    فرحة قلبي اللي انت لا يمكن تتخيلها
    أنا نفسي اقولك
    كل كلام الحب في كلمة ماحدش قالها
    نفسي أوصّلّك
    فرحة قلبي اللي انت لا يمكن تتخيلها
    
    ودينا بعيد ودينا
    على دنيا سوا لوحدينا
    أنا وانت وبس حبيبي`,
      `ياه عدى الوقت معاك في ثواني
    قلتلي أمتى هشوفك تاني
    من شوقي ليك هتخيل فيك
    وهتتسبب في جناني
    قول، قول دلوقتي معاد خليني
    أحلم باللحظة اللي تجيني
    ده أملي إني أغمض عين
    وأفتحها ألاقيك تناديني
    نادانا، يالا يا قلبي نادانا، نادانا
    قوم بينا
    سيب كل اللي ورانا أمانة
    خلينا جنب عيونه اللي مشاغلانا
    `,
    ],
  },
  {
    singerName: "Amr Diab",
    songsTitle: [
      "وزيرالسعادة",
      "ناس حلوة",
      "اللى يمشى يمشى",
      "اللى بينا حياة",
      "كتر من قربك",
    ],
    songsMp3: [
      "وزير_السعادة",
      "ناس_حلوة",
      "اللى_يمشى_يمشى",
      "اللى_بينا_حياة",
      "كتر_من_قربك",
    ],
    songsText: [
      `عيشها برواقة ملهاش إعادة

    اسألني أنا وزير السعادة
    
    الحلو قوله في وشه يا حلو
    
    وأبعد بعيد لو كان مش حلو
    
    خليك مع اللي يخليك حلو
    
    دور على اللي بيسعدنا
    
    خلي المزاج معاك عالي وتمام
    
    واللي بوشين بلاش وياه الكلام
    
    والدنيا حلوة ملهاش إعادة
    
    اسألني أنا وزير السعادة
    
    طبع الحياة مفيهوش نقاوة
    
    اسمع كلامي عيشها بهدواة
    
    واللي يعاديك بلاش من العداوة
    
    هو اللي خسران متعتها`,
      `لسه في ناس حلوة

    لسه في ناس حلوة اهي
    يجوا ونلقي معاهم الجو الحلو جه
    لسه في ناس حلوة اهي
    البال بيروق وياهم والراحه دي الف باء
    
    لسه في ناس حلوة اهي
    يجوا ونلقي معاهم الجو الحلو جه
    لسه في ناس حلوة اهي
    البال بيروق وياهم والراحه دي الف باء
    لسه في ناس حلوة حلوة حلوة
    لسه في ناس حلوة حلوة حلوة
    
    وانت معايا وحوليا احساس واحد جالتله هدية
    دا انت بكل الناس يا حبيبي
    وعمري بمواعيدك متقاس`,
      `عيني علي ناس امنتها اتأذيت منها
    بعدها
    نزلوا من نظري مش هقول عزري
    دول عالم عارفه نفسها
    قلبي ولا طيبته نفعته
    واللي يوم سكنه موته
    دنيا بتعري
    ياما بتوري
    كله علي قد نيته
    اللي يمشي يمشي زي بعضه`,
      `اللي بينا لحظة حلوة عيشتها لي كلمة
    بعتها لي في وقتها ما بينا ميت مكالمة
    اتصالحنا واتخاصمنا فيها ألف مرة
    بس بردو بابتسامة تحلى ليلة مُرّة
    
    اللي بينا سندة وقفة قعدة
    صُحبة رحلة سحلة باعتة
    ضحكة راجّه القلب راجّه بعد نكته جامدة
    اللي بينا أحلى وقت وأحلى عُمر عدّى
    
    اللي بينا غنوة حلوة بتفكرني بيك
    فيديو كل ما اشوفه بضحك من قلبي عليه
    المذاكرة المعافرة الحنين لناس مسافرة
    العزومة أحلى سُفرة صورة علينا شاهدة`,
      `يا حبيبي إتمختر، إنتَ الأجمل إنتَ الأخطر
    دا إنتَ الخطوة بمليون ريختر، ودت قلبي شمال ويمين
    يا حبيبي إتمختر، إنتَ الأجمل إنتَ الأخطر
    دا إنتَ الخطوة بمليون ريختر، ودت قلبي شمال ويمين
    كتر من قربك كتر
    على قلبي يا سيدي إتشطر
    طب كتر من قربك كتر
    على قلبي يا سيدي إتشطر
    أصل أنا بقلق وأتوتر لما تسيبني دقيقتين
    أنا تحت الأمر، أنا هفضل جنبك طول العمر
    عشانك أبيع البيض والسمر
    وهلاقي أنا زيك فين
    `,
    ],
  },
  {
    singerName: "Mohamed Mounir",
    songsTitle: [
      "مش لايق عليا",
      "شبابيك",
      "عنيكى تحت القمر",
      "ايديا فى جيوبى",
      "كان فاضل",
    ],
    songsMp3: [
      "مش_لايق_عليا",
      "شبابيك",
      "عنيكى_تحت_القمر",
      "ايديا_فى_جيوبى",
      "كان_فاضل",
    ],
    songsText: [
      `مش لايق عليا إني أبكي وسط ما بغني
    ولو مطر الدموع خني تلحقني بسمة أمل
    أنا عايش في سجن جراح والعالم قصادي براح
    وبغني عن الأفراح وهغني لو إيه حصلي
    
    ...
    
    أنا رافع رايات عشقي بدور ع إللي مش ملقي
    يحارب كدبهم صدقي لو مهما يطول الأجل
    مش قادر أعيش وخلاص آلمي غير آلام الناس
    قلبي في قصة الإحساس وانا عارف إنه البطل`,
      `شبابيك، شبابيك الدنيا كلها شبابيك
    والسهر والحكاية والحواديت كلها دايرة عليك
    والكلام كان، كان عليك
    واللي كان خايف عليك
    إنتهى من بين إيديك
    دي عينيك شبابيك والدنيا كلها شبابيك
    سرقت عمري من أحزاني
    سرقته لكن ما جاني
    ولا حد شاف فين مكاني ورى الشبابيك
    دي عينيك شبابيك والدنيا كلها شبابيك
    غيرت ياما كتير، ياما كتير أحوالي
    وأنا كنت عاشق، عاشق وكان يحلا لي
    أحب بس يكون حلالي ورى الشبابيك
    `,
      `عنيكى تحت القمر
    كيف الكلام والخوف
    فيهم كلام للقدر
    مدارى مش مكشوف
    بودى أزرع شجرة
    شجرة حنان وضل
    ترخى عليكى يا سمرة
    وتلم شمل الكل
    
    الكون أصره بحاله
    واجيبوه ليكى يا غالية
    ده انتى جماله ودلاله
    يا نخلة بكرية عالية
    
    مفيش كسوف فى المحبة
    ولا للمحبة شروط
    عمرك ماتشعر بغربة
    الا فى حنين مكبوت
    وأنتى يا سامعة وشايفة
    أحلامى فوق الوصف
    من غير ما أقول انتى عارفة
    فاهمة اللى فيه بالحرف`,
      `ايديا في جيوبى وقلبي طرب
    سارح في غربة بس مش مغترب
    وحدي لكن ونسان وماشي كده
    ببتعد معرفش او بقترب
    
    ايديا في جيوبى وقلبي طرب
    سارح في غربة بس مش مغترب
    وحدي لكن ونسان وماشي كده
    ببتعد معرفش او بقترب`,
      `
    كان فاضل بس يادوب
    إني ألبس توب بالدنيا وأتوه عنك
    لكن قلبي المغلوب
    بيخاف ليدوب في ليالي الشوق بعدك
    كان فاضل بس يادوب
    إني ألبس توب بالدنيا وأتوه عنك
    لكن قلبي المغلوب
    بيخاف ليدوب في ليالي الشوق بعدك
    وما بين كده أو كده
    مش مرتاح أنا
    خليني بقى كده يمكن الهنا
    مدراي فى صبري عليك
    وما بين كده أو كده
    مش مرتاح أنا
    خليني بقى كده يمكن الهنا
    مدراي فى صبري عليك
    `,
    ],
  },
  {
    singerName: "Nancy Ajram",
    songsTitle: [
      "عيشها بعافية",
      "حياة",
      "عاتب ولوم",
      "حاجات خصوصية",
      "مية وخمسين",
    ],
    songsMp3: [
      "عيشها_بعافية",
      "حياة",
      "عاتب_ولوم",
      "حاجات_خصوصية",
      "مية_وخمسين",
    ],
    songsText: [
      `
    حاجة مش عادية
    
    خطوتي غير مش هي هي
    
    مظبوطة ظبطة على الدقات
    
    بوم بوم بوم
    
    مش تقليدية
    
    إيزي وده الحلو اللي فيا
    
    ع البيت ماشية كده وبثبات
    
    بوم بوم بوم
    
    قلبي اللي سايق ماشية وراه
    
    ما هو ده اللي رايق
    
    عايشة بعافية ومش بالعافية
    
    مزاج لايق عليا
    
    خطير خطير خطير
    
    إحساس خطير حاسة إني بطير
    
    خطير خطير خطير
    
    ده المود خطير حاسة إني بطير
    `,
      `حياة حبك بجد حياة
    معاك إحساس جميل عيشاه
    مافيش كلام يوصف حبيبي
    كل الي أنا حاساه
    لقاك غير حياتي لقاك
    بقول بصراحه أنا عشقاك
    قريب بعيد عن عيني لكن
    قلبي وروحي معاك
    سنين واليوم دا بستناه
    لقيت فيك اللي بتمناه
    بحب أسمع منك حياتي
    لمستني من جواه
    سنين واليوم دا بستناه
    لقيت فيك اللي بتمناه
    بحب أسمع منك حياتي
    لمستني من جواه
    حنين أنا جوا قلبي حنين
    كبير يملى بحور عاشقين
    وشوق في عيوني لما بشوفك
    مخبي حب سنين
    `,
      `ماهي كانت تخلص أهي
    بإبتسامة حلوة ورايقة
    ونسينا العند حبة
    وسبنا مشاعرنا سايقة
    ماهي كانت تخلص أهي
    بإبتسامة حلوة ورايقة
    ونسينا العند حبة
    وسبنا مشاعرنا سايقة
    أكيد هتسرح لو ثانية
    في ذكرى حلوة ما بينا
    أكيد هتلمح في عينيا
    نظرة حب صادقة
    أكيد هتسرح لو ثانية
    في ذكرى حلوة ما بينا (ما بينا)
    أكيد هتلمح في عينيا
    نظرة حب صادقة
    عاتب ولوم من غير فراق
    أكيد هنوصل لإتفاق
    لو مش عشانا في حدّ بينا
    ممكن يضيع من الفراق
    أنا أبان قوية لكن بخاف
    دموع عينيا مهيش خفاف
    ما تتوهمش إني أقدر أمشي
    لوحدي خطوة علشان هخاف
    `,
      `
    ما لكش دعوة بيها
    دي حاجات خصوصية
    ما لكش دعوة بيها
    دي حاجات خصوصية
    وإن ما لكش دعوة بيّ
    دي حاجات خصوصية
    دي حاجات خصوصية
    ما لكش دعوة بيها
    ما لكش دعوة بيها
    دي حاجات خصوصية
    دي حاجات خصوصية
    وإن ما لكش دعوة بيّ
    أداري وعندي حق
    أقول لك ولا لأ
    أقول لك قلبي دق
    خلي إحساسي ليّ
    أقول لك يبقى سد
    وإوعى تقول لحد
    حتلاقي حيطة سد
    أول ما هتحكي عليّ
    دي حاجات خصوصية
    `,
      `
    من بين الكل سارق لي عيني
    وما فيّ فل من حدك ما فيّ
    من بين الكل سارق لي عيني
    وما فيّ فل من حدك ما فيّ
    إنت منك ستين ولا حتى سبعين
    لا، لا إنت مية على مية ولا مية وخمسين
    إنت منك ستين ولا حتى سبعين
    لا، لا إنت مية على مية ولا مية وخمسين
    سهرانة الليل لحالي، لحالي
    ومش عم بتروح من بالي، من بالي
    سهرانة الليل لحالي، لحالي
    ومش عم بتروح من بالي، من بالي
    `,
    ],
  },
  {
    singerName: "Tamer Hosny",
    songsTitle: [
      "بعد مؤقت",
      "سوحنا",
      "زى الايام دى",
      "خدنا مناعة",
      "سجل يا تاريخ",
    ],
    songsMp3: [
      "بعد_مؤقت",
      "سوحنا",
      "زى_الايام_دى",
      "خدنا_مناعة",
      "سجل_يا_تاريخ",
    ],
    songsText: [
      `خلينا نبعد فترة
    ونشوف كدا لما نغيب
    إعتبره بُعد مؤقت
    وأهو كدا أحسن ليا وليك
    
    خلينا نبعد فترة
    ونشوف كدا لما نغيب
    يا نفوق ولبعضنا نرجع
    يا نقول محصلش نصيب
    
    وأنا لسه باقي عالحاجات
    اللي أنا جنبك عيشتها
    دا إنت رغم إن إنت قاسي
    كان فيك حاجات بحبها
    
    سيبنا نبعد فترة يمكن
    البُعد دا كدا يفيدنا
    وإن حد سألك مرَّة عني
    ما تقولش موضوعنا انتهى
    `,
      `
    يا قلبي في إيه
    مش اللي بيعمل الخير الأصول يلاقيه
    أدي اللي إحنا وقفنا معاه و علّينا فيه
    يا قلبي في إيه
    
    طلع كداب
    طلع ملهوش حبايب ولا حتى صحاب
    ده كان لازم لوحده من زمان يتساب
    
    يا قلبي في إيه
    سوحنا و جرحنا جراح قلبت موازين
    و وجعنا و سابلنا جرح يعيش لسنين
    سوحنا و جرحنا جراح قلبت موازين
    و وجعنا و سابلنا جرح يعيش لسنين
    
    يا قلبي في إيه
    يا قلبي إنساه
    و ما تتمناش رجوعه ملناش أمان وياه
    نعتبره درس في حياتنا و إتعلمناه
    يا قلبي إنساه`,
      `
    زي الأيام دي
    أنا فاكر كنا بنتقابل ونقول ونعيد
    زي الأيام دي
    كنا بنتكلم عن بكرة وكإنه العيد
    دلوقتي خلاص
    لو حتى بنتقابل صدفة بنبص بعيد
    زي الأيام دي
    أنا فاكر كنا بنتقابل ونقول ونعيد
    زي الأيام دي
    كنا بنتكلم عن بكرة وكإنه العيد
    دلوقتي خلاص
    لو حتى بنتقابل صدفة بنبص بعيد
    موتنا حاجات عاشت فينا ويا ريت ناسيّين
    بنموت وبنضحك على روحنا ونقول عايشين
    يظهر هنعيش اللي بقيلنا على حس يومين
    موتنا حاجات عاشت فينا ويا ريت ناسيّين
    بنموت وبنضحك على روحنا ونقول عايشين
    يظهر هنعيش اللي بقيلنا على حس يومين
    `,
      `نفوق شويه
    في إيه يا جماعه
   و ما نجريش
   ورا ناس بياعه
   اللي إستغنى
    بره دماغنا
   يمشي و غيره 
   ييجي في ساعه
   إيه يا جماعه 
   
   نفوق شويه
    في إيه يا جماعه
   إحنا خلاص
   كده خدنا مناعه
   فاكرينا هنموت
   من غيرهم
   و أهو طلع
   الموضوع إشاعه
   إيه يا جماعه
   
   و  يعوّض اللّه 
   يعوّض اللّه 
   يعوّض اللّه
   لو كان فيهم 
   خير كان طرح
   و يعوّض اللّه
   ده إحنا المفروض
    نعمل فرح
   و يعوّض اللّه`,
      `سجل يا تاريخ كده سجل
   ودَّعنا حياة السينجل
   سجل يا تاريخ كده سجل
   ودَّعنا حياة السينجل
   
   وأدينا فيها
   هنعيش أحلى ما فيها
   والضحكة تحليها
   يلا تعالى نعيش
   
   وأدينا فيها
   هنعيش أحلى ما فيها
   والضحكة تحليها
   يلا تعالى نعيش
   
   سجل يا تاريخ كده سجل
   ودَّعنا حياة السينجل
   
   ياللي علمتني إزاي أحب ومعنى الحب
   هحبك أكتر أنا كل يوم كل يوم
   ياللي علمتني إزاي أحب ومعنى الحب
   هعلمك أنا أنا إزاي يدوم
   
   ياللي علمتني إزاي أحب ومعنى الحب
   هحبك أكتر أنا كل يوم كل يوم
   ياللي علمتني إزاي أحب ومعنى الحب
   هعلمك أنا أنا إزاي يدوم`,
    ],
  },
  {
    singerName: "Sherine",
    songsTitle: [
      "وبحلفلك",
      "خاصمت النوم",
      "القماص",
      "كلها غيرانه",
      "بعلم الوصول",
    ],
    songsMp3: [
      "وبحلفلك",
      "خاصمت_النوم",
      "القماص",
      "كلها_غيرانه",
      "بعلم_الوصول",
    ],
    songsText: [
      `
    وبحلفلك هشيلك برا حساباتي ومسموحلك
    تودع قلبي وحياتي وهوصفلك
    حبيبي ازاي هتنساني وتعرف بعدي ناس تاني وارشحلك
    
    ماتقلقش لا يمكن ارضى يعني تعاني بعديا
    ماتستغربش اصل انا روحي رياضية اه
    
    في عشرة ما بينا فهاساعدك
    غصب عني اقف جنبك طباع فيا
    
    ماتستناش حبيبي حاجات ترجعنا
    عشان مافيهاش يادوب هنداوي في وجعنا
    
    هنعمل ايه ومن غير ليه
    حاولنا وربنا لي حكمه موفقناش`,
      `
    بعدك مارتحتش يوم
    
    ونسيت وخاصمت النوم
    
    انا لسه مكاني ولا اتحركت بفكر فيك
    
    هكدب لو قولت بخير
    
    بصراحه انا وجعي كبير
    
    متقولش ان انتا نستني وعادي وهنت عليك
    
    يرضيك يعني اعيش مافيش ولا اي حاجه نفعاني عشان انساك
    
    منا اصلا روحي معاك
    
    انساك ازاي وبأيه
    
    ريح قلبي قول حلول خلينا نرجع تاني بلاش وداع
    
    وكفايه وقت ضاع
    
    ما البعد بنتعب فيه
    
    فاكر ايامنا زمان
    
    قعدتنا في كل مكان
    
    وكلام ووعود اننا عمرنا ما نفارق بعض
    
    طب ليه يا حبيبي مشيت
    
    لا رجعتلي ولا حنيت
    
    وسايبني لوحدي بكلم نفسي في عز البرد`,
      `سيبنا القماص اللي بيزعل ويشهد ناس.. قال بسم النبي حارسه وصاينه

    عامل حساس رافع مناخيره لفوق والباقي يولع بالجاز.. ولا عنده عزيز ولا غالي ولا بيعز عزاز
    
    اه سيبنا القماص اللي بيزعل ويشهد ناس.. قال بسم النبي حارسه وصاينه
    
    أصله الحيلة الدلوعة عايز كلمته مسموعة.. وسايقها ألاطة وشغل جنان
    
    نافخ نفسه على ما فيش على راسه مثبت ريش.. وهيجي ده بالتطنيش رهوااان
    
    الكل يجيله انما هو ما يروحش لحد.. يتشال على الراس واتهدي ما عليكي قدي يا ارض
    
    ميقدمش السبت وعايز ياخد الحد..ماشيين بعلاج لأ مش ناقصه والله بجد`,
      `
    كلها غيرانة بتحقد والنفسية سواد
    
    لو أعدي في حتة أنا مش بسلم من الكومنتات
    
    طب أعمل ايه منا ست جميلة ودي كاريزمات
    
    أنا بدخل اي مكان بقلبه ده بفضل الله
    
    واللي يشوفني على طول بعجبه من غير معاناة
    
    في حاجات كده خلقة ربنا مش مجهود عاملاه
    
    خلوا اللي يغير مننا يجي ويعمل زينا
    
    من غير ما يغل يقل ويضربنا في ضهرنا
    
    خلوه يجي في وشنا لو عنده حاجة يقولنا
    
    وبلاش بقي شغل قالولنا كفاية كلام عننا
    
    خلوا اللي يغير مننا يجي ويعمل زينا
    
    من غير ما يغل يقل ويضربنا في ضهرنا`,
      `
    بعلم الوصول قولنا وكتبنا عهدنا
    هنعيش كلنا في ضل سقف واحد
    بعلم الوصول مصر في وقت الشدة قادرة
    تحضن ولادها وتعيد المشاهد
    بعلم الاصول احنا في خدمة اهلنا ولاد الاصول
    كلنا في الصورة واحد كل واحد له بطولة
    من الصف الاخير للصفوف الاولي
    اللي يبني واللي يزرع اللي يداوي واللي يصنع
    اللي يعلم واللي يبدع الصورة كاملة من غير مجاملة
    واحنا قد القول
    بعلم الاصول احنا في خدمة اهلنا ولاد الاصول`,
    ],
  },
  {
    singerName: "Bahaa Sultan",
    songsTitle: [
      "دلوقتى عجبناكوا",
      "سماح سماح",
      "أنا غلطان",
      "تعالى ادلعك",
      "دا حب ولا",
    ],
    songsMp3: [
      "دلوقتى_عجبناكوا",
      "سماح_سماح",
      "أنا_غلطان",
      "تعالى_ادلعك",
      "دا_حب_ولا",
    ],
    songsText: [
      `دلوقتي عجبناكوا
    ما كنا حلوين ومعاكوا
    فجأة الشوق آهو جابكوا
    طب إيه كان مشاكوا
    أيوة إحنا إحلوينا
    لأ وكمان بقينا
    صعب يخش علينا
    كلمة ودمعتين
    كنا زمان حاجة تانية
    غلب وطيبة الدنيا
    كنتوا ساعتها فين
    دلوقتي بقينا فلة
    ده إنتوا كسرتوا ورانا قلة
    ومشينا وسايبينها على الله
    كدة فجأة وجعناكوا
    عارفين أيوة قسينا
    نشفنا ورانا رمينا
    دنيا بنت لذينة
    يوم سلف يوم دين
    والله مش ندية
    ولا عند ولا أذية
    أصل المواضيع ديا
    خلصت من سنتين
    `,
      `سماح، سماح يا أهل السماح
    من الجراح هناخد إيه
    كُتر البُكى على اللي راح
    خلاص يا عيني هيفيد بإيه
    سماح، سماح يا أهل السماح
    من الجراح هناخد إيه
    كُتر البُكى على اللي راح
    خلاص يا عيني هيفيد بإيه
    يبيعوا، ما يبيعوا يعني هيحصللي إيه
    حبيبك اللي باعك، ليه تبكي في يوم عليه
    يبيعوا، ما يبيعوا يعني هيحصللي إيه
    حبيبك اللي باعك، ليه تبكي في يوم عليه
    `,
      `
    وأنا غلطان عشان حبيت وبينت اهتمامي بيك
    
    عشان كدة يعني بقيت ما أنفعشِ
    
    ومن نظرك نزلت مابقيتش لايق ليك
    
    وكان مفروض ما أحبكشِ
    
    ولو حبيت ما أبينشِ
    
    ودلوقتي خلاص همشي أنا وقلبي اللي دايب فيك
    
    وليه طيب عشان طيب
    
    عشان يعني اللي في قلبي على لساني
    
    بتكسرني وتخسرني
    
    بتخسر حب مش سهل تلاقيه تاني`,
      `
    طالعة في دماغي نروق شوية
    
    أعدي عليك وتنزلي
    
    ده انت فوق دماغي وحقك عليا
    
    طوّل خصامنا زلزلني
    
    طالعة في دماغي نروق شوية
    
    أعدي عليك وتنزلي
    
    ده انت فوق دماغي وحقك عليا
    
    طوّل خصامنا زلزلني
    
    تعالى أدلعك قوللي ايه هيمنعك
    
    جمبك مش هتعبك والمكان هيعجبك
    
    تعالى بحلفك قوللي مين مقريفك
    
    لو كنت انت في مكاني عمري ما كنت هكسفك
    
    تعالى أدلعك قوللي ايه هيمنعك
    
    جمبك مش هتعبك والمكان هيعجبك
    
    تعالى بحلفك قوللي مين مقريفك
    
    لو كنت انت في مكاني عمري ما كنت هكسفك`,
      `ده حب ولا تقل ولا دلع ده ولا إيه
    يا حبيبي أؤمر تحت أمرك قوللي أعملك إيه
    على عيني زعلك
    ده أنا جاي أصالحك
    أنا جاي أقولك على قلبي وع اللي فيه
    ومعاك الوقت هوا بيعدي هوا
    ويا دوب مالحقتش أقول
    بهواك يا حبيبي أنا ويا عمري أنا
    على فكرة أنا بيك مشغول
    أنا إيه يبعدني عنك
    اللي يبعدني إيه
    أنا إيه ياخدني منك
    يا حبيبي يا كل عمري
    أنا ليك سلمت قلبي
    أرجوك حافظ عليه`,
    ],
  },
  {
    singerName: "Carmen Suleiman",
    songsTitle: [
      "لينا رقصة",
      "الدنيا دايرة عليك",
      "لعبتى",
      "تعبت أشكى",
      "الذكرى الشتوية",
    ],
    songsMp3: [
      "لينا_رقصة",
      "الدنيا_دايرة_عليك",
      "لعبتى",
      "تعبت_أشكى",
      "الذكرى_الشتوية",
    ],
    songsText: [
      `
    يا نقاوة عينيا .. ياروح قلبي .. يا أغلى الناس
    معقولة حلاوتك دي .. بدوب في إيديك .. من الإحساس
    يا نقاوة عينيا .. ياروح قلبي .. يا أغلى الناس
    معقولة حلاوتك دي .. بدوب في إيديك .. من الإحساس
    
    لا بنام يا حبيبي ولا بهدى .. ولا بقدر أعيش ليلة واحدة
    من غير ما أشوفك فيها
    هو انت هتيجي كام مرة .. في العمر يا روحي غير مرة
    وانا عايزة أتمتع بيها
    
    ولينا رقصة .. لينا رقصة .. أنا وانت مفيش حاجه ناقصة
    مزيكا وفرحة كبيرة .. خلصانة يا حبيبي كدة خالصة
    ولينا رقصة .. لينا رقصة .. أنا وانت مفيش حاجه ناقصة
    مزيكا وفرحة كبيرة .. خلصانة يا حبيبي كدة خالصة .. ولينا رقصة`,
      `
     الدنيا دايرة عليك تختار ما بين طريقين
     يا الشر ياخدك يا تكون من الناس الطيبين
     
     لا مال يغرك و لا جاه مهو كل دول زايلين
     ولا يبقى غير طيب عملك وولادك الصالحين
     
     الدنيا دايرة عليك تختار ما بين طريقين
     يا الشر ياخدك يا تكون من الناس الطيبين
     
     لا مال يغرك و لا جاه مهو كل دول زايلين
     ولا يبقى غير طيب عملك وولادك الصالحين
     
     كيدوا الشر ليه بتزيدوا والغالى ليه عندكوا بيهون
     كيدوا غير ربك اللى يريدوا هو بس اللى اكيد هيكون
     
     هو اللى يقدر وبيعفى وبيدى للى فيوم يزفى
     دايما واقف جنب احبابه لو تبعد انت اللى بتخسر`,
      `عمرك ماشفت واحدة
     بتحب واحدة واحدة ؟
     إياك فاكرني سهلة
     في صبر ولا.. محتاج مساعدة؟
     أنا يا سيدي فايقة
     متدلعة ورايقة
     اثبت كده وطاوعني
     لو هي يعني..مافيهاش مضايقة
     لعبتی وحتتي
     وليا انا خطتي
     بس تمشي على اللي انا هقول عليه
     في الدلع والهنا
     سيبني أقول مين أنا
     واكتشفنی وشوفني شاطرة قد ايه
     هدوقك سعادة
     حاجة فريش بزيادة
     كل اللي عيشته حاجة
     واللى انت هتعيشه..جنبي حاجة
     هتبتدي بقساوة
     وتنتهي بغلاوة
     هي الحياة دي عايزة
     ولا ليها لذة .. غیر بالشقاوة ؟`,
      `تعبت اشكي لك اوجاعي
     وهمومي ونار حرماني
     أنا اعاني في حبي معك
     ومعاكم ضاعت ايامي
     
     تعبت ولا بقا بي حيل
     دخيل الله كفايه ويل
     حضنت دموعي والامي
     أنا ماابي أقضي الليل
     
     أشيل هموم هالدنيا
     واسامر في الهوا دمعة
     
     
     ويعاندني العمر لحظة
     
     ترى ضاق الصبر مني
     وانت مبتعد عني
     كفايه من الجروح جروح
     هواك اشقاني وضني`,
      `ف ميعاد الجرح السنوي و الذكرى الشتوية
     بخرج من تأثير قصتنا و علاقتنا الوهمية
     و خناقاتنا الكتير و تليفونات بليل و وداعنا الأخير و الصدمة القوية
     
     ف ميعاد الجرح السنوي و الذكرى الشتوية
     بخرج من تأثير قصتنا و علاقتنا الوهمية
     و خناقاتنا الكتير و تليفونات بليل و وداعنا الأخير و الصدمة القوية
     
     لو بشرب حاجة في أي مكان شفايفي بتشكي للفنجان
     عشان بيحس أكتر منك بيا
     و أمسح دموعي و أقولي بلاش و اداري عيني بالمكياچ ولا يمسح دمعي غيرك يا إيديا`,
    ],
  },
  {
    singerName: "Tamer Ashour",
    songsTitle: ["تملى", "احنا الدنيا", "اقعد نتكلم", "كنت فين", "كان موضوع"],
    songsMp3: ["تملى", "احنا_الدنيا", "اقعد_نتكلم", "كنت_فين", "كان_موضوع"],
    songsText: [
      `تملي جرحي يجي ماللي كانوا
    اعز ناس وعمرهم ما هانو ا
    ف وقت شدتي ياقلبي بانو ا
    
    عملنا معجزات عشان رضاهم عملنا ١٠٠ مفاجأه من وراهم
    وخدنا ايه مانبنا غير أذاهم
    .احنا هنرتاح لو راحوا
    سيبهم يمكن يرتاحوا
    
    مين فينا فضل في جراحه
    دول ناس لازم ننساهم
    خلصت ايامنا معاهم
    
    نكسب لو ودعناهم ..نكسب لو ودعناهم
    عرفنا مين معانا ومين علينا
    حياتنا اولى للي يشترينا
    
    حرام نعيش لناس بيبيعوا فينا خلاص مفيش امل مفيش غلاوه
    هو احنا شوفنا منهم غير قساوه مين حول المحبه للعداوه`,
      `أول مابعدنا تعبنا رجعنا وماقدرناش
    ملناش غير بعض وروحنا فبعض مانستغناش
    في حد يفرط ف هدية
    بزعل وشويه عصبية
    في عالم ينفع من غيرنا
    في ورد يعيش من غير مية..
    
    احنا الدنيا الحلوة بناسها
    أحنا حياة والحب أساسها
    مهما بعدنا ومهما قدرنا
    صعب نعيش من غير إحساسها
    بيردنا من تاني قَدرنا
    علشان حالف مايخلصها
    
    أول مابنمشي نلاقي الفرحة خدتنا غياب
    والناس بيقولو ازاي الحب ده كله إتساب`,
      `
    ١٠٠ مره أنا قولت بلاش تسمع لكلام الناس
    
    واللي بيتقالك عني تعالى اسألني عليه
    
    يا حبيبي انا وانت كبرنا على المواضيع دي خلاص
    
    عايز تتعبني وتتعب نفسك دايماً ليه
    
    ١٠٠ مره أنا قولت بلاش تسمع لكلام الناس
    
    واللي بيتقالك عني تعالى اسألني عليه
    
    يا حبيبي انا وانت كبرنا على المواضيع دي خلاص
    
    عايز تتعبني وتتعب نفسك دايماً ليه
    
    اقعد طيب نتكلم
    
    اقعد طيب نتفاهم
    
    معقول انا هبعد عنك
    
    اقعد شكلك مش فاهم`,
      `
    كنت فين وحياتي فاضية وحزني دايم
    كنت فين وبوجعي بسهر وانت نايم
    اللي مر عليك ثواني فات عليا كتير أذاني
    وانت بعد ده كله عادي راجعلي تاني
    
    إسأل الناس اللي شافت دمع عيني
    إسأل الناس اللي كانت بتواسيني
    ده اللي كان بيشوف دموعي عليك بيدعي
    كنت فين وانا نفسي أموت من كُتر وجعي
    يا الله روح مش هتلاقيني`,
      `
    كان موضوع بس نهيته
    جرح قديم خفيت ونسيته
    درس اتعلمته وصميته كتير لسنين
    كان في دموع وقت فراقه
    وقلبي خلاص لملم أوراقه
    كام موجوع بالأيام فاقوا
    وهم عايشين
    
    وهو بقى ماضي كله اتنسى
    عادي ده طبيعي بعد الأذى
    وانا لا هجازف تاني أو أطمن للناس
    ياما في حكاوي من دي اتنسوا
    ومش أنا غيري ناس اتأذوا
    وياما غيري هانوا وعانوا
    ونسيوا ده كله خلاص`,
    ],
  },
];
select1.onclick = function () {
  currentSinger = 0;
  changeSinger(currentSinger);
};
select2.onclick = function () {
  currentSinger = 1;
  changeSinger(currentSinger);
};
select3.onclick = function () {
  currentSinger = 2;
  changeSinger(currentSinger);
};
select4.onclick = function () {
  currentSinger = 3;
  changeSinger(currentSinger);
};
select5.onclick = function () {
  currentSinger = 4;
  changeSinger(currentSinger);
};
select6.onclick = function () {
  currentSinger = 5;
  changeSinger(currentSinger);
};
select7.onclick = function () {
  currentSinger = 6;
  changeSinger(currentSinger);
};
select8.onclick = function () {
  currentSinger = 7;
  changeSinger(currentSinger);
};
select9.onclick = function () {
  currentSinger = 8;
  changeSinger(currentSinger);
};
select10.onclick = function () {
  currentSinger = 9;
  changeSinger(currentSinger);
};

function changeSinger(currentSinger) {
  singerData.innerHTML = `
  <div  class=" col-4  d-flex justify-content-end align-items-center">
                        <img class="w-logo2 logo2 animate__animated animate__wobble" src="images/icon1.png ">
                    </div>
                    <div
                        class="col-4  
                    d-flex align-items-center justify-content-center flex-column animate__animated animate__fadeInDownBig">
                        <div  class=" bg-danger overflow-hidden rounded-circle  singerAvatar">
                            <img class="w-100" src="images/a${
                              currentSinger + 1
                            }.jpg">
                        </div>
                        <p  class="fs-e text-info m-0 opacity-e text-center fw-bold">${
                          singersArr[currentSinger].singerName
                        }</p>
                    </div>
                    <div  class="logo2 col-4 d-flex justify-content-start align-items-center">
                        <img class="w-logo2 logo2 animate__animated animate__wobble " src="images/icon1.png " alt="">
                    </div>
  `;
}

playBtn.onclick = function () {
  if (currentSinger != -1) {
    lastIndex = changeIndex();
    songText.innerHTML = `
  <h3
      class="fs-e2  text-info text-decoration-underline opacity-e text-center fw-bold animate__animated animate__lightSpeedInRight">
      ${singersArr[currentSinger].songsTitle[currentIndex]}</h3>
  <p
      class="fs-e2 text-info  opacity-e text-center fw-bold animate__animated animate__lightSpeedInRight">
      ${singersArr[currentSinger].songsText[currentIndex]}</p>
  <audio class="audioStyle" src="audios/${singersArr[currentSinger].songsMp3[currentIndex]}.mp3" type="audio/mp3" controls autoplay loop
      a></audio>
      `;

    volumeUp.innerHTML = `
      <p class="fs-5 m-0 mx-2 text-white opacity-50 animate__animated animate__fadeInUpBig">Volume Up </p>
      <i class="fa-solid fa-volume-high mt-2  fa-xl text-white opacity-50 animate__animated animate__fadeInUpBig"></i>
      `;
  }
};

// to be sure every click will show new diff quote
function changeIndex() {
  currentIndex = Math.floor(Math.random() * 5);
  console.log(currentIndex);
  while (currentIndex == lastIndex) {
    currentIndex = Math.floor(Math.random() * 5);
    // console.log("round");
  }
  return currentIndex;
}
