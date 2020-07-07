README for bookmarks cleaner

TODO:
* Tests
* Upgrade packages
* proper HTML escaping

Features:
* Read bookmarks.html from Safari, Firefox and Chrome
* Write valid bookmarks.html that imports into Safari, Firefox or Chrome
* Preserves all attributes of links and folders
* Merges multiple files
* Remove duplicate links
 - Prioritize by level
 - Folder name (Favorites >> "Other..." >> "Imported...")
* Remove empty folders
* Strip folders that say "Imported..."
* Strip speical "place:" folders
* Optionally:
    * Flatten folders
    * Merge folders with same name (only if in same parent folder, or regardless of parent folder)


Netscape booksmarks.html file format description: 
https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa753582(v=vs.85)?redirectedfrom=MSDN

Example Safari exported bookmarks.html structure:

<!DOCTYPE NETSCAPE-Bookmark-file-1>
	<HTML>
	<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
	<Title>Bookmarks</Title>
	<H1>Bookmarks</H1>
	<DT><H3 FOLDED>Favorites</H3>
	<DL><p>
		<DT><A HREF="https://rcm.tuffmail.net/rc/?_task=mail&_mbox=INBOX">Tuffmail RCM</A>
		<DT><A HREF="https://mail.google.com/mail/u/0/#inbox">gmail.com</A>
	</DL><p>
	<DT><H3 FOLDED>Bookmarks Menu</H3>
	<DL><p>
		<DT><H3 FOLDED>Categorized</H3>
		<DL><p>
			<DT><H3 FOLDED>Household</H3>
			<DL><p>
				<DT><A HREF="http://www.ebags.com/bosca/nappa_vitello_money_clip_w_outside_pocket/product_detail/index.cfm?modelid=67404">Bosca Nappa Vitello Money Clip wOutside Pocket  Mens Wallets  Mens Wal (...)</A>
				<DT><A HREF="http://www.countycomm.com/index.html">CountyComm - Home Page</A>
			</DL><p>
		</DL><p>
		<DT><H3 FOLDED>Unsorted</H3>
		<DL><p>
			<DT><A HREF="http://www.doostang.com/">Doostang</A>
			<DT><A HREF="http://www.creativyst.com/Doc/Articles/CSV/CSV01.htm">CSV Comma Separated Value File Format - How To ...</A>
		</DL><p>
	</DL><p>
	<DT><H3 FOLDED id="com.apple.ReadingList">Reading List</H3>
	<DL><p>
	</DL><p>
</HTML>

Example Firefox exported bookmarks.html structure:

<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks Menu</H1>

<DL><p>
    <DT><A HREF="place:sort=8&maxResults=10" ADD_DATE="1510801108" LAST_MODIFIED="1574192514">Most Visited</A>
    <DT><A HREF="place:type=6&sort=14&maxResults=10" ADD_DATE="1489105229" LAST_MODIFIED="1574192514">Recent Tags</A>
    <HR>    <DT><A HREF="https://august.com/" ADD_DATE="1594073080" LAST_MODIFIED="1594073323" ICON_URI="https://cdn.shopify.com/s/files/1/1354/7835/files/favicon_32x32.png?v=1510761856" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4jY2SPUsDQRCG7wcEFXZ2Nztzl0timhitRGwt/AkiqLVgaadY2VnZWKS38RMUq4igrb1NsLXwHwRTePtaXMjnJefCFAvzPPvu7AZBxoKIgtABhK7B5gWs7+DsIaKIs/oHYK02B6Yrzwr9cnqk4EwLi9ZMwqFdgVB3BM4Q9EVsdwdwRAyhnwk4KwHrT7D+BpsOYldPBaweMuEhAVh/9YEgCNDQBYShBIhdfSo8LIhjlx6mj+BMC6yPexPXJ3kCsG6jXF4Am+YgkemgoQsBhG7+k6AnuoUzewiLG6hW59MEztxPm7R3GgkreKEuKi7Ofns2p3mChNXF9M/j3GquQKg5+weyec1JAIR2fYQRvY2IdtJNqbiUJ/Csfr3QWyLq0ov6SFgBoreGUtjNWYLxQkj7k1epuBhs3mcJPFMbpWJj9kwiuwy2Z2Dz6Fk9e6GnROgckVob7/0DVFB+rv3uU9UAAAAASUVORK5CYII=" SHORTCUTURL="my super keyword" TAGS="mysupertag">August Home | Your Smart Home Starts at the Front Door</A>
    <DT><H3 ADD_DATE="1510801108" LAST_MODIFIED="1594073460" PERSONAL_TOOLBAR_FOLDER="true">Bookmarks Toolbar</H3>
    <DL><p>
        <DT><A HREF="place:sort=8&maxResults=10" ADD_DATE="1489105229" LAST_MODIFIED="1576198873">Most Visited</A>
        <DT><A HREF="https://app.getpocket.com/" ADD_DATE="1594073301" LAST_MODIFIED="1594073326">Pocket</A>
        <DT><H3 ADD_DATE="1594073436" LAST_MODIFIED="1594073460">subtool</H3>
        <DL><p>
            <DT><H3 ADD_DATE="1594073447" LAST_MODIFIED="1594073460">schneek</H3>
            <DL><p>
                <DT><A HREF="https://www.reddit.com/r/ketoscience/comments/hgwq3d/what_does_any_of_this_mean/?utm_source=share&utm_medium=ios_app&utm_name=iossmf" ADD_DATE="1594073307" LAST_MODIFIED="1594073460" ICON_URI="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAqv0lEQVR42u2dd3gc1bnwf2d2V92SLcm4gnEvGGwMuGLjIovmS0u5tJCQcr9Ako+QD1JvCGk8uUASCIEPEhICCYQECAGMMS5gbHDBBTfcuy03FVtd2+bcP95ZS1oVq+zuzErze555tJJ2Z8/MnPec95y3KVxaRN8CVAEBQFuHBwhioPCh8AI+NF4gHUU/YBBwHor+aPKBPCAXTS6KdCDLOosPSLe+FT5NvWS3XfSufwvi6SVPVAAycMAAAAASUVORK5CYII=">What Does Any of this Mean? : ketoscience</A>
            </DL><p>
            <DT><A HREF="https://www.bbc.com/news/business-53303364" ADD_DATE="1594073414" LAST_MODIFIED="1594073455" ICON_URI="https://static.bbc.co.uk/news/1.316.03603/apple-touch-icon.png">Coronavirus: Fujitsu announces permanent work-from-home plan - BBC News</A>
        </DL><p>
    </DL><p>
    <DT><H3 ADD_DATE="1510801108" LAST_MODIFIED="1594073455" UNFILED_BOOKMARKS_FOLDER="true">Other Bookmarks</H3>
    <DL><p>
        <DT><A HREF="https://august.com/13547835/checkouts/fd5e0d97572b60695192697c866191af" ADD_DATE="1594073360" LAST_MODIFIED="1594073360">Information - August Home - Checkout</A>
        <DT><H3 ADD_DATE="1594073393" LAST_MODIFIED="1594073409">subfolder1</H3>
        <DL><p>
            <DT><A HREF="https://asia.nikkei.com/Business/Companies/PlayStation-s-secret-weapon-a-nearly-all-automated-factory" ADD_DATE="1594073389" LAST_MODIFIED="1594073393" ICON_URI="https://asia.nikkei.com/apple-touch-icon.png?d530">PlayStation&#39;s secret weapon: a nearly all-automated factory - Nikkei Asian Review</A>
            <DT><H3 ADD_DATE="1594073409" LAST_MODIFIED="1594073411">sub2</H3>
            <DL><p>
                <DT><A HREF="http://www.goodmath.org/blog/2020/07/06/abusing-linear-regression-to-make-a-point/" ADD_DATE="1594073402" LAST_MODIFIED="1594073409">Abusing Linear Regression to Make a Point | Good Math/Bad Math</A>
            </DL><p>
        </DL><p>
    </DL><p>
</DL>

