function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
function Hover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.add("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.add("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.add("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.add("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.add("SVGAnimation")
    }
}
function Unhover()
{
    switch(event.target.id)
    {
        case 'Home':
            document.getElementById("HomeLogo").classList.remove("SVGAnimation")
            break
        case 'Analytics':
            document.getElementById("AnalyticsLogo").classList.remove("SVGAnimation")
            break
        case 'Users':
            document.getElementById("UsersLogo").classList.remove("SVGAnimation")
            break
        case 'UserProfile':
            document.getElementById("UserProfileLogo").classList.remove("SVGAnimation")
            break
        case 'Account':
            document.getElementById("AccountLogo").classList.remove("SVGAnimation")
    }
}
function IntoTheDarkness()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.add("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.add("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.add("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.add("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.add("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.add("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.add("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.add("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.add("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.add("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.add("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.add("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.add("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.add("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.add("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.add("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.add("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.add("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.add("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.add("MobileButtonUndoLogoDark")
}
function IntoTheLight()
{
    document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperDark")
    for(let i = 0;i < document.getElementsByClassName("NavigationTabLogo").length;i++)
    {
        document.getElementsByClassName("NavigationTabLogo")[i].classList.remove("NavigationTabLogoDark")
    }
    for(let i = 0;i < document.getElementsByClassName("NavigationTab").length;i++)
    {
        document.getElementsByClassName("NavigationTab")[i].classList.remove("NavigationTabDark")
    }
    document.getElementsByClassName("ModeWrapper")[0].classList.remove("ModeWrapperDark")
    document.getElementById("ModeSwapper").classList.remove("ModeSwapIntoTheDarkness")
    document.getElementById("ModeSwapper").classList.add("ModeSwapIntoTheLight")
    document.getElementsByClassName("LightModeLogo")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("LightMode")[0].classList.remove("DarkModeActive")
    document.getElementsByClassName("DarkModeLogo")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("DarkMode")[0].classList.remove("LightModeActive")
    document.getElementsByClassName("PageTitle")[0].classList.remove("PageTitleDark")
    document.getElementsByClassName("MAIN")[0].classList.remove("MAINDark")
    document.getElementsByClassName("ContentBox")[0].classList.remove("MAINDark")
    document.getElementsByClassName("SearchBar")[0].classList.remove("SearchBarDark")
    document.getElementsByClassName("SearchBarLogo")[0].classList.remove("SearchBarLogoDark")
    document.getElementsByClassName("SearchBarText")[0].classList.remove("SearchBarTextDark")
    document.getElementsByClassName("OptionalMenu")[0].classList.remove("OptionalMenuDark")
    document.getElementsByClassName("OptionalMenuButton")[0].classList.remove("OptionalMenuButtonDark")
    for(let i =0;i<document.getElementsByClassName("TableHeaders").length;i++)
    {
        document.getElementsByClassName("TableHeaders")[i].classList.remove("TableHeadersDark")
    }
    for(let i =0;i<document.getElementsByClassName("TableData").length;i++)
    {
        document.getElementsByClassName("TableData")[i].classList.remove("TableDataDark")
    }
    document.getElementsByClassName("TableWrapper")[0].classList.remove("TableWrapperDark")
    document.getElementsByClassName("Logo")[0].classList.remove("LogoDark")
    document.getElementsByClassName("MobileButtonLogo")[0].classList.remove("MobileButtonLogoDark")
    document.getElementsByClassName("MobileButtonUndoLogo")[0].classList.remove("MobileButtonUndoLogoDark")
}
function TableSearch() {
    let phrase = document.getElementsByClassName("SearchBarText")[0];
    let table = document.getElementsByClassName("UsersTable")[0];
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


document.getElementsByClassName("MobileButton")[0].addEventListener('touchstart', (e) => ShowNavWrapper())
{
    function ShowNavWrapper()
    {
        document.getElementsByClassName("NavigationWrapper")[0].classList.add("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.add("MobileButtonMove")
        document.getElementsByClassName("MobileButtonUndo")[0].classList.add("MobileButtonUndoShow")
    }
}
document.getElementsByClassName("MobileButtonUndo")[0].addEventListener('touchstart', (e) => HideNavWrapper())
{
    function HideNavWrapper()
    {
        document.getElementsByClassName("MobileButtonUndo")[0].classList.remove("MobileButtonUndoShow")
        document.getElementsByClassName("NavigationWrapper")[0].classList.remove("NavigationWrapperShow")
        document.getElementsByClassName("MobileButton")[0].classList.remove("MobileButtonMove")
    }
}
