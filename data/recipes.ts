
import type { Recipe } from '../types';

const csvData = `Name,Video Link,Summary,Tags
Crispy Aloo Pyaz Bhajiya: India's #1 Monsoon Snack!,https://www.youtube.com/watch?v=XnBZeV5h1Yw,"Crispy monsoon snack with onions, potatoes, besan, and aromatic spices. Perfect for rainy days with tea.",Happy 😊
Makhana Kheer 😋 Perfect for Prasad & Sweets for Festivals,https://www.youtube.com/watch?v=Eumlzy2KU0Q,"Rich creamy kheer of fox nuts, milk, nuts, cardamom & saffron. Perfect for festivals and pujas.","Festive 🎉, Healthy 🥗"
Trending Veg Momos Recipe | Try at home in simple steps 😊,https://www.youtube.com/watch?v=30JqjckcKK0,"Easy vegetarian momos with paneer, vegetables, and spices. Steamed to perfection.",Happy 😊
Paneer Changezi gravy recipe for lunch and dinner,https://www.youtube.com/watch?v=212D2zwVxws,Rich and flavorful paneer curry with spices and cream. Perfect with naan or rice.,Happy 😊
कलाकंद रेसिपी I Kalakand Recipe is my all time favourite ❤️,https://www.youtube.com/watch?v=Qg03NGtPHCs,"Authentic creamy kalakand with milk, paneer, milk powder, cardamom. Melt-in-mouth sweet.","Festive 🎉, Sweet 🍬"
Special Chocolate Healthy Sweets 🥥✨ | No added Sugar,https://www.youtube.com/watch?v=zHjIsoHOG38,"Guilt-free healthy sweets with dry fruits, dates, and chocolate. No refined sugar.","Healthy 🥗, Sweet 🍬"
Mawa Gulab Jamun Recipe in simple steps | Festival Special,https://www.youtube.com/watch?v=BCcmlYHmdgw,Traditional gulab jamun with mawa in cardamom-saffron syrup. Simple steps for perfect results.,"Festive 🎉, Sweet 🍬"
Perfect Sabudana Khichdi in 10 Minutes 😋 | Non-Sticky Secret,https://www.youtube.com/watch?v=pktPC9G_8t8,Quick non-sticky sabudana khichdi with tips. Perfect for fasting or breakfast.,"Festive 🎉, Healthy 🥗"
Crispy Chana Koliwada Recipe 🌧️ | Mumbai's Viral Monsoon Snack,https://www.youtube.com/watch?v=w34U2fmcnMw,"Mumbai's snack with deep-fried chickpeas, spices. Street food vibes and monsoon favorite.","Adventure ⭐, Surprise 🎲"
How to make Paneer Butter Masala | Quick and Easy Recipe,https://www.youtube.com/watch?v=_eTFZV9pURw,"Creamy paneer curry with tomato-cashew gravy, butter, and aromatic spices.",Happy 😊
Restaurant Style Crispy Corn easy recipe,https://www.youtube.com/watch?v=7I47iVsmRDY,"Crispy sweet corn with bell peppers, spices & peri peri seasoning. Appetizer at home.","Adventure ⭐, Happy 😊"
How to make Momos Chutney Recipe | Quick recipe,https://www.youtube.com/watch?v=FQj9nb9kj7E,"Spicy tangy chutney with tomatoes, onions, red chilies and soy sauce. Perfect for momos.",Adventure ⭐
How to make Momos recipe | ekdam Unique style me,https://www.youtube.com/watch?v=idhdbtS9TYc,Unique style vegetarian momos with paneer and veggies. Creative & delicious.,"Adventure ⭐, Surprise 🎲"
Easy Aloo Sukha Sabji Recipe - Authentic Indian Potato recipe,https://www.youtube.com/watch?v=oXGo9356mDA,Bengali-style dry potato curry with panch phoron and masala powder. Ready in 20 min.,"Happy 😊, Lazy 😴"
Healthy Breakfast- Oats Chilla Recipe,https://www.youtube.com/watch?v=N1SVexmia8s,"Nutritious breakfast pancake with oats, veggies, and besan. High-fiber & protein-rich.",Healthy 🥗
Vada Pav recipe | Maharashtra's all time fav food,https://www.youtube.com/watch?v=LYAod-xlrGU,Iconic Mumbai street food: potato vada in pav bread. Beloved monsoon snack.,Happy 😊
Crispy Aloo Patties Recipe | Easy Vegetarian Indian Snack,https://www.youtube.com/watch?v=5-ioKG4f5EU,"Spiced mashed potato patties in flaky dough, fried golden. Tangy, perfect with chai.",Happy 😊
How to make White Sauce Pasta | creamy & delicious,https://www.youtube.com/watch?v=882OAH2R5Vo,"Creamy white sauce pasta with veggies & cheese. Rich, comforting Italian-style dish.",Happy 😊
How to make instant Rabdi Gulab Jamun,https://www.youtube.com/watch?v=S7Mvk-mplwQ,Quick fusion dessert with rabdi and gulab jamun. For festive occasions.,"Festive 🎉, Sweet 🍬"
How to make Crispy Baingan Fry recipe,https://www.youtube.com/watch?v=c1lFVrdPX6E,Crispy fried brinjal slices with besan and spice mix. Perfect with roti.,Happy 😊
How to make Potato 65 Recipe| crispy and tasty recipe,https://www.youtube.com/watch?v=XN9Q6d66ocI,South Indian crispy potato bites with spiced gravy. Crunchy appetizer with yogurt sauce.,"Happy 😊, Lazy 😴, Surprise 🎲"
How to make Masala Pav Sandwich | 10min me ban jane wali recipe,https://www.youtube.com/watch?v=kFYl0M72auo,Spicy pav sandwich with red chili-garlic paste and veggies. Snack in 10 minutes.,"Happy 😊, Lazy 😴"
How to make Corn Paratha recipe | Quick and easy,https://www.youtube.com/watch?v=m3FkmTfPxO8,Wheat paratha stuffed with corn & cheese. Flavorful and nutritious flatbread.,Happy 😊
How to make Paneer Ghee Roast,https://www.youtube.com/watch?v=Vtxv94vZXXM,"Mangalorean style paneer ghee roast with spices, tangy tamarind notes.",Happy 😊
How to make Whole Wheat Biscuits | Healthy and Digestive,https://www.youtube.com/watch?v=rzXxeqtG2V0,"Homemade biscuits with multigrain atta and ghee. Crisp, nutritious & gut-friendly.","Festive 🎉, Happy 😊, Healthy 🥗"
How to make White Sauce Pasta | creamy & delicious,https://www.youtube.com/shorts/882OAH2R5Vo,"Creamy white sauce pasta recipe with bell peppers, corn, cheese sauce made from butter, flour, milk and herbs.",Happy 😊
How to make instant Rabdi Gulab Jamun,https://www.youtube.com/shorts/S7Mvk-mplwQ,Quick recipe for instant rabdi gulab jamun dessert - festival special sweet treat.,"Festive 🎉, Sweet 🍬"
How to make Crispy Baingan Fry recipe,https://www.youtube.com/shorts/c1lFVrdPX6E,"Crispy brinjal fry made with besan coating, spices, and semolina - perfectly seasoned and fried.",Happy 😊
How to make Potato 65 Recipe| crispy and tasty recipe,https://www.youtube.com/shorts/XN9Q6d66ocI,"South Indian style potato 65 - grated potatoes with spices, curry leaves, and tangy gravy coating.","Adventure ⭐, Happy 😊"
How to make Masala Pav Sandwich | 10min me ban jane wali recipe,https://www.youtube.com/shorts/kFYl0M72auo,"Quick masala pav sandwich with spicy red chili-garlic paste, vegetables, and chaat masala flavoring.","Happy 😊, Lazy 😴"
How to make Corn Paratha recipe | Quick and easy,https://www.youtube.com/shorts/m3FkmTfPxO8,"Corn stuffed paratha with garlic, spices, cheese and fresh herbs - nutritious and delicious flatbread.",Happy 😊
How to make Paneer Ghee Roast,https://www.youtube.com/shorts/Vtxv94vZXXM,"Karnataka-style paneer ghee roast with roasted spices, red chilies, and aromatic whole spices.",Happy 😊
How to make Whole Wheat Biscuits | Healthy and Digestive,https://www.youtube.com/shorts/rzXxeqtG2V0,"Healthy digestive biscuits made with whole wheat flour, organic ingredients, and traditional flavors.","Healthy 🥗, Sweet 🍬"
How to make Pyaaz ki Kachori,https://www.youtube.com/shorts/CFxl-y48vgw,"Traditional onion kachori with spiced onion-potato filling, crispy fried pastry shell.",Happy 😊
How to make Leftover Rice Cheese Ball | crispy & tasty,https://www.youtube.com/shorts/VtvjyAFW2xM,"Creative recipe using leftover rice with vegetables, cheese filling, breadcrumb coating, deep fried.","Adventure ⭐, Surprise 🎲"
Spicy Maggi Bhel in 10 mins,https://www.youtube.com/shorts/SduQacnzcDo,"Street-style fusion snack mixing crushed Maggi noodles with vegetables, chutneys, and bhel ingredients.","Adventure ⭐, Surprise 🎲"
New Sheer Khurma Recipe | #eidspecial,https://www.youtube.com/shorts/xGA5muTv2lY,"Traditional Eid dessert with vermicelli, milk, dry fruits, dates - rich and creamy sweet preparation.","Festive 🎉, Sweet 🍬"
Mango Coconut Laddu Recipe 🥭🥥 Quick No-Bake Dessert!,https://www.youtube.com/shorts/CcYqCPKgvbk,"No-bake dessert balls made with fresh mango puree, desiccated coconut, condensed milk, cardamom.",Sweet 🍬
How to make Chilli Paneer Recipe | Quick and Easy,https://www.youtube.com/shorts/F8jm3u8C6cA,"Indo-Chinese chilli paneer with crispy paneer cubes, bell peppers, onions in spicy sauce.","Adventure ⭐, Happy 😊"
Try karein Creamy Red Sauce Pasta,https://www.youtube.com/shorts/fLnp_M3YcLI,"Fusion pasta dish with tomato-chili puree base, creamy texture, spicy and cheesy flavors.","Happy 😊, Surprise 🎲"
Try Kids Special Peri Peri Pop Ring #recipe,https://www.youtube.com/shorts/r0-u2JquchI,"Kid-friendly snack made with semolina dough, shaped into rings, seasoned with peri peri masala.","Adventure ⭐, Surprise 🎲"
5 min me banaye Instant Mango Chutney #recipe,https://www.youtube.com/shorts/PqMHsdnMGck,"Quick raw mango chutney with tomatoes, spices, garlic - tangy and flavorful condiment.",Adventure ⭐
How to make Aloo Thepla Taco recipe | quick and easy,https://www.youtube.com/shorts/IhHxOoWG8DE,Gujarati fusion recipe using thepla bread as taco shell with spiced potato filling.,"Adventure ⭐, Surprise 🎲"
How to make Veg Railway Style Cutlet #recipe,https://www.youtube.com/shorts/Oid9erh-lns,Traditional railway-style vegetable cutlet - crispy exterior with mixed vegetable filling.,Happy 😊
Mango Shrikhand – Easy Indian Summer Dessert Recipe,https://www.youtube.com/shorts/Ticx9tZUIhM,"Summer dessert made with hung curd, fresh mango, cardamom, saffron, and garnished with nuts.",Sweet 🍬
How to make Creamy Mango smoothie | mango delight,https://www.youtube.com/shorts/zDG15jlDlVM,"Refreshing mango smoothie with milk, cardamom, ice cubes - perfect summer drink with fruit garnish.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Summer Special Watermelon🍉 Juice,https://www.youtube.com/shorts/0ULFtn4mju0,"Cooling watermelon juice with mint leaves, chaat masala, lemon juice - hydrating summer beverage.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Today's #treat Ghughra Sandwich | #ahemdabad,https://www.youtube.com/shorts/B42_jsoHxo4,"Ahmedabad street sandwich with green chutney, vegetables, special masala filling.","Happy 😊, Surprise 🎲"
How to make #trending kathal Masala recipe | Jackfruit Curry,https://www.youtube.com/shorts/UJqw1ugicmM,"Traditional jackfruit curry with potatoes, aromatic spice paste, and authentic Indian flavors.",Happy 😊
How to make Veg Fortune Rice | tasty and easy recipe,https://www.youtube.com/shorts/DzPVsHwn6W8,"Chinese-style fried rice with mixed vegetables, paneer, star anise, and savory sauces.",Happy 😊
How to make Nawabi Sevai recipe | Eid special recipe quick and easy recipe #trending #shorts #food,https://youtube.com/shorts/0JMC3ku3t5E,"Rich vermicelli dessert with milk, dry fruits & cardamom. Perfect for festivals and special occasions.","Festive 🎉, Sweet 🍬"
How to make Chole Paneer recipe in simple steps | #trending #recipe #food #cooking #paneer #chole,https://youtube.com/shorts/olyX21OPt0M,"Spicy chickpea curry with fried paneer cubes. Kabuli chana, whole spices, tomato puree & ginger-garlic paste.",Happy 😊
Instant Veg Schezwan Noodles 🍝 for late night craving #noodles #recipe #trending #food #easyrecipe,https://youtube.com/shorts/4jn0zD46iXU,"Quick spicy Indo-Chinese noodles with vegetables. Schezwan sauce, soy sauce, vinegar and veggies fixed quick.","Adventure ⭐, Lazy 😴"
Best homemade digestive drink | Homemade Buttermilk 😋| Chaas recipe #trending #shorts #foodie #food,https://youtube.com/shorts/o4Wq-Huh_Dw,"Refreshing spiced buttermilk with mint & coriander. Cooling summer drink with curd, roasted cumin and chaat masala.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
High Protein Peanut Chaat in 5 Min! #trending #shorts #foodie #food #cooking,https://youtube.com/shorts/6q7vF_W4L4g,"Healthy protein-packed snack with roasted peanuts, paneer, veggies. 20g protein boost.","Healthy 🥗, Lazy 😴"
Holi me banaye special drink | milk custard | Quick and easy recipe #trending #shorts #cooking#food,https://youtube.com/shorts/olm1ur9x-xs,"Festive milk custard dry mix with custard powder, dry fruits. Store & use with milk for instant dessert.","Adventure ⭐, Festive 🎉, Happy 😊, Surprise 🎲, Sweet 🍬"
Mathe wale Dahi Bhalle | UP / Bihar Style | holi special |#trending #shorts #cooking #easyrecipe,https://youtube.com/shorts/vSmsem40Kco,"Traditional UP-style lentil fritters in spiced yogurt. Urad dal vadas in tangy mattha with cumin, mint.","Festive 🎉, Happy 😊"
Sirf Aata aur Dudh se banaye tasty Malpua | Holi Special #trending #shorts #easyrecipe #cooking,https://youtube.com/shorts/lLY5J9Lfaf4,Simple flour & milk sweet pancakes with cardamom. Batter fried & soaked in aromatic sugar syrup.,"Festive 🎉, Sweet 🍬"
Immunity Booster Salad | perfect for summer season | Quick and easy #trending #shorts #quickrecipe,https://youtube.com/shorts/Tk-dcHYNql0,"Nutritious raw salad with carrots, beetroot, pomegranate, walnuts and chaat masala for immunity.",Healthy 🥗
Gobhi Manchurian | Cauliflower Manchurian | Quick and Easy Recipe #trending #shorts #easyrecipe,https://youtube.com/shorts/3oHw3jPMkTY,"Crispy cauliflower Manchurian. Batter-fried florets in garlic, ginger, soy sauce & chili.",Adventure ⭐
Healthy bhi Tasty bhi | Kala Chana chaat recipe | High protein #trending #shorts #food #easyrecipe,https://youtube.com/shorts/5MQOlCaVwBE,"Protein-rich black chickpea chaat with onions, tomatoes, spices & herbs for healthy snacking.",Healthy 🥗
Aap ko bhi jab kuch healthy khane ka man ho to baniye crispy besan dosa #shorts #trending #quick,https://youtube.com/shorts/8kxmYbuTVM0,"Healthy gram flour dosa with mixed veggie filling, paneer, capsicum & Schezwan sauce.","Adventure ⭐, Healthy 🥗"
Aaj husband ke liye banaya special Sevai | Sevai Fruit Custard | #trending #recipe #food #dessert,https://youtube.com/shorts/_ocEb5WWK-4,"Creamy vermicelli fruit custard. Roasted sevai with milk, custard powder, topped with fruits.",Sweet 🍬
Noodles Frankie recipe | quick and easy | street style frankie recipe #trending #shorts #cooking,https://youtube.com/shorts/t2Iw_HR-BgI,"Street-style noodles in roti. Schezwan noodles, vegetables, chapati for fusion frankie roll.","Adventure ⭐, Surprise 🎲"
Street Style Masala Pav Recipe | pav bhaji style | quick and easy #trending #shorts #food #cooking,https://youtube.com/shorts/UdYtiIiv8eI,"Mumbai street-style spicy pav with masala vegetables, chili-garlic paste, pav bhaji masala.",Happy 😊
Instant Rava/Suji Dhokla | Quick and Easy Recipe #trending #shorts #food #cooking#easyrecipe#indian,https://youtube.com/shorts/6PDyVlS682E,"Fluffy instant rava dhokla. Semolina, besan, curd, ENO, mustard seed tadka for snack.","Happy 😊, Lazy 😴"
Crispy Aloo Tikki Chat | Quick and Easy Recipe #trending #shorts #recipe #cooking #indianfood,https://youtube.com/shorts/HxQvnoDZ23U,"Crispy potato tikkis topped with chutney, curd and spices. Topped with pomegranate.",Surprise 🎲
Lasooni Palak Paneer | Quick and Easy Recipe #trending #shorts #food #cooking #easyrecipe #foodie,https://youtube.com/shorts/mRq6pyFfYf8,"Garlicky spinach paneer curry. Fresh spinach puree, fried paneer cubes & plenty of garlic.","Happy 😊, Healthy 🥗"
To kab bana rahe ho ye tasty vade | Quick and easy #trending #shorts #recipe #food #cooking #vada,https://youtube.com/shorts/3mQxC5lHWG4,Healthy chana dal & oats vadas with spices and ginger. Protein-packed savory snack.,Healthy 🥗
Itna tasty lagta hai ki aap bar bar banayenge | Makhandi Halwa | #trending #shorts #recipe #cooking,https://youtube.com/shorts/KwuJw2aVa9w,"Rich creamy semolina halwa with milk, sugar, ghee & dry fruits. Irresistible sweet.","Festive 🎉, Sweet 🍬"
Meri maniye ek bar onion coriander chutney jarur try kariye #chutney #trending #recipe #newvideo,https://youtube.com/shorts/loNpgI-1RbM,"Tangy onion-coconut chutney with coriander, curry leaves tempering. Perfect side for snacks.",Happy 😊
Sham ke naste me banaye ye tasty Chinese Cutlet | Quick and Easy #trending #shorts #recipe #food,https://youtube.com/shorts/7rFCYJg2NLE,"Indo-Chinese potato cutlets with mixed veggies, Schezwan chutney & corn flour coating.","Adventure ⭐, Surprise 🎲"
Eggless Chocolate Pancake | Quick and Easy recipe | #trending #shorts #food #cooking #foodie,https://youtube.com/shorts/oknzKP4ntZk,"Fluffy eggless chocolate pancakes. Maida, cocoa, butter, milk, vanilla for breakfast treat.","Happy 😊, Sweet 🍬"
Sardiyo me banaye ye crispy Masala puri ki recipe | Quick and easy #trending #shorts #cooking,https://youtube.com/shorts/9v8HvhWv66A,"Spiced crispy wheat puris with potato filling, dough seasoned with aromatic Indian masala.",Happy 😊
Ek sham aise coffee date | Hot Coffee recipe #trending #shorts #cooking #quickrecipe #coffee,https://youtube.com/shorts/VjGXh8CxoFI,"Frothy restaurant-style hot coffee: coffee powder, sugar, hot milk, chocolate syrup & chips.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Crispy Aloo Tikki Chat | Quick and Easy Recipe,https://youtube.com/shorts/HxQvnoDZ23U,"Crispy potato tikkis with curd, chutneys, chaat masala, boondi, pomegranate & aloo bhujia - street food style snack.",Surprise 🎲
Lasooni Palak Paneer | Quick and Easy Recipe,https://youtube.com/shorts/mRq6pyFfYf8,"Garlic-rich spinach paneer curry with aromatic spices, mint, coriander, green chilies, ginger for authentic flavor.","Happy 😊, Healthy 🥗"
To kab bana rahe ho ye tasty vade | Quick and easy,https://youtube.com/shorts/3mQxC5lHWG4,"Healthy oats-chana dal vadas with ginger, cinnamon, coriander seeds, onions, green chilies and spices.",Healthy 🥗
Itna tasty lagta hai ki aap bar bar banayenge | Makhandi Halwa,https://youtube.com/shorts/KwuJw2aVa9w,"Rich semolina halwa soaked in milk with sugar, ghee, dry fruits and cardamom for festive occasions.","Festive 🎉, Sweet 🍬"
Meri maniye ek bar onion coriander chutney jarur try kariye,https://youtube.com/shorts/loNpgI-1RbM,"Onion coconut chutney with coriander, green chilies, tamarind, roasted chana dal, and traditional tempering.",Happy 😊
Sham ke naste me banaye ye tasty Chinese Cutlet | Quick and Easy,https://youtube.com/shorts/7rFCYJg2NLE,"Chinese potato cutlets with mixed veggies, cornflour, Schezwan chutney, black pepper, vinegar for snacks.","Adventure ⭐, Surprise 🎲"
Eggless Chocolate Pancake | Quick and Easy recipe,https://youtube.com/shorts/oknzKP4ntZk,"Fluffy eggless chocolate pancakes with cocoa powder, baking powder, melted butter, warm milk, vanilla.","Happy 😊, Sweet 🍬"
Sardiyo me banaye ye crispy Masala puri ki recipe | Quick and easy,https://youtube.com/shorts/9v8HvhWv66A,"Winter special crispy masala puris with wheat flour, rava, spicy potato, peas & aromatic spice mix.",Happy 😊
Ek sham aise coffee date | Hot Coffee recipe,https://youtube.com/shorts/VjGXh8CxoFI,"Restaurant-style hot coffee with frothy mixture, hot milk, chocolate syrup, chips for cozy moments.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Spicy Garlic Masala Maggi | Tasty and Spicy recipe,https://youtube.com/shorts/1fVDoQtO-ao,"Spicy Maggi with garlic, mixed veggies, chili flakes, oregano, colorful bell peppers - fusion comfort food.","Happy 😊, Lazy 😴"
5 minutes breakfast recipe | Dahi bread toast❤️,https://youtube.com/shorts/fXEO8gjL7a4,"Quick breakfast with curd-besan batter coated bread toast, tempered with mustard seeds, coriander garnish.","Happy 😊, Lazy 😴"
Husband ke liye banaya Matar Petties Recipe,https://youtube.com/shorts/1Y4_SmpTHJs,"Green peas patties with boiled potatoes, breadcrumbs, garam masala, amchur powder, cornflour coating.",Happy 😊
Tawa Methi Matar Pulao | Protien pack Recipe | Quick and Easy,https://youtube.com/shorts/ASplvF_nD-4,"Protein pulao with methi, peas, chickpeas, paneer cubes, spices, leftover rice, whole spice flavor.","Happy 😊, Healthy 🥗"
Til Gud Laddu | Makarsankranti Special Recipe,https://youtube.com/shorts/GPkeJfVeSWw,"Traditional festival laddus with sesame seeds, jaggery, peanuts, and gud for Makar Sankranti.","Festive 🎉, Sweet 🍬"
Aaj banaya Popcorn Samosa | Crispy and Tasty Samosa recipe,https://youtube.com/shorts/SkMMxYroHlw,"Mini popcorn samosas with spiced potato-pea filling, carom seed dough - crispy Indian snack.","Happy 😊, Surprise 🎲"
Ekdam simple aur naye tarike se bnaye Bread Pakoda recipe,https://youtube.com/shorts/BooKEihfg84,"Bread pakoda with mint-coriander chutney, spiced besan batter; turmeric, chili, and masala seasoning.",Happy 😊
Husband ke liye banaya Christmas Sandwich 🥪,https://youtube.com/shorts/3PPpuM56Dgo,"Christmas sandwich with coriander-mint-pista paste, paneer, cheese, cucumber, and festive herbs.","Festive 🎉, Happy 😊"
Christmas me apne chote bacho ke liye banaye eggless kulkul cookies,https://youtube.com/shorts/OFbzPWlRe_U,"Eggless kulkul cookies with rava, maida, milk powder, vanilla, deep-fry technique for festive treats.","Festive 🎉, Sweet 🍬"
Gobhi ke Pakode | Crispy Snacks for Winter |Quick and Easy recipe,https://youtube.com/shorts/pwBLT8zaCUU,"Winter cauliflower pakoras with gram, rice flour, spices, amchur, kasuri methi for crispy snacks.",Happy 😊
Khajoor Shake | Quick abd Easy Recipe | High Protein,https://youtube.com/shorts/_d5IIBmgBlY,"Nutritious dates shake with milk, almonds, cashews, cardamom, honey for a high-protein drink.","Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Husband ke liye banaya Amla ka Achar,https://youtube.com/shorts/0sUUOiZiOCo,"Winter special amla pickle with mustard seeds, spices, turmeric, Kashmiri chili for preservation.",Healthy 🥗
How to make Gajar ka Halwa | Delicious recipe | Quick and Easy,https://youtube.com/shorts/KOdjGU-UZmE,"Classic carrot halwa with full-fat milk, milk powder, ghee, dry fruits, raisins, and cardamom.",Sweet 🍬
How to make Dry Fruits Laddu | Healthy & Immunity Booster,https://youtube.com/shorts/Q-W2LV5o9Vs,"Healthy mixed dry fruits laddus, nutrient-rich sweet treat for immunity and festivities.","Festive 🎉, Healthy 🥗, Sweet 🍬"
How to make Cheese pizza Sandwich 🥪 for your loving ones,https://youtube.com/shorts/Q6K1QmWx63I,"Cheese pizza-style sandwich with melted cheese, aromatic herbs, special pizza toppings.",Happy 😊
How to make crispy potato sticks,https://youtube.com/shorts/5QQim82Faqo,"Crispy potato sticks with simple ingredients for crunchy, savory snacks.",Happy 😊
How to make crispy potato sticks,https://youtube.com/shorts/5QQim82Faqo,"Recipe for crispy potato sticks with simple ingredients, perfect for crunchy snacking.",Happy 😊
How to make Oreo Pancake,https://youtube.com/shorts/xt-3crdTxtc,Quick and easy delicious Oreo pancakes with baking powder and milk.,"Happy 😊, Sweet 🍬"
How to make Bajra Methi Pancake,https://youtube.com/shorts/7zdkbPSwX6s,"Gluten-free healthy and tasty breakfast option with bajra, methi and spices.",Healthy 🥗
How to make Paneer Pocket,https://youtube.com/shorts/lX5XXzXVSzs,"Instant paneer snack – stuffed with cheese, capsicum, spices. Quick and tasty.",Happy 😊
Trending Paneer Popcorn Crunchy Cornflake Recipe,https://youtube.com/shorts/7kwBMnszSYQ,Crispy paneer popcorn coated with crunchy cornflakes for a trending snack.,"Happy 😊, Surprise 🎲"
How to make Paneer Ghotala Dosa,https://youtube.com/shorts/ff990M55ibo,"Cheesy, crispy dosa with paneer, veggies, and schezwan sauce.","Adventure ⭐, Surprise 🎲"
Korean Maggi recipe,https://youtube.com/shorts/-VF9KYfoknw,"2-min hot and spicy Maggi recipe with schezwan and soy sauce, fusion twist.","Adventure ⭐, Surprise 🎲"
How to make Sprouts and Oats Tikki,https://youtube.com/shorts/phanWU1bNwo,"High protein snack made with sprouted moong, oats, veggies and spices.",Healthy 🥗
How to make Restaurant Style Paneer Do Pyaza,https://youtube.com/shorts/6dtZ-7tNW-Q,"Perfect dinner recipe: marinated paneer, double onions, aromatic gravy.",Happy 😊
How to make Lemon Rice,https://youtube.com/shorts/oFEpD5msZsc,Quick 10 min sweet and tangy lemon rice - ready in a flash!,"Happy 😊, Lazy 😴"
How to make Chilli Cheese Sandwich,https://youtube.com/shorts/7aKi1vdg3kQ,"10 minute Indian street-style snack with capsicum, cabbage, schezwan chutney.","Happy 😊, Lazy 😴"
Thekua Recipe,https://youtube.com/shorts/nzbYigyKFZg,"Chhath Puja special sweet treat made with wheat flour, jaggery, coconut.","Festive 🎉, Sweet 🍬"
Nimki Namkeen in 20 mins,https://youtube.com/shorts/f7GHfp5a-xI,Diwali special instant snack; crispy and ready in just 20 minutes.,"Festive 🎉, Happy 😊"
How to make High protein Soybeans Kabab,https://youtube.com/shorts/kJAHzEbHCY8,"Healthy kababs: soybeans, chana dal, and Indian spices for protein-rich snack.",Healthy 🥗
Yummy Paneer Kathi Roll,https://youtube.com/shorts/rzZuq1yxJUI,"Flavourful paneer filling in soft refined flour dough, quick and satisfying.",Happy 😊
Etna Crispy & Tasty Potatoes Suji Bites,https://youtube.com/shorts/1QVpaAJ0AVs,"Crispy, trending potato and semolina bites – great for snacks.","Happy 😊, Surprise 🎲"
How to make Veg Pulao,https://youtube.com/shorts/ixnECMwer5k,"Instant veg pulao with basmati rice, mixed vegetables, and aromatic spices.",Happy 😊
Ep 09 | Halwa Puri Kala Chana Ashtami Prasad,https://youtube.com/shorts/QlJn-FMJQvg,Navratri ashtami special – black chickpeas curry and classic semolina halwa.,"Festive 🎉, Healthy 🥗"
Ep-8 How to make Banana Tikki Chat,https://youtube.com/shorts/qa4XLwgY3po,"Tikki chaat with raw bananas, peanuts, water chestnut flour – perfect vrat snack.","Festive 🎉, Healthy 🥗"
Ep-7 | How to make Makhana Namkeen,https://youtube.com/shorts/BlfhPnezmVk,Fox nuts roasted with dry fruits and spices; ideal light vrat namkeen.,"Festive 🎉, Healthy 🥗"
Ep-6 | How to make Samak Rice Khichdi for vrat,https://youtube.com/shorts/M0o2NK7OmNc,"Fasting-friendly khichdi with samak rice, potatoes, ghee – nutritious and light.","Festive 🎉, Healthy 🥗"
Ep-05 | How to Make Sabudana Paratha,https://youtube.com/shorts/8vUnN_WDHVQ,"Sabudana, potatoes, spices – soft, gooey paratha for Navratri and fasting.","Festive 🎉, Healthy 🥗"
Ep 04- How to make Falahari Aloo for vrat,https://youtube.com/shorts/2Lnfnb4LNbM,"Easy vrat recipe: boiled potatoes, peanuts, almonds, rock salt, fresh coriander.","Festive 🎉, Healthy 🥗"
Ep-3 How to make Makhane ki Kheer,https://youtube.com/shorts/GILRukY1MrE,Navratri special kheer; makhana and dry fruits simmered in milk and saffron.,"Festive 🎉, Healthy 🥗"
EP-02 | How to make Vrat wala Dosa,https://youtube.com/shorts/kSY5KrOxOpE,"Instant dosa for Navratri with sabudana, barnyard millet, potato, spices.","Festive 🎉, Healthy 🥗"
Perfect healthy recipe Moong Dal Bread Toast,https://youtube.com/shorts/Kn2PNOEUWb0,"Moong toast: soaked moong dal, vegetables, spices batter on bread, quick protein snack.","Healthy 🥗, Lazy 😴"
How to make Sev Puri,https://youtube.com/shorts/-CHdYeMxA5o,"Mumbai street food classic – papdi, potato, onion, chutneys, sev for perfect munching.",Surprise 🎲
How to make Paneer Changezi Masala,https://youtube.com/shorts/vnEKMRx6jtg,"Rich, creamy paneer curry with yogurt marinade and aromatic Indian spices.",Happy 😊
How to make chole samosa chaat,https://youtube.com/shorts/dzXVLfwFdR0,"Street style chole samosa chaat with white matar, chutneys, and crispy samosas.","Adventure ⭐, Surprise 🎲"
How to make tasty potatoes Tacos,https://youtube.com/shorts/J5HqiXhwwE0,"Crispy home-made tacos with mashed potatoes, onions, cheese, and Indian spices.","Adventure ⭐, Surprise 🎲"
How to make Ukdiche Modak,https://youtube.com/shorts/_lM962tl8EE,Traditional Ganpati sweet – rice flour dumplings with jaggery-coconut filling.,"Festive 🎉, Sweet 🍬"
How to make Khasta Moong Dal Kachori,https://youtube.com/shorts/fBVL7RZsH0w,Crispy deep-fried snack with spiced moong dal stuffed in flaky dough shell.,Happy 😊
How to make Pizza Stuff Bread,https://youtube.com/shorts/oB4_ndKgL-4,"Pizza-stuffed garlic bread: cheese, veggies & pizza sauce in soft bread loaf.","Happy 😊, Surprise 🎲"
How to make Makai Dum Angara,https://youtube.com/shorts/dVpXS6d6LH4,Spicy restaurant-style corn curry with onion-tomato gravy and rich Indian spices.,Happy 😊
Tiranga Rava Dhokla,https://youtube.com/shorts/3HWXDnU4wUQ,Tricolour steamed dhokla - Indian Independence Day special with rava base.,"Festive 🎉, Happy 😊"
Crispy Bread Potato Bites Recipe,https://youtube.com/shorts/7i7WZrG1Vig,"Cheesy snack: mashed potatoes, bread, breadcrumbs, cheese for tasty bites.",Happy 😊
Get full Rasmalai recipe,https://youtube.com/shorts/QPNwSUIhcww,Perfect rasmalai at home with detailed tips for authentic Bengali sweet.,Sweet 🍬
Homemade Pizza McPuff recipe,https://youtube.com/shorts/cfF8Ws0D6tQ,Crispy and cheesy pizza McPuffs – party and kids favorite snack.,"Happy 😊, Surprise 🎲"
Make chilli potato In 15 mins,https://youtube.com/shorts/vDu8abl9owg,"Quick Indo-Chinese chili potatoes with fries, vegetables, and spicy sauces.","Adventure ⭐, Happy 😊"
Cheese Bomb Recipe,https://youtube.com/shorts/C2sqia4BggI,"Pizza cheese bomb for lunchbox – gooey cheese in dough balls, baked or fried.","Happy 😊, Surprise 🎲"
Poha & Veggies Cutlet for kids,https://youtube.com/shorts/jvGkvuplMY4,"Healthy poha cutlet with mixed veggies, ideal for school lunchbox.",Healthy 🥗
Mini Paratha for kids,https://youtube.com/shorts/7AMVqoBglVE,"Mini chapati parathas for kids – fun, healthy, and perfect for lunch.",Happy 😊
Crispy Corn Bhajiya,https://youtube.com/shorts/LKb1lvbZ6Ng,Corn bhajiya: corn kernels in seasoned gram flour batter for monsoon snacks.,Happy 😊
घुगनी और चुरा (Ghugni and chura),https://youtube.com/shorts/xza-pv3VcQc,"Classic Bihar dish: spicy black chickpeas with poha (chura), homemade style.",Happy 😊
Easy Special Lunch - Afghani Style Paneer Masala,https://youtube.com/shorts/KJtH0LMp8mM,"Rich creamy Afghani paneer, yogurt-based gravy with aromatic flavor.",Happy 😊
पहाड़ी ककड़ी का रायता और लहसुन का लच्छा पराठा,https://youtube.com/shorts/eFgy3zR9Os4,Mountain cucumber raita and garlic laccha paratha – North Indian hills taste.,Happy 😊
Kiwi Pineapple Pani Puri flavour Recipe,https://youtube.com/shorts/xez-cyQSgbs,Unique pani puri water infused with kiwi and pineapple – tangy and refreshing.,"Adventure ⭐, Happy 😊, Surprise 🎲, Sweet 🍬"
Stuffed Bun Pav recipe,https://youtube.com/shorts/8O_P_vS7o8c,"Mumbai-style stuffed pav: paneer, veggies, and spice stuffing in pav bun.",Happy 😊
Bread Oats cutlet,https://youtube.com/shorts/NKlWvVeN6hE,"Healthy cutlet recipe: bread, oats, vegetables for a nutritious snack.",Healthy 🥗
Amritsari Chole Bhature recipe,https://youtube.com/shorts/8YUwo1YL85k,Authentic Punjabi chole with spiced bhature bread – street style from Amritsar.,Happy 😊
Makhana Bhel Recipe,https://youtube.com/shorts/hmRNi_irAxw,"Healthy snack: roasted makhana, veggies, chutneys, and spices for crispy, delicious bhel.",Healthy 🥗
Malai Kofta Recipe,https://youtube.com/shorts/aTK3hDbSmTU,"Restaurant-style malai kofta with rich onion-tomato-cashew gravy, aromatic spices.",Happy 😊
Stuffed veggies made of rice flour dough,https://youtube.com/shorts/GYVKXbDkKQw,"Healthy stuffed veggies wrapped in rice flour dough, filled with paneer/veggies.",Healthy 🥗
Quinoa Tikki Recipe with homemade cream cheese,https://youtube.com/shorts/707KCjG8EOU,"High-protein quinoa-oats tikkis stuffed with mint cream cheese, pan-fried.","Adventure ⭐, Healthy 🥗"
Sweet Boondi Recipe,https://youtube.com/shorts/_4-30QDnI5A,"Hanuman Jayanti special: besan boondi balls, fried and soaked in cardamom sugar syrup.","Festive 🎉, Sweet 🍬"
Fresh Fruit Salsa!,https://youtube.com/shorts/Hc6hEADiVas,"Healthy, nutritious fruit salsa for weight loss and snacking - refreshing & easy.",Healthy 🥗
Spring Onion Mushroom recipe,https://youtube.com/shorts/YVQkXMOcxqU,Quick savory spring onion and mushroom recipe with Bollywood music vibes.,Happy 😊
Roasted Apple and Walnut Macaroni Pasta,https://youtube.com/shorts/9zru4IBnF_A,"Unique macaroni pasta with roasted apple, walnut - sweet and savory flavors.","Adventure ⭐, Surprise 🎲"
Roll Samosa Recipe,https://youtube.com/shorts/vOukMuF147o,"Crispy roll samosas stuffed with cheese, beetroot, and spices - quick snack.","Adventure ⭐, Happy 😊, Surprise 🎲"
Mango Mastani recipe,https://youtube.com/shorts/5DMDfN_k6Ao,"Summer dessert drink: mangoes blended with milk, nuts, topped with cream.","Adventure ⭐, Happy 😊, Healthy 🥗, Lazy 😴, Surprise 🎲, Sweet 🍬"
Sprouted Chana with Creamy Curd,https://youtube.com/shorts/b-m1MdOShYw,"High protein snack: sprouted chana topped with creamy curd, simple seasoning.","Healthy 🥗, Lazy 😴"
Rajma Recipe,https://youtube.com/shorts/sa9yvuM6g_A,"Healthy kidney bean curry (rajma) perfect for lunch, easy and protein-rich.","Happy 😊, Healthy 🥗"
Broccoli & Chickpeas Tikki Recipe,https://youtube.com/shorts/raXHjf3Yvn4,"Weight-loss tikki: broccoli, chickpeas, spices - healthy, high protein snack.",Healthy 🥗
Smoked Sprouts Bhel,https://youtube.com/shorts/ZL2lkl_5cDg,"High-protein bhel made with smoked sprouts, spicy and crunchy street snack.",Healthy 🥗
Refreshing Thandai Recipe,https://youtube.com/shorts/FPPoyvBVxfc,"Traditional Holi drink with nuts, seeds, and aromatic spices - festive favorite.","Adventure ⭐, Festive 🎉, Happy 😊, Surprise 🎲, Sweet 🍬"
Gujiya Recipe,https://youtube.com/shorts/ODLIfiEwoWw,Holi festival sweet pastry - crispy gujiya with khoya and nuts filling.,"Festive 🎉, Sweet 🍬"
Rabdi Malpua Recipe,https://youtube.com/shorts/EA1KhETzjHE,"Rajasthani Holi sweet: malpua soaked in rich rabdi, festive treat.","Festive 🎉, Sweet 🍬"
Palak Paratha,https://youtube.com/shorts/U7qqsPAcCyc,"Healthy spinach paratha, perfect for breakfast, quick to prepare.",Healthy 🥗
Pav bhaji recipe,https://youtube.com/shorts/ju0dmGu4ov4,"Mumbai street-style pav bhaji: spiced vegetable curry, buttered pav buns.",Happy 😊
Crispy Aloo Chat,https://youtube.com/shorts/4f9_yQx2lY0,"Crispy potato chaat, chatpata & easy - quick Indian street food snack.",Surprise 🎲
`;

const parseCSV = (csv: string): Recipe[] => {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    const recipes: Recipe[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        // Regex to split by comma but ignore commas inside quotes
        const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        
        if (values.length === headers.length) {
            const name = values[0].trim().replace(/^"|"$/g, '');
            const videoLink = values[1].trim().replace(/^"|"$/g, '');
            const summary = values[2].trim().replace(/^"|"$/g, '');
            const tagsRaw = values[3].trim().replace(/^"|"$/g, '');
            
            const tags = tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag);

            recipes.push({
                name,
                videoLink,
                summary,
                tags,
            });
        }
    }
    return recipes;
};

export const allRecipes: Recipe[] = parseCSV(csvData);
