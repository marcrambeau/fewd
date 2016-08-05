# Basics

*GitHub* is a repository hosting, version control system; good for text files, not large graphics. "Commit" saves to repo; "Sync" pushes then pulls. Forking makes copy of an open-source repo. GPL 3 license requires you to allow open-source use; MIT license allows commercial use.

## Tags

Tags consist of three components: `<tag attribute="value">`. Most need end tag but some are self-closing. An *element* comprises entire element, including tag and content. `<code>` tells browser to display code, not to process as code. Important to be _semantically correct_ by using the correct tags for particular items.

* <ul> Unordered list (bullets)
* <ol> Ordered list (numbers)
* <li> List item
* <head> Nothing displays on page; provides meta information (page title, meta description, share icons)
* Content tags, links

## Images

Placed using `<img src="url” alt=”alt text”>`. Alt attribute must always be present because search engines crawl it, but can be blank when there’s no content to read (e.g. design element).

Absolute vs. relative linking:

* Absolute will always be valid when you move your html file around
* WordPress will automatically change relative to absolute
* Absolute path, relative to the current server you’re on `<img src="/images/logo.png”>`

File formats:

* JPEG: Designed for photos. Full color; lossy; lowest resolution. Good for patterns, details; bad for line art.
* GIF: Only 256 colors; limited transparency (on dualistic per-pixel basis); can animate
* PNG: Created to avoid GIF licensing issues. Can function just like gif, or unlimited colors with transparency. Lossless compression (bigger file than JPEG). Best when quality is paramount, transparency, or geometric art. Not yet universally supported in email.
* SVGP: Vector-based, can scale, no quality loss. Can be edited w/ text editor because it’s just XML. Great for utility icons, geometric stuff, logos. Drawbacks: Browser support (IE8 doesn’t work); performance limitations because they’re complex and computer has to calculate

## Hosting

*LAMP stack* = Linux, Apache, MySQL, PHP. MySQL is a database software; PHP is a programming language. Alternatives: WAMP (Windows), MAMP (Mac). Neither is common; should only use if you have aspecific reason. CMSes are based on these. PHP is most common language; demand is high. Ruby generally for app-like stuff.

## CSS

CSS deals with how things look, _not_ content. Syntax is `selector { property : value}`. The piece within curly brackets is called the *declaration*. Within a single selector, you can apply multiple property sets. Star (`*`) selects *everything* in CSS; use with care.

CSS can appear *inline*, directly in the tag, but this is messy and not recommended. Only do this if you're in a restrictive CMS or email with no other choice. Bad for branding consistency. It can also go in the *in the head*, which is not quite as bad, but is not consistent across a whole site. Best for performance and consistency is *in a separate file*. If you have multiples, the last one always takes precedence. (Separate ones are good for microsites within a specific brand.)

## Colors

* Keywords: `black` and `white` are the only recommended ones. Others will render differently across platforms.
* Hex codes: 0-9, A-F
* RGB: `RGB(0,0,0)` from 0-255. RGBa works the same, but takes fourth value called "alpha" which controls transparency. Value between 0-1 (transparent-solid), like a percentage.
* HSL: Similar to RGB, but using hue, saturation and lightness; also HSLa. Good for color pickers in interfaces.

## Tables

    <table>
    	<tr>
    		<td></td>
    	</tr>
    </table>

---

# Styling

## Interesting tags

* `<br>`: Never use; creates issues when browser window/screen is small. HTML isn't meant for visual representation; just structure.
* `<canvas>`: Effectively drawing with text within HTML (i.e. SVG files)
* `<abbr>`: To give the system a hint that something is an acronym
* `<address>`: Tells Google this is an address (for search results, etc.)

## Box model

Every single element on the page represents a box. Includes the body; always only rectangles; all boxes extend full width unless told otherwise. *Padding* and *margin* provide the spacing. All boxes can have *borders*, which have color, solidity and weight.

*Gradients* are most useful for buttons. There are online tools to generate gradient code.

## Document object model (DOM)

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. The DOM model is constructed as a tree of objects that branch based on your HTML.

## IDs, divs and classes

HTML5 has a number of structural elements built in: `<div>`, `<header>`, `<aside>`, `<section>`, `<article>`, `<footer>`. CSS `#ids` are unique; `.classes` are not. IDs are best for internal navigation and JavaScript. Use classes whenever possible in CSS; yu shouldn’t need to use IDs. HOWEVER: "Ivory tower" perfect approach says use tagged IDs as much as possible.

*Front-end architecture*: Front-end architects are sometimes your senior front-end devs; have to have some design sense

## Layout and floats

The *document flow* runs top to bottom, left to right, just like reading. Using *floats* takes something out of the document flow and pushes it to the left or right. Taking it out of the document flow means it has no heigh impact on the flow, though, so it might not move where you expect.

Dimensions:

* Pixels (px)
* Percentage (%)
* Em (em): Relative to the font size (m-width) of the parent. Can get painful to use because it’s relative and things move around.
* Inches (in), centimeters (cm), picas: For CSS strictly for print (like print previews).
* Rem (rem): Relative to the body font size. Awesome, but not properly supported yet.

*Resets*: Browsers come with default CSS built-in for things like h1s, but they differ completely between browsers. Resets are giant CSS files that you drop in ahead of your own CSS to forcibly set everything; they increase consistency and reduce bugs across browsers. There are theoretical minor adverse effects, but they’re very rare in practice. Reset removes it all; Normalize sets everything to one common style.

* [Reset](http://meyerweb.com/eric/tools/css/reset/reset.css)
* [Normalize](https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css)

*CSS fonts* are links in your style sheets that make that font available for use. Always paste the links to your fonts ahead of your stylesheet, because your stylesheet needs them. Google Fonts and TypeKit are the main options; Google Fonts are best because they never ask for money. TypeKit is for clients who are insistent on a particular font.

* [Google Fonts](https://www.google.com/fonts)
* [Font Awesome](https://fortawesome.github.io/Font-Awesome/) is a good utility for vector icons.

---

# Layout

The *clear* property is important for controlling the behavior of floats. Can use `clear`, `clear both`, or preferably [clearfix](https://css-tricks.com/snippets/css/clear-fix/) at the top of your doc. _Pseudo-selectors_ can go on anything (elements or classes), e.g. a:hover, .logo:hover. In CSS, `section.mainContent` (without the space) allows you to directly select a specific section when you have multiples without different names

---

# JavaScript

Some sample functions: `.preventDefault`, `.click`, `.slideToggle()`, `.hide()`, `.show()`, `.slideUp()`, `.slideDown()`, `.children()`, `.attr()`, `.fadeIn()`, `.fadeOut()`. Variable `var` is a bucket that allows you to collect/list data in order to reuse it later. Some primitive data types:

* String: anything between single or double quotes
* Null: assigned a value of "no value"
* Undefined: variable has been declared, but not assigned a value
* Boolean: true or false
* Number: integers, floats
* Datetime: date and/or time

In JavaScript,an *integer* is a whole number and can be negative, while a *float* is a decimal. JS is reusable, so instead of having to write `$(‘#player’)` everywhere, we can write `player`. *Variables* start with a lowercase letter. If they contain multiple words, subsequent words start with an uppercase letter (camelcase): `var numberOfStudents = 10;`. Data types can be converted with JS:

    var intString = "4";
    var intNumber = parseInt(intString);

Comparison operators:

* Equal `==` returns true if the operators are equal
* Strict `===` is true if operators are equal AND of the same type
* Not equal `!==`
* Strict not equal `!===`
* Greater than `>`, greater than or equal to `>=`, less than `<`, less than or equal to `<=`

True -> 4 == "4"
False -> 4 === "4" (because the data types are different)

Conditionals:

    if(condition is true) {
    	//Do cool stuff

    var topic = "JS";
    if(topic == “JS”) {
    	console.log(“You’re learning JavaScript”);
    } else if(topic == “JavaScript”) {
    	console.log(“You’re still learning JavaScript”);
    } else {
    console.log(“You’re learning something else”);}

Logical operators:

* Logical AND `&&`
    + `expr1 && expr2` returns expr1 if it can be converted to false
* Logical OR `||`
* Logical NOT `!`

Function syntax:

    function functionName(arg1, arg2) {
    	//Body of function

## Arrays

    var myEmptyArray = [];
    var daysThisYear = 366;
    var myNewArray = [3,255,12,daysThisYear];

Finding array positions: `myNewArray[1]` is the _second_ position, because Arrays start with zero! `myNewArray.length` will give you the total number of variables inside the array.

*Loops*: `for(var q=0; q<myNewArray.lenght;q++){myNewArray[q] +=22;]}` means "for variable q, which we set as zero, as long as q is less than the length of my array, add 1 iteratively, then add 22". `NaN` = Not a Number

---

# JSON

Stands for _JavaScript Object Notation_. Objects are always wrapped in curly brackets, like `{'color':'blue'}`. Objects can contain other objects, arrays, etc. They're good for storing data and bringing it back. You can use [JSON Viewer](http://jsonviewer.stack.hu/) to display your objects. Example:

    var productData = {
        'NikonCamera':
        {
            'features':['digital','full frame','20 megapixel'],
            'name':'D700 DSLR'
        },
        'CanonCamera':
        {
            'features':['digital','full frame']
            'name':'EOS 1D DSLR'
        }
    }

    jQuery.each(productData,function(index,value){

        for(f=0;f<value.features.length;f++){
            console.log('Product':'+index+' - '+value.features[f]);
        }

        });

---

# Security and SSL certificates

* Should always use a legitimate SSL cert
* Remember that <https://marcrambeau.com> and <https://www.marcrambeau.com> are two different domains and you'll have to get separate certs for each

---

# Responsive design

## Layouts

* Responsive: Specifically means media queries are involved.
* Liquid: Means items flow together.
* Em: Sized based on the width of the letter m. 1em = 100% font-size. They are relative to their immediate parent.
* Rem: "Root" em is the same as em, but relative to the root html tag itself. Can scale everything together. However, not always supported.

## Grid systems

* Usually base 12, sometimes 16 or 24
* Operate using classes, e.g. `<div class="grid_2">` is two grids wide. Your HTML should also refer to their CSS file.
* Each row *must* add up to 12; skips count toward the total
* Make sure you read the manual and you'll be fine


---

# Final project

## Option 1: Marc Rambeau portfolio/business site

## Option 2: Paul N. Rambeau, CPA business site

* About/story
* Clients
* What we do
* Contact

Fonts:

* Pridi
* Lora
* Droid Serif
* Merriweather
* Bitter
* Maitree
* Rasa
* Yrsa

## Option 3: If the U.S. had proportional representation

* Proportional representation in the House
    + Existing district system
    + National proportional vote
    + State-by-state proportional vote
    + FairVote's STV proposal
    + Region- or state-based MMP
* Popular vote decides presidential election
* Ranked choice vote for president
* CitySDK - by Census, on Git
* *Definitely use*: grid system, ems, responsive layout, form, Bootstrap

## Option 4: Electoral system proposal for DC

Cubed root rule = 2010, 85 members

* STV+
    + Half (40) elected from wards via STV; each ward returns 3, 5, or 7 members? (average of 5)
    + Half at large via proportional representation by open list ballot
* MMP (78 members)
    + 39 elected via AV in 39 single-member Commission Districts
    + 39 elected via open lists in 8 Wards (3, 4 or 5 each)
* MMP (84 members)
    + 42 elected via AV in 42 single-member Commission Districts
    + 42 elected via open lists in 8 Wards (4, 5 or 6 each)

Domains

    countevery.vote
    newcolumbia.vote
    proportional.voting
    faircongr.us
    fixthe.capital
    freethe.capital
    representation.bingo
    election.bingo

    Count Every Vote
    Proportional Voting
    FairCongr.us
    Fix the Capital
    Free the Capital
    Representation Bingo
    Election Bingo

    countevery.vote
    proportional.vote
    fairusa.vote
    potomac.vote
    newcolumbia.vote
    proportional.voting
    chooseproportional.voting
    fairchoice.voting
    stateofpotomac.voting
    fairdc.voting
    voting.guru
    proportionalvote.guru
    makeusmulti.party
    usamulti.party
    bettercongr.us
    faircongr.us
    proportionalcongr.us
    multipartycongr.us
    mycongr.us
    fixthe.capital
    freethe.capital
    voting.bingo
    fairvote.bingo
    representation.bingo
    proportional.bingo
    election.bingo
    elections.bingo
    electoral.bingo

Resources

* [FEC election data](http://www.fec.gov/pubrec/electionresults.shtml)
* [Evernote](https://evernote.com/?var=c)
* [Matt Storus portfolio](http://mattstorus.github.io/)
* [Matt Fischer portfolio](http://hyperfisch.co/index.html)
* [Chakras](http://rtroyer.github.io/FEWD40/final-project/index.html)
* [Alpen Creative](http://www.alpencreative.com/index.html)
* [Coffee Trike](http://www.thecoffeetrike.com/#contact)
* [Seattle Caviar](http://caviar.com)
* [Hopscratch](https://www.hopscratch.com)
* [The Iron Yard](https://www.theironyard.com/)

* [US Maps Side-by-side](https://vida.io/gists/JrG2Luv6pfJWyRvbw)
* [US States Map](http://bl.ocks.org/NPashaP/a74faf20b492ad377312)
* [South African elections](http://elections.adrianfrith.com/#year=2009&ballot=nat&level=prov&colours=winner&zoom=6&lat=-28.82&lon=24.76)
* [Refugee data visualizer](https://refugee-data-viz.herokuapp.com/)
* [Parliament seats pie chart](http://www.electoral-reform.org.uk/make-seats-match-votes)
* [DC election results](https://www.dcboee.org/election_info/election_results/)

---

# Forms and frameworks

## Forms

Basic structure

    <form action="destination" method="get or post">
        <!--Put form info here--!>
        <input type="submit">
    </form>

Attributes: *Action* tells browser where to send the form data. Can be an absolute path, e.g. `<form action="http://putsomethinghere.com/post.php">` or relative path`<form action="server/post.php">` "Get" is the default *method*. Turns everything into query string parameters and staples them onto the end of the URL, e.g. <https://www.redit.com/search?q=dogs>. Useful for sending data in the URL, but it's publicly visible, so you can't always use it. To hide the data, use the *post* method.

    <form>
        <p>What city would you like to go to?</p>
        <select name="cities">
            <option value="hk">Hong Kong</option>
            <option value="sf">San Francisco</option>
        </select>
    </form>

## Bootstrap

*Frameworks* are prefabricated code that you can reuse. *Boostrap* is one that was invented for Twitter. They provide:

* Column grid that's also responsive
* Prefabricated text styles, widgets, tabs
* You can download or use CDN version
* Bootstrap has a reset built-in
* File order: jQuery, other JavaScript, Bootstrap, your CSS

## Grid system

* Order must go container (only ever need one), row, column
* *Always row-column-row-column-row-column*. Margins won't work if you don't keep this tick-tock approach.
* Container goes to a max width of 1170; container-fluid always fills screen
* Classes are column-size-number
* Size classes: At medium sizes, go bigger; at small sizes, go smaller
* Also have show and hide classes (ex. you can use two separate navs for desktop and mobile)

Example:

    <div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">COLUMNx3</div>
        <div class="col-md-3 col-sm-6">COLUMNx3</div>
        <div class="col-md-3 col-sm-6">COLUMNx3</div>
        <div class="col-md-3 col-sm-6">COLUMNx3</div>
    </div>

Offsets work in a similar fashion: `<div class="offset-md-2 col-md-8 offset-md-2">Eight wide with two on each side</div>`

---

# Jekyll and jQuery plugins

## Jekyll

* Jekyll is a templating agent, that allows you to build your page piece-by-piece
* Install Ruby 2.1.8 (though most Macs come with it). Be careful because it's touchy about version number. Middle versions, the long-term stable versions are ideal. Macs come with 2.0 and it's already higher than that.
* Install Jekyll (have to do this through command line, using sudo command)
* These instructions are all in the FEWD repo and slides

    `jekyll new MyDemoSite --force`

Jekyll components:

* Layouts: Your templates. Stapling these pieces together via Jekyll is much faster because the files are sitting right there on the server.
* Includes: All the pieces. Ex. `{% include header.html %}` will pull `_includes/header.html` takes your header html file and drops it into wherever you say that
* Sass: All your CSS, plus some extra fun functionality
* Config: Includes domain 

If you have a file called page.html, in another one, you can say:

    <title>{% include page.title %}</title>

This

Content pages

* Just content, no code. No head, etc.
* Can be written in HTML, Markdown, YAML

## jQuery plugins

List: https://www.npmjs.com/browse/keyword/jquery-plugin

Reading:

* [](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))
* []()
* []()
* []()

---

# Links

* GA discounts: back2school-dc
* [Class slides](http://fewd.kasigi.com/FEWD-DC-24/)
* [BuiltWith](http://builtwith.com/): Tells you technology trends, which technologies sites are built with
* [Absolute vs. relative URLs](https://moz.com/blog/relative-vs-absolute-urls-whiteboard-friday)
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference): Reference of all CSS properties
* [Can I Use](http://caniuse.com/): Check browser support for CSS properties
* [Litmus](https://litmus.com/): Renders emails in every client for testing
* [Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)
* [HTML Video Library](http://html5videolibrary.com/pending.php)
* [Reset](http://meyerweb.com/eric/tools/css/reset/reset.css) & [Normalize](https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css): Resets built-in browser CSS to a common starting point
* [Google Fonts](https://www.google.com/fonts) & [Font Awesome](https://fortawesome.github.io/Font-Awesome/): CSS fonts and vector icons
* [Package Control](https://packagecontrol.io/): Sublime Text addons
* [Sublime Text Tips & Tricks](https://generalassemb.ly/blog/sublime-text-3-tips-tricks-shortcuts/)
* [HTML entities](http://www.w3schools.com/html/html_entities.asp) (&, ©, etc)
* Dummy text generators: [Samuel L. Ipsum](http://slipsum.com/), [Bacon Ipsum](http://baconipsum.com/), [Hipsum](http://hipsum.co/), [Multi-Language Lorem Ipsum ](http://generator.lorem-ipsum.info/)
* [jQuery Reference](https://oscarotero.com/jquery/)
* [Google CDN for jQuery](https://developers.google.com/speed/libraries/#libraries)
* [JSON Viewer](http://jsonviewer.stack.hu/)
* [Isotope](http://isotope.metafizzy.co): jQuery library for responsive, grid-based layouts with cool animations
* [Namecheap](https://www.namecheap.com/security/ssl-certificates.aspx): SSL cert options
* [960 Grid System](http://960.gs/)
* [TypeTester](https://www.typetester.org/)
* [Bootstrap](https://getbootstrap.com)
* [jQuery Plugins](https://www.npmjs.com/browse/keyword/jquery-pluginœ)
