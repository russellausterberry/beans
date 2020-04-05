<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Beans" FOLDED="false" ID="ID_777862545" CREATED="1586064932228" MODIFIED="1586065527819" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="10" RULE="ON_BRANCH_CREATION"/>
<hook NAME="accessories/plugins/AutomaticLayout.properties" VALUE="ALL"/>
<node TEXT="features" POSITION="left" ID="ID_1081850484" CREATED="1586065116330" MODIFIED="1586065122721">
<edge COLOR="#007c7c"/>
<node TEXT="availability component" ID="ID_764407649" CREATED="1586065387236" MODIFIED="1586065405094">
<node TEXT="import from suppliers" ID="ID_1440313454" CREATED="1586065128050" MODIFIED="1586065135914">
<node TEXT="load raw csv" ID="ID_1173569784" CREATED="1586065679860" MODIFIED="1586065948891"/>
<node TEXT="extract relevant fields" ID="ID_698646512" CREATED="1586065949253" MODIFIED="1586065967809"/>
<node TEXT="skip irrelevant items" ID="ID_863209787" CREATED="1586065968278" MODIFIED="1586065986240"/>
<node TEXT="split each item into variant &amp; availability details" ID="ID_738885351" CREATED="1586065986703" MODIFIED="1586066051914"/>
<node TEXT="add taxonomy and packing categories" ID="ID_1756574336" CREATED="1586066052883" MODIFIED="1586066072803"/>
<node TEXT="enable compare &amp; cull" ID="ID_671424814" CREATED="1586066077347" MODIFIED="1586066103594"/>
</node>
<node TEXT="persist data" ID="ID_51861889" CREATED="1586065632954" MODIFIED="1586066231405">
<node TEXT="in browser (PouchDB)" ID="ID_1471907905" CREATED="1586066231412" MODIFIED="1586066246425"/>
<node TEXT="sync to server (CouchDB)" ID="ID_831100596" CREATED="1586066247083" MODIFIED="1586066260090"/>
</node>
</node>
<node TEXT="admin functionality component" ID="ID_673045194" CREATED="1586065407773" MODIFIED="1586065414788">
<node TEXT="order cycle management" ID="ID_199388386" CREATED="1586065160617" MODIFIED="1586065174612"/>
<node TEXT="setup wizard" ID="ID_1754627866" CREATED="1586065175297" MODIFIED="1586065201004"/>
<node TEXT="supplier ordering report" ID="ID_545566093" CREATED="1586065307497" MODIFIED="1586065339376"/>
</node>
<node TEXT="ordering &amp; accounts component" ID="ID_1883726710" CREATED="1586065415349" MODIFIED="1586065422297">
<node TEXT="member management" ID="ID_365721936" CREATED="1586065154177" MODIFIED="1586065160308"/>
<node TEXT="member invoice &amp; payment history" ID="ID_440675704" CREATED="1586065250777" MODIFIED="1586065293319"/>
<node TEXT="shopping cart" ID="ID_1710120665" CREATED="1586065137177" MODIFIED="1586065153775"/>
</node>
<node TEXT="notifcations &amp; reports component" ID="ID_479636658" CREATED="1586065422981" MODIFIED="1586065432578">
<node TEXT="member notifications" ID="ID_533201276" CREATED="1586065354288" MODIFIED="1586065360283"/>
</node>
<node TEXT="whole app" ID="ID_1157500154" CREATED="1586066276565" MODIFIED="1586066352419">
<node TEXT="mobile first" ID="ID_428464215" CREATED="1586066285852" MODIFIED="1586066306399"/>
<node TEXT="local storage" ID="ID_1464387565" CREATED="1586066307054" MODIFIED="1586066319699"/>
<node TEXT="remote sync" ID="ID_620518851" CREATED="1586066323819" MODIFIED="1586066327035"/>
</node>
</node>
</node>
</map>
