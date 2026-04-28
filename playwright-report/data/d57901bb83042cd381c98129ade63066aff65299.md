# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> TC-02 | Search Samsung Galaxy → Extract Price → Add to Cart
- Location: tests\amazon.spec.js:31:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#twotabsearchtextbox') to be visible
    - waiting for" https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=e8]
    - heading "Keyboard shortcuts" [level=2] [ref=e9]
    - list "Keyboard shortcuts" [ref=e10]:
      - listitem [ref=e11]:
        - link "Search, alt, forward slash" [ref=e12] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e13]:
            - generic [ref=e14]: Search
            - generic [ref=e15]:
              - generic [ref=e16]: alt
              - generic [ref=e17]: +
              - generic [ref=e18]: /
      - listitem [ref=e19]:
        - link "Cart, shift, alt, c" [ref=e20] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e21]:
            - generic [ref=e22]: Cart
            - generic [ref=e23]:
              - generic [ref=e24]: shift
              - generic [ref=e25]: +
              - generic [ref=e26]: alt
              - generic [ref=e27]: +
              - generic [ref=e28]: C
      - listitem [ref=e29]:
        - link "Home, shift, alt, h" [ref=e30] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e31]:
            - generic [ref=e32]: Home
            - generic [ref=e33]:
              - generic [ref=e34]: shift
              - generic [ref=e35]: +
              - generic [ref=e36]: alt
              - generic [ref=e37]: +
              - generic [ref=e38]: H
      - listitem [ref=e39]:
        - link "Your orders, shift, alt, o" [ref=e40] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e41]:
            - generic [ref=e42]: Orders
            - generic [ref=e43]:
              - generic [ref=e44]: shift
              - generic [ref=e45]: +
              - generic [ref=e46]: alt
              - generic [ref=e47]: +
              - generic [ref=e48]: O
      - listitem [ref=e49]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=e50] [cursor=pointer]:
          - generic [ref=e51]:
            - generic [ref=e52]: Show/Hide shortcuts
            - generic [ref=e53]:
              - generic [ref=e54]: shift
              - generic [ref=e55]: +
              - generic [ref=e56]: alt
              - generic [ref=e57]: +
              - generic [ref=e58]: Z
    - generic [ref=e64]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=e65]:
    - navigation "Primary" [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e68]:
          - link "Amazon.in" [ref=e70] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Gurugram 122001 Update location" [ref=e73] [cursor=pointer]:
            - generic [ref=e75]:
              - generic [ref=e76]: Delivering to Gurugram 122001
              - generic [ref=e77]: Update location
        - search [ref=e80]:
          - generic [ref=e83]:
            - generic [ref=e85]: All
            - combobox "Select the department you want to search in" [ref=e87] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e90]
          - generic "Go" [ref=e93] [cursor=pointer]:
            - button "Go" [ref=e94]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e98] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=e101]:
                - img "India" [ref=e102]
                - generic [ref=e103]: EN
            - button "Expand to Change Language or Country" [ref=e104] [cursor=pointer]
          - generic [ref=e105]:
            - link "Hello, sign in Account & Lists" [ref=e106] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=e108]: Hello, sign in
              - generic [ref=e109]: Account & Lists
            - button "Expand Account and Lists" [ref=e110] [cursor=pointer]
          - link "Returns & Orders" [ref=e111] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e112]: Returns
            - generic [ref=e113]: "& Orders"
          - link "0 items in cart" [ref=e114] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e116]: "0"
            - generic [ref=e119]: Cart
      - generic [ref=e120]:
        - button "Open All Categories Menu" [ref=e122] [cursor=pointer]:
          - generic [ref=e124]: All
        - list [ref=e128]:
          - listitem [ref=e129]:
            - generic [ref=e130]:
              - link "Fresh" [ref=e131] [cursor=pointer]:
                - /url: /fresh?ref_=nav_cs_grocery
              - button "Fresh Details" [ref=e132] [cursor=pointer]
          - listitem [ref=e133]:
            - link "MX Player" [ref=e135] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e136]:
            - link "Sell" [ref=e138] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e139]:
            - link "Bestsellers" [ref=e141] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e142]:
            - link "Mobiles" [ref=e144] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e145]:
            - link "Today's Deals" [ref=e147] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e148]:
            - link "Customer Service" [ref=e150] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e151]:
            - link "New Releases" [ref=e153] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e154]:
            - generic [ref=e155]:
              - link "Prime" [ref=e156] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=e157] [cursor=pointer]
          - listitem [ref=e158]:
            - link "Amazon Pay" [ref=e160] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e161]:
            - link "Electronics" [ref=e163] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e164]:
            - link "Fashion" [ref=e166] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e167]:
            - link "Home & Kitchen" [ref=e169] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e170]:
            - link "Computers" [ref=e172] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e173]:
            - link "Books" [ref=e175] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e176]:
            - link "Toys & Games" [ref=e178] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e179]:
            - link "Gift Cards" [ref=e181] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e182]:
            - link "Beauty & Personal Care" [ref=e184] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e185]:
            - link "Car & Motorbike" [ref=e187] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e188]:
            - link "Home Improvement" [ref=e190] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e191]:
            - link "Custom Products" [ref=e193] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e194]:
            - link "Sports, Fitness & Outdoors" [ref=e196] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e197]:
            - link "Health, Household & Personal Care" [ref=e199] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e200]:
            - link "Grocery & Gourmet Foods" [ref=e202] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e203]:
            - link "Pet Supplies" [ref=e205] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e206]:
            - link "Baby" [ref=e208] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e209]:
            - link "Video Games" [ref=e211] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e212]:
            - link "AmazonBasics" [ref=e214] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e215]:
            - link "Audible" [ref=e217] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e218]:
            - link "Subscribe & Save" [ref=e220] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e221]:
            - link "Kindle eBooks" [ref=e223] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e224]:
            - link "Flights" [ref=e226] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
  - main [ref=e230]:
    - banner [ref=e232]:
      - region "Featured content" [ref=e233]:
        - list [ref=e238]:
          - listitem [ref=e239]:
            - link "op" [active] [ref=e242] [cursor=pointer]:
              - /url: https://www.amazon.in/b/?_encoding=UTF8&node=15124949031&pd_rd_w=OLQD5&content-id=amzn1.sym.55f9ee21-f866-4272-81dc-d192d051db27&pf_rd_p=55f9ee21-f866-4272-81dc-d192d051db27&pf_rd_r=9D3BPCKXPZK0AFGX7T7C&pd_rd_wg=yVoNn&pd_rd_r=f790cff2-9536-4733-86f6-8f1a32200ca8&ref_=pd_hp_d_hero_unk
              - img "op" [ref=e243]
    - generic [ref=e244]:
      - generic [ref=e245]:
        - generic [ref=e247]:
          - heading "Appliances for your home | Up to 55% off" [level=2] [ref=e249]
          - generic [ref=e250]:
            - generic [ref=e251]:
              - link "ACs" [ref=e253] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&pd_rd_w=YsJIc&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "ACs" [ref=e255]
                - generic [ref=e257]: Air conditioners
              - link "Refrigerators" [ref=e259] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=81107433031&rh=n%3A81107433031%2Cp_85%3A10440599031&pd_rd_w=YsJIc&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Refrigerators" [ref=e261]
                - generic [ref=e263]: Refrigerators
            - generic [ref=e264]:
              - link "Microwaves" [ref=e266] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=84514739031&rh=n%3A84514739031%2Cp_85%3A10440599031&pd_rd_w=YsJIc&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Microwaves" [ref=e268]
                - generic [ref=e270]: Microwaves
              - link "Washing machines" [ref=e272] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=84514752031&rh=n%3A84514752031%2Cp_85%3A10440599031&pd_rd_w=YsJIc&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Washing machines" [ref=e274]
                - generic [ref=e276]: Washing machines
          - link "Appliances for your home | Up to 55% off - See more" [ref=e278] [cursor=pointer]:
            - /url: /s/?_encoding=UTF8&bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&pd_rd_w=YsJIc&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
            - generic [ref=e279]:
              - generic [ref=e280]: See more
              - generic [ref=e281]: See more
        - generic [ref=e283]:
          - heading "Bulk order discounts + Up to 18% GST savings" [level=2] [ref=e285]
          - generic [ref=e286]:
            - generic [ref=e287]:
              - link "Up to 45% off | Laptops" [ref=e289] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y0DQf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Up to 45% off | Laptops" [ref=e291]
                - generic [ref=e293]: Up to 45% off | Laptops
              - link "Up to 60% off | Kitchen appliances" [ref=e295] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y0DQf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Up to 60% off | Kitchen appliances" [ref=e297]
                - generic [ref=e299]: Up to 60% off | Kitchen appliances
            - generic [ref=e300]:
              - link "Min. 50% off | Office furniture" [ref=e302] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y0DQf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Min. 50% off | Office furniture" [ref=e304]
                - generic [ref=e306]: Min. 50% off | Office furniture
              - link "For Business Purchases" [ref=e308] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y0DQf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "For Business Purchases" [ref=e310]
                - generic [ref=e312]: Register using GST, Udyam, FSSAI or BPAN
          - link "Bulk order discounts + Up to 18% GST savings - Create a free account" [ref=e314] [cursor=pointer]:
            - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y0DQf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
            - generic [ref=e315]:
              - generic [ref=e316]: Create a free account
              - generic [ref=e317]: Create a free account
        - generic [ref=e319]:
          - heading "Starting ₹49 | Deals on home essentials" [level=2] [ref=e321]
          - generic [ref=e322]:
            - generic [ref=e323]:
              - link "Cleaning" [ref=e325] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&bbn=61028133031&rh=n%3A61028133031%2Cp_72%3A1318476031%2Cp_36%3A-19900&_encoding=UTF8&qid=1714749719&rnid=3444809031&ref=sr_nr_p_36_3&pd_rd_w=2olse&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Cleaning" [ref=e327]
                - generic [ref=e329]: Cleaning supplies
              - link "Bath accessories" [ref=e331] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A60834830031%2Cp_36%3A-39900%2Cp_72%3A1318476031&dc=&fs=true&qid=1714744556&rnid=1318475031&ref=sr_nr_p_72_1&ds=v1%3AObcyf9vB3S72PU7NAfGZ%2FbllKjFxF%2BIh8NlJQg5c1A8%22&pd_rd_w=2olse&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Bath accessories" [ref=e333]
                - generic [ref=e335]: Bathroom accessories
            - generic [ref=e336]:
              - link "Home tools" [ref=e338] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A95174669031%2Cp_36%3A3444810031%2Cp_72%3A1318476031&pd_rd_w=2olse&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Home tools" [ref=e340]
                - generic [ref=e342]: Home tools
              - link "Wallpapers" [ref=e344] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A87322479031%2Cp_36%3A-29900%2Cp_72%3A1318476031&dc=&fs=true&qid=1714750891&rnid=1318475031&ref=sr_nr_p_72_1&ds=v1%3AKT2aFWvve4xsaDjrU17ctKHJFfdbS%2FW1Ex2L5A6belw&pd_rd_w=2olse&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Wallpapers" [ref=e346]
                - generic [ref=e348]: Wallpapers
          - link "Starting ₹49 | Deals on home essentials - Explore all" [ref=e350] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=4286640031&pd_rd_w=2olse&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
            - generic [ref=e351]:
              - generic [ref=e352]: Explore all
              - generic [ref=e353]: Explore all
        - generic [ref=e355]:
          - heading "Starting ₹199 | Amazon Brands & more" [level=2] [ref=e357]
          - generic [ref=e358]:
            - generic [ref=e359]:
              - link "Starting ₹199 | Bedsheets" [ref=e361] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=1380460031&rh=n%3A1380460031%2Cp_n_format_browse-bin%3A19560802031&pd_rd_w=QbO2D&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Starting ₹199 | Bedsheets" [ref=e363]
                - generic [ref=e365]: Starting ₹199 | Bedsheets
              - link "Starting ₹199 | Curtains" [ref=e367] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=1380479031&rh=n%3A1380479031%2Cp_n_format_browse-bin%3A19560802031&pd_rd_w=QbO2D&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Starting ₹199 | Curtains" [ref=e369]
                - generic [ref=e371]: Starting ₹199 | Curtains
            - generic [ref=e372]:
              - link "Minimum 40% off | Ironing board & more" [ref=e374] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=1380510031&rh=n%3A1380510031%2Cp_n_format_browse-bin%3A19560790031&pd_rd_w=QbO2D&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Minimum 40% off | Ironing board & more" [ref=e376]
                - generic [ref=e378]: Minimum 40% off | Ironing board & more
              - link "Up to 60% off | Home decor" [ref=e380] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=1380374031&rh=n%3A1380374031%2Cp_n_format_browse-bin%3A19560799031&pd_rd_w=QbO2D&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
                - img "Up to 60% off | Home decor" [ref=e382]
                - generic [ref=e384]: Up to 60% off | Home decor
          - link "Starting ₹199 | Amazon Brands & more - See more" [ref=e386] [cursor=pointer]:
            - /url: /s/?_encoding=UTF8&bbn=1380442031&rh=n%3A1380442031%2Cp_n_format_browse-bin%3A19560802031&pd_rd_w=QbO2D&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=XHMbk&pd_rd_r=1a1e4f0c-2bc8-4a65-91ca-84e957df97be&ref_=pd_hp_d_atf_unk
            - generic [ref=e387]:
              - generic [ref=e388]: See more
              - generic [ref=e389]: See more
      - generic [ref=e391]:
        - generic [ref=e393]:
          - heading "Customers’ Most-Loved Fashion for you" [level=2] [ref=e395]:
            - generic [ref=e396]:
              - generic [ref=e397]: Customers’ Most-Loved Fashion for you
              - generic [ref=e398]: Customers’ Most-Loved Fashion for you
          - generic [ref=e400]:
            - link "Skechers Womens Summits - 896220id Navy/Multi Casual Shoe - 3 UK (6 US) (896220ID-NVMT)" [ref=e402] [cursor=pointer]:
              - /url: /Skechers-Summits-Womens-Casual-Shoes-896220ID-NVMT-6-Navy-Multi/dp/B0CBVN2SCS/?_encoding=UTF8&pd_rd_w=rQ4do&content-id=amzn1.sym.de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_p=de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_gw_cml
              - img "Skechers Womens Summits - 896220id Navy/Multi Casual Shoe - 3 UK (6 US) (896220ID-NVMT)" [ref=e404]
            - link "XYXX Men 100% Cotton Polo Tshirt, Regular Fit, Solid, Pack of 1, XYPTSRT12XL, Indian Blue, XL" [ref=e406] [cursor=pointer]:
              - /url: /XYXX-Solid-Regular-XY_CR14_Polo-Tshirt_1_Blue/dp/B0CBBB5843/?_encoding=UTF8&pd_rd_w=rQ4do&content-id=amzn1.sym.de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_p=de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_gw_cml
              - img "XYXX Men 100% Cotton Polo Tshirt, Regular Fit, Solid, Pack of 1, XYPTSRT12XL, Indian Blue, XL" [ref=e408]
            - link "Skechers Mens Summits - Brisbane Black Sneaker - 11 UK (12 US) (232057ID-BBK)" [ref=e410] [cursor=pointer]:
              - /url: /Skechers-Black-Mens-Casual-Shoes-232057ID-BBK-SUMMITS-Brisbane-UK11/dp/B09XXPS6MB/?_encoding=UTF8&pd_rd_w=rQ4do&content-id=amzn1.sym.de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_p=de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_gw_cml
              - img "Skechers Mens Summits - Brisbane Black Sneaker - 11 UK (12 US) (232057ID-BBK)" [ref=e412]
            - link "Jockey Cotton Blend Crew Neck T-Shirt For Women AW88_White_XL, Relaxed Fit" [ref=e414] [cursor=pointer]:
              - /url: /Jockey-Crew-T-Shirt-Women-AW88_White_XL/dp/B09MFMVVK5/?_encoding=UTF8&pd_rd_w=rQ4do&content-id=amzn1.sym.de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_p=de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_gw_cml
              - img "Jockey Cotton Blend Crew Neck T-Shirt For Women AW88_White_XL, Relaxed Fit" [ref=e416]
          - link "Customers’ Most-Loved Fashion for you - Explore more" [ref=e418] [cursor=pointer]:
            - /url: /s/?_encoding=UTF8&node=50916365031&pd_rd_w=rQ4do&content-id=amzn1.sym.de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_p=de84ee3f-a07f-47cd-ac44-50f5d6cbb587&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_gw_cml
            - generic [ref=e419]:
              - generic [ref=e420]: Explore more
              - generic [ref=e421]: Explore more
        - generic [ref=e423]:
          - heading "Up to 45% off | Your tech upgrade starts here" [level=2] [ref=e425]:
            - generic [ref=e426]:
              - generic [ref=e427]: Up to 45% off | Your tech upgrade starts here
              - generic [ref=e428]: Up to 45% off | Your tech upgrade starts here
          - generic [ref=e430]:
            - group [ref=e433]:
              - group [ref=e437]:
                - list [ref=e438]:
                  - listitem [ref=e439]:
                    - link "BenQ GW2791 27” 1920x1080 FHD 100Hz IPS Eye-Care 99% sRGB Monitor| HDMI| DisplayPort| Ultra Slim Bezel| TUV-Certified| Flicker-Free| Low Blue Light Plus (Black)" [ref=e440] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                      - img "BenQ GW2791 27” 1920x1080 FHD 100Hz IPS Eye-Care 99% sRGB Monitor| HDMI| DisplayPort| Ultra Slim Bezel| TUV-Certified| Flicker-Free| Low Blue Light Plus (Black)" [ref=e442]
                  - listitem [ref=e443]:
                    - link [ref=e444] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                  - listitem [ref=e447]:
                    - link [ref=e448] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                  - listitem [ref=e451]:
                    - link [ref=e452] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                  - listitem [ref=e455]:
                    - link [ref=e456] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                  - listitem [ref=e459]:
                    - link [ref=e460] [cursor=pointer]:
                      - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
            - generic [ref=e463]:
              - link "BenQ GW2791 27” 1920x1080 FHD 100Hz IPS Eye-Care 99% sRGB Monitor| HDMI| DisplayPort| Ultra Slim Bezel| TUV-Certified|..." [ref=e464] [cursor=pointer]:
                - /url: /BenQ-GW2791-Displayport-TUV-Certified-Flicker-Free/dp/B0DJHG9MXM/?_encoding=UTF8&pd_rd_w=TCRii&content-id=amzn1.sym.a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_p=a765b1dd-4121-4dc3-bf22-4a091f481144&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_ls_gwc_pc_en2_
                - paragraph [ref=e465]:
                  - generic [ref=e466]:
                    - generic [ref=e467]: BenQ GW2791 27” 1920x1080 FHD 100Hz IPS Eye-Care 99% sRGB Monitor| HDMI| DisplayPort| Ultra Slim Bezel| TUV-Certified|...
                    - generic [ref=e468]: BenQ GW2791 27” 1920x1080 FHD 100Hz IPS Eye-Care 99% sRGB M…
              - 'generic "Price: ₹9,998.00, M.R.P.: ₹12,990.00" [ref=e469]':
                - generic [ref=e470]:
                  - generic [ref=e471]: ₹9,998.00
                  - generic [ref=e472]:
                    - text: ₹
                    - generic [ref=e473]:
                      - text: 9,998
                      - generic [ref=e474]: .
                    - text: "00"
                - text: "M.R.P:"
                - generic [ref=e475]:
                  - generic [ref=e476]: ₹12,990.00
                  - text: ₹12,990
        - generic [ref=e478]:
          - heading "Best Sellers in Beauty" [level=2] [ref=e480]:
            - generic [ref=e482]: Best Sellers in Beauty
          - generic [ref=e484]:
            - link "Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chandan & Kesar Bath Soap | Handmade Soaps For Glowing | Skin Brightening Soap For Men & Women" [ref=e486] [cursor=pointer]:
              - /url: /Sandalwood-Saffron-300-Handmade-Whitening/dp/B09S6M7JQJ/?_encoding=UTF8&pd_rd_w=EQvY5&content-id=amzn1.sym.211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_p=211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_crs_zg_bs_1355016031
              - img "Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of 3) | Paraben Free | Chandan & Kesar Bath Soap | Handmade Soaps For Glowing | Skin Brightening Soap For Men & Women" [ref=e488]
            - link "Simple Kind to Skin Refreshing Facial Wash | 100% Soap-Free Gentle Cleanser with Vitamin E & Glycerin | For All Skin Types | Perfect for Sensitive Skin, 100ml" [ref=e490] [cursor=pointer]:
              - /url: /Simple-Refreshing-Facial-Soap-Free-Facewash/dp/B0CKF48RRR/?_encoding=UTF8&pd_rd_w=EQvY5&content-id=amzn1.sym.211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_p=211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_crs_zg_bs_1355016031
              - img "Simple Kind to Skin Refreshing Facial Wash | 100% Soap-Free Gentle Cleanser with Vitamin E & Glycerin | For All Skin Types | Perfect for Sensitive Skin, 100ml" [ref=e492]
            - link "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ | Hydrating, Lightweight & Non-Greasy | No White Cast | Broad Spectrum & Blue Light Protection | Clinically Tested - (In-Vivo) | 30 g" [ref=e494] [cursor=pointer]:
              - /url: /Derma-Co-Hyaluronic-Lightweight-white-cast/dp/B0C6M3KHXV/?_encoding=UTF8&pd_rd_w=EQvY5&content-id=amzn1.sym.211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_p=211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_crs_zg_bs_1355016031
              - img "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ | Hydrating, Lightweight & Non-Greasy | No White Cast | Broad Spectrum & Blue Light Protection | Clinically Tested - (In-Vivo) | 30 g" [ref=e496]
            - link "Cetaphil Gentle Skin Hydrating Face Wash 118ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin" [ref=e498] [cursor=pointer]:
              - /url: /Cetaphil-Hydrating-Sulphate-Free-Niacinamide-Sensitive/dp/B01CCGW4OE/?_encoding=UTF8&pd_rd_w=EQvY5&content-id=amzn1.sym.211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_p=211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_crs_zg_bs_1355016031
              - img "Cetaphil Gentle Skin Hydrating Face Wash 118ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin" [ref=e500]
        - generic [ref=e502]:
          - heading "Customers’ Most-Loved products" [level=2] [ref=e504]:
            - generic [ref=e506]: Customers’ Most-Loved products
          - generic [ref=e508]:
            - link "Nirmalaya Premium Organic Cow Dung Havan Cups | Pack of 15 with Holder | 100% Natural Organic Cups | Blend of Guggal, Lobaan & Natural Herbs | Ideal for Pooja, Meditation, Yoga and Aromatherapy" [ref=e510] [cursor=pointer]:
              - /url: /Nirmalaya-Organic-Sambrani-Pooja-Jatamassi/dp/B0BC1KVT3R/?_encoding=UTF8&pd_rd_w=fr8yJ&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Nirmalaya Premium Organic Cow Dung Havan Cups | Pack of 15 with Holder | 100% Natural Organic Cups | Blend of Guggal, Lobaan & Natural Herbs | Ideal for Pooja, Meditation, Yoga and Aromatherapy" [ref=e512]
            - link "Wall1ders Golden Mirror Stickers - Acrylic Wall Decor, Large Size (45 cm), Self-Adhesive" [ref=e514] [cursor=pointer]:
              - /url: /Wall1ders-Acrylic-Mirror-Stickers-Office/dp/B071RV9WZ9/?_encoding=UTF8&pd_rd_w=fr8yJ&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Wall1ders Golden Mirror Stickers - Acrylic Wall Decor, Large Size (45 cm), Self-Adhesive" [ref=e516]
            - link "Saaikee Fruit Basket with Lid | Net Basket for Fruits & Vegetables | Fruits Basket with net Cover | Mesh Basket | Apple Shape Vegetables Fruit Basket for Kitchen (Blue)" [ref=e518] [cursor=pointer]:
              - /url: /Saaikee-Basket-Size28-5-Assorted-Kilogram/dp/B07ZRTPG16/?_encoding=UTF8&pd_rd_w=fr8yJ&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Saaikee Fruit Basket with Lid | Net Basket for Fruits & Vegetables | Fruits Basket with net Cover | Mesh Basket | Apple Shape Vegetables Fruit Basket for Kitchen (Blue)" [ref=e520]
            - link "pranjals house Metal Krishna Playing Basuri Round Frame Wall Hanging For Decor (23\" Multicolour)" [ref=e522] [cursor=pointer]:
              - /url: /Pranjals-Handcrafted-Krishna-Playing-Hanging/dp/B08VWJYRFM/?_encoding=UTF8&pd_rd_w=fr8yJ&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "pranjals house Metal Krishna Playing Basuri Round Frame Wall Hanging For Decor (23\" Multicolour)" [ref=e524]
          - link "Customers’ Most-Loved products - Explore more" [ref=e526] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=30631803031&pd_rd_w=fr8yJ&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
            - generic [ref=e528]: Explore more
        - separator [ref=e529]
        - generic [ref=e531]:
          - heading "Up to 60% off | Home & kitchen essentials from women owned brands" [level=2] [ref=e533]:
            - generic [ref=e535]: Up to 60% off | Home & kitchen essentials from women owned brands
          - generic [ref=e537]:
            - group [ref=e540]:
              - group [ref=e544]:
                - list [ref=e545]:
                  - listitem [ref=e546]:
                    - link "hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits | BPA-Free Kitchen Storage Container for Fridge Organisation" [ref=e547] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                      - img "hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits | BPA-Free Kitchen Storage Container for Fridge Organisation" [ref=e549]
                  - listitem [ref=e550]:
                    - link [ref=e551] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                  - listitem [ref=e554]:
                    - link [ref=e555] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                  - listitem [ref=e558]:
                    - link [ref=e559] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                  - listitem [ref=e562]:
                    - link [ref=e563] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                  - listitem [ref=e566]:
                    - link [ref=e567] [cursor=pointer]:
                      - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
            - generic [ref=e570]:
              - link "hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits |..." [ref=e571] [cursor=pointer]:
                - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=uKc7l&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_kar_gw_pc_en_
                - paragraph [ref=e572]:
                  - generic [ref=e574]: hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits |...
              - 'generic "Deal Price: ₹263.00, M.R.P.: ₹1,200.00" [ref=e575]':
                - generic [ref=e576]:
                  - generic [ref=e577]: ₹263.00
                  - generic [ref=e578]:
                    - text: ₹
                    - generic [ref=e579]:
                      - text: "263"
                      - generic [ref=e580]: .
                    - text: "00"
                - text: "M.R.P:"
                - generic [ref=e581]:
                  - generic [ref=e582]: ₹1,200.00
                  - text: ₹1,200.00
        - generic [ref=e584]:
          - heading "Up to 50% off | International brands" [level=2] [ref=e586]
          - link "Up to 50% off | International brands See all offers" [ref=e587] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=21469514031&pd_rd_w=XNaCM&content-id=amzn1.sym.e8293512-95d0-4e80-a8b0-886b089cfb42&pf_rd_p=e8293512-95d0-4e80-a8b0-886b089cfb42&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_unk
            - img "Up to 50% off | International brands" [ref=e590]
            - generic [ref=e593]: See all offers
        - generic [ref=e595]:
          - heading "Up to 75% off | Curated products | Small Businesses" [level=2] [ref=e597]:
            - generic [ref=e599]: Up to 75% off | Curated products | Small Businesses
          - generic [ref=e601]:
            - group [ref=e604]:
              - group [ref=e608]:
                - list [ref=e609]:
                  - listitem [ref=e610]:
                    - link "SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office (Golden, Size:32x30inch)" [ref=e611] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                      - img "SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office (Golden, Size:32x30inch)" [ref=e613]
                  - listitem [ref=e614]:
                    - link [ref=e615] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                  - listitem [ref=e618]:
                    - link [ref=e619] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                  - listitem [ref=e622]:
                    - link [ref=e623] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                  - listitem [ref=e626]:
                    - link [ref=e627] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                  - listitem [ref=e630]:
                    - link [ref=e631] [cursor=pointer]:
                      - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
            - generic [ref=e634]:
              - link "SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office..." [ref=e635] [cursor=pointer]:
                - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=F9KCl&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMABE1
                - paragraph [ref=e636]:
                  - generic [ref=e638]: SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office...
              - 'generic "Deal Price: ₹2,337.00, M.R.P.: ₹7,999.00" [ref=e639]':
                - generic [ref=e640]:
                  - generic [ref=e641]: ₹2,337.00
                  - generic [ref=e642]:
                    - text: ₹
                    - generic [ref=e643]:
                      - text: 2,337
                      - generic [ref=e644]: .
                    - text: "00"
                - text: "M.R.P:"
                - generic [ref=e645]:
                  - generic [ref=e646]: ₹7,999.00
                  - text: ₹7,999.00
        - generic [ref=e648]:
          - heading "Min.35% off | Trending & must-haves | Small Businesses" [level=2] [ref=e650]:
            - generic [ref=e652]: Min.35% off | Trending & must-haves | Small Businesses
          - generic [ref=e654]:
            - group [ref=e657]:
              - group [ref=e661]:
                - list [ref=e662]:
                  - listitem [ref=e663]:
                    - link "AABCO Beautiful Owl Showpiece for Home & Office Decor | Owl Statue, Decorative Showpiece for Home & Office | Gift Item for Housewarming (Owl Golden)" [ref=e664] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                      - img "AABCO Beautiful Owl Showpiece for Home & Office Decor | Owl Statue, Decorative Showpiece for Home & Office | Gift Item for Housewarming (Owl Golden)" [ref=e666]
                  - listitem [ref=e667]:
                    - link [ref=e668] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                  - listitem [ref=e671]:
                    - link [ref=e672] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                  - listitem [ref=e675]:
                    - link [ref=e676] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                  - listitem [ref=e679]:
                    - link [ref=e680] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                  - listitem [ref=e683]:
                    - link [ref=e684] [cursor=pointer]:
                      - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
            - generic [ref=e687]:
              - link "AABCO Beautiful Owl Showpiece for Home & Office Decor | Owl Statue, Decorative Showpiece for Home & Office | Gift Item..." [ref=e688] [cursor=pointer]:
                - /url: /AABCO-Beautiful-Owl-Decorative-Housewarming/dp/B0FQNZPKFC/?_encoding=UTF8&pd_rd_w=F5xWz&content-id=amzn1.sym.029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_p=029fabc1-d93a-4d1b-bbcc-9d93b63ce699&pf_rd_r=4C9TFWK2QF6SG3NMT9YY&pd_rd_wg=09QgE&pd_rd_r=a1d26937-309c-47c3-8023-300c533e0dbb&ref_=pd_hp_d_btf_NAMBOTTLES
                - paragraph [ref=e689]:
                  - generic [ref=e691]: AABCO Beautiful Owl Showpiece for Home & Office Decor | Owl Statue, Decorative Showpiece for Home & Office | Gift Item...
              - 'generic "Price: ₹499.00, M.R.P.: ₹999.00" [ref=e692]':
                - generic [ref=e693]:
                  - generic [ref=e694]: ₹499.00
                  - generic [ref=e695]:
                    - text: ₹
                    - generic [ref=e696]:
                      - text: "499"
                      - generic [ref=e697]: .
                    - text: "00"
                - text: "M.R.P:"
                - generic [ref=e698]:
                  - generic [ref=e699]: ₹999.00
                  - text: ₹999.00
  - complementary "Your recently viewed items and featured recommendations"
  - generic [ref=e700]:
    - button "Back to top" [ref=e701] [cursor=pointer]:
      - generic [ref=e702]: Back to top
    - generic [ref=e703]:
      - generic [ref=e704]:
        - heading "Get to Know Us" [level=6] [ref=e705]
        - list [ref=e706]:
          - listitem [ref=e707]:
            - link "About Amazon" [ref=e708] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e709]:
            - link "Careers" [ref=e710] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=e711]:
            - link "Press Releases" [ref=e712] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e713]:
            - link "Amazon Science" [ref=e714] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=e716]:
        - heading "Connect with Us" [level=6] [ref=e717]
        - list [ref=e718]:
          - listitem [ref=e719]:
            - link "Facebook" [ref=e720] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=e721]:
            - link "Twitter" [ref=e722] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=e723]:
            - link "Instagram" [ref=e724] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=e726]:
        - heading "Make Money with Us" [level=6] [ref=e727]
        - list [ref=e728]:
          - listitem [ref=e729]:
            - link "Sell on Amazon" [ref=e730] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=e731]:
            - link "Sell under Amazon Accelerator" [ref=e732] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=e733]:
            - link "Protect and Build Your Brand" [ref=e734] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=e735]:
            - link "Amazon Global Selling" [ref=e736] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=e737]:
            - link "Supply to Amazon" [ref=e738] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=e739]:
            - link "Become an Affiliate" [ref=e740] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=e741]:
            - link "Fulfilment by Amazon" [ref=e742] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=e743]:
            - link "Advertise Your Products" [ref=e744] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=e745]:
            - link "Amazon Pay on Merchants" [ref=e746] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=e748]:
        - heading "Let Us Help You" [level=6] [ref=e749]
        - list [ref=e750]:
          - listitem [ref=e751]:
            - link "Your Account" [ref=e752] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=e753]:
            - link "Returns Centre" [ref=e754] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=e755]:
            - link "Recalls and Product Safety Alerts" [ref=e756] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=e757]:
            - link "100% Purchase Protection" [ref=e758] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=e759]:
            - link "Amazon App Download" [ref=e760] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=e761]:
            - link "Help" [ref=e762] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=e764]:
      - link "Amazon India Home" [ref=e767] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=e770]:
        - generic [ref=e771]:
          - link "Choose a language for shopping. Current selection is English." [ref=e772] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=e774]: English
          - button "Expand to Change Language or Country" [ref=e775] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=e776] [cursor=pointer]:
          - generic [ref=e778]: India
    - generic "More on Amazon" [ref=e779]:
      - generic "More on Amazon" [ref=e780]:
        - list [ref=e781]:
          - listitem [ref=e782]:
            - link "AbeBooks Books, art & collectibles" [ref=e783] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=e784]
              - generic [ref=e785]:
                - text: Books, art
                - text: "& collectibles"
          - listitem [ref=e786]
          - listitem [ref=e787]:
            - link "Amazon Web Services Scalable Cloud Computing Services" [ref=e788] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=e789]
              - generic [ref=e790]:
                - text: Scalable Cloud
                - text: Computing Services
          - listitem [ref=e791]
          - listitem [ref=e792]:
            - link "Audible Download Audio Books" [ref=e793] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=e794]
              - generic [ref=e795]:
                - text: Download
                - text: Audio Books
          - listitem [ref=e796]
          - listitem [ref=e797]:
            - link "IMDb Movies, TV & Celebrities" [ref=e798] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=e799]
              - generic [ref=e800]:
                - text: Movies, TV
                - text: "& Celebrities"
        - list [ref=e801]:
          - listitem [ref=e802]:
            - link "Shopbop Designer Fashion Brands" [ref=e803] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=e804]
              - generic [ref=e805]:
                - text: Designer
                - text: Fashion Brands
          - listitem [ref=e806]
          - listitem [ref=e807]:
            - link "Amazon Business Everything For Your Business" [ref=e808] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=e809]
              - generic [ref=e810]:
                - text: Everything For
                - text: Your Business
          - listitem [ref=e811]
          - listitem [ref=e812]:
            - link "Amazon Prime Music 100 million songs, ad-free Over 15 million podcast episodes" [ref=e813] [cursor=pointer]:
              - /url: /music/prime?ref=footer_apm
              - heading "Amazon Prime Music" [level=5] [ref=e814]
              - generic [ref=e815]:
                - text: 100 million songs, ad-free
                - text: Over 15 million podcast episodes
          - listitem [ref=e816]
          - listitem [ref=e817]
    - generic [ref=e818]:
      - list [ref=e819]:
        - listitem [ref=e820]:
          - link "Conditions of Use & Sale" [ref=e821] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=e822]:
          - link "Privacy Notice" [ref=e823] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=e824]:
          - link "Interest-Based Ads" [ref=e825] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=e826]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=e828]:
    - iframe [ref=f1e2]:
      - generic [active]:
        - img [ref=f2e1]
        - img [ref=f2e2]
        - img [ref=f2e3]
        - img [ref=f2e4]
        - img [ref=f2e5]
        - img [ref=f2e6]
        - img [ref=f2e7]
        - img [ref=f2e8]
        - img [ref=f2e9]
        - img [ref=f2e10]
        - img [ref=f2e11]
        - img [ref=f2e12]
        - img [ref=f2e13]
        - img [ref=f2e14]
        - img [ref=f2e15]
        - img [ref=f2e16]
        - img [ref=f2e17]
        - img [ref=f2e18]
        - img [ref=f2e19]
        - img [ref=f2e20]
        - img [ref=f2e21]
        - img [ref=f2e22]
        - img [ref=f2e23]
        - img [ref=f2e24]
        - img [ref=f2e25]
        - img [ref=f2e26]
        - img [ref=f2e27]
        - img [ref=f2e28]
        - img [ref=f2e29]
        - img [ref=f2e30]
        - img [ref=f2e31]
        - img [ref=f2e32]
        - img [ref=f2e33]
        - img [ref=f2e34]
        - img [ref=f2e35]
        - img [ref=f2e36]
        - img [ref=f2e37]
        - img [ref=f2e38]
```

# Test source

```ts
  1   | /**
  2   |  * helpers.js
  3   |  * Reusable utility functions for Amazon automation tests.
  4   |  * Centralises all page interactions to avoid code duplication.
  5   |  */
  6   | 
  7   | const { expect } = require('@playwright/test');
  8   | 
  9   | const BASE_URL = 'https://www.amazon.in';
  10  | 
  11  | /**
  12  |  * Navigate to Amazon and search for a product.
  13  |  * @param {import('@playwright/test').Page} page
  14  |  * @param {string} productName
  15  |  */
  16  | async function searchProduct(page, productName) {
  17  |   await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  18  | 
  19  |   // Dismiss any popup / sign-in overlay if present
  20  |   const dismissBtn = page.locator('#nav-global-location-popover-link');
  21  |   if (await dismissBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  22  |     await page.keyboard.press('Escape');
  23  |   }
  24  | 
  25  |   const searchBox = page.locator('#twotabsearchtextbox');
> 26  |   await searchBox.waitFor({ state: 'visible', timeout: 15000 });
      |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  27  |   await searchBox.fill(productName);
  28  |   await page.keyboard.press('Enter');
  29  | 
  30  |   // Wait for search results to load
  31  |   await page.waitForSelector('.s-main-slot .s-result-item', { timeout: 20000 });
  32  |   console.log(`\n🔍 Searched for: "${productName}"`);
  33  | }
  34  | 
  35  | /**
  36  |  * Click the first organic (non-sponsored) search result.
  37  |  * Returns the page/tab that contains the product — handles both same-tab
  38  |  * and new-tab navigation transparently.
  39  |  *
  40  |  * @param {import('@playwright/test').Page} page
  41  |  * @returns {Promise<import('@playwright/test').Page>} productPage
  42  |  */
  43  | async function clickFirstResult(page) {
  44  |   // Target the first result that is NOT a sponsored ad
  45  |   const resultSelector =
  46  |     '.s-main-slot [data-component-type="s-search-result"] h2 a.a-link-normal';
  47  | 
  48  |   await page.waitForSelector(resultSelector, { timeout: 20000 });
  49  | 
  50  |   const firstResult = page.locator(resultSelector).first();
  51  |   await firstResult.scrollIntoViewIfNeeded();
  52  | 
  53  |   // Listen for a potential new tab before clicking
  54  |   const [newPage] = await Promise.all([
  55  |     page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
  56  |     firstResult.click(),
  57  |   ]);
  58  | 
  59  |   let productPage = newPage ?? page;
  60  | 
  61  |   await productPage.waitForLoadState('domcontentloaded', { timeout: 20000 });
  62  |   console.log(`📄 Product page URL: ${productPage.url()}`);
  63  |   return productPage;
  64  | }
  65  | 
  66  | /**
  67  |  * Extract and log the product price from the product detail page.
  68  |  * Tries multiple selectors to handle different Amazon price layouts.
  69  |  *
  70  |  * @param {import('@playwright/test').Page} productPage
  71  |  * @param {string} productName
  72  |  * @returns {Promise<string>} price text
  73  |  */
  74  | async function extractPrice(productPage, productName) {
  75  |   const priceSelectors = [
  76  |     '.a-price .a-price-whole',       // Standard price
  77  |     '#priceblock_ourprice',           // Alternate layout
  78  |     '#priceblock_dealprice',          // Deal price
  79  |     '.apexPriceToPay .a-price-whole', // Apex price block
  80  |     '#corePrice_feature_div .a-price-whole',
  81  |   ];
  82  | 
  83  |   let price = null;
  84  | 
  85  |   for (const selector of priceSelectors) {
  86  |     try {
  87  |       const el = productPage.locator(selector).first();
  88  |       const visible = await el.isVisible({ timeout: 3000 });
  89  |       if (visible) {
  90  |         price = (await el.innerText()).trim().replace(/\n/g, '');
  91  |         break;
  92  |       }
  93  |     } catch {
  94  |       // Try next selector
  95  |     }
  96  |   }
  97  | 
  98  |   if (price) {
  99  |     console.log(`💰 ${productName} Price: ₹${price}`);
  100 |   } else {
  101 |     console.warn(`⚠️  Could not extract price for "${productName}". Page may require sign-in.`);
  102 |     price = 'N/A';
  103 |   }
  104 | 
  105 |   return price;
  106 | }
  107 | 
  108 | /**
  109 |  * Add the current product to the cart.
  110 |  * Handles the "Add to Cart" button and waits for confirmation.
  111 |  *
  112 |  * @param {import('@playwright/test').Page} productPage
  113 |  */
  114 | async function addToCart(productPage) {
  115 |   const addToCartBtn = productPage.locator('#add-to-cart-button');
  116 | 
  117 |   await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });
  118 |   await addToCartBtn.scrollIntoViewIfNeeded();
  119 |   await addToCartBtn.click();
  120 | 
  121 |   // Wait for cart confirmation — Amazon shows a success banner or redirects
  122 |   try {
  123 |     await productPage.waitForSelector(
  124 |       '#NATC_SMART_WAGON_CONF_MSG_SUCCESS, #attachDisplayAddBaseAlert, #sw-atc-confirmation',
  125 |       { timeout: 10000 }
  126 |     );
```