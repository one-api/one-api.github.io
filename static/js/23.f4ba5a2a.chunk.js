(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[23],{209:function(e,t,n){!function(e){"use strict";e.defineSimpleMode("nsis",{start:[{regex:/(?:[+-]?)(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\d+.?\d*)/,token:"number"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/`(?:[^\\`]|\\.)*`?/,token:"string"},{regex:/^\s*(?:\!(include|addincludedir|addplugindir|appendfile|cd|delfile|echo|error|execute|packhdr|pragma|finalize|getdllversion|gettlbversion|system|tempfile|warning|verbose|define|undef|insertmacro|macro|macroend|makensis|searchparse|searchreplace))\b/,token:"keyword"},{regex:/^\s*(?:\!(if(?:n?def)?|ifmacron?def|macro))\b/,token:"keyword",indent:!0},{regex:/^\s*(?:\!(else|endif|macroend))\b/,token:"keyword",dedent:!0},{regex:/^\s*(?:Abort|AddBrandingImage|AddSize|AllowRootDirInstall|AllowSkipFiles|AutoCloseWindow|BGFont|BGGradient|BrandingText|BringToFront|Call|CallInstDLL|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|CreateDirectory|CreateFont|CreateShortCut|Delete|DeleteINISec|DeleteINIStr|DeleteRegKey|DeleteRegValue|DetailPrint|DetailsButtonText|DirText|DirVar|DirVerify|EnableWindow|EnumRegKey|EnumRegValue|Exch|Exec|ExecShell|ExecShellWait|ExecWait|ExpandEnvStrings|File|FileBufSize|FileClose|FileErrorText|FileOpen|FileRead|FileReadByte|FileReadUTF16LE|FileReadWord|FileWriteUTF16LE|FileSeek|FileWrite|FileWriteByte|FileWriteWord|FindClose|FindFirst|FindNext|FindWindow|FlushINI|GetCurInstType|GetCurrentAddress|GetDlgItem|GetDLLVersion|GetDLLVersionLocal|GetErrorLevel|GetFileTime|GetFileTimeLocal|GetFullPathName|GetFunctionAddress|GetInstDirError|GetKnownFolderPath|GetLabelAddress|GetTempFileName|Goto|HideWindow|Icon|IfAbort|IfErrors|IfFileExists|IfRebootFlag|IfRtlLanguage|IfShellVarContextAll|IfSilent|InitPluginsDir|InstallButtonText|InstallColors|InstallDir|InstallDirRegKey|InstProgressFlags|InstType|InstTypeGetText|InstTypeSetText|Int64Cmp|Int64CmpU|Int64Fmt|IntCmp|IntCmpU|IntFmt|IntOp|IntPtrCmp|IntPtrCmpU|IntPtrOp|IsWindow|LangString|LicenseBkColor|LicenseData|LicenseForceSelection|LicenseLangString|LicenseText|LoadAndSetImage|LoadLanguageFile|LockWindow|LogSet|LogText|ManifestDPIAware|ManifestLongPathAware|ManifestMaxVersionTested|ManifestSupportedOS|MessageBox|MiscButtonText|Name|Nop|OutFile|Page|PageCallbacks|PEAddResource|PEDllCharacteristics|PERemoveResource|PESubsysVer|Pop|Push|Quit|ReadEnvStr|ReadINIStr|ReadRegDWORD|ReadRegStr|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|SectionGetFlags|SectionGetInstTypes|SectionGetSize|SectionGetText|SectionIn|SectionSetFlags|SectionSetInstTypes|SectionSetSize|SectionSetText|SendMessage|SetAutoClose|SetBrandingImage|SetCompress|SetCompressor|SetCompressorDictSize|SetCtlColors|SetCurInstType|SetDatablockOptimize|SetDateSave|SetDetailsPrint|SetDetailsView|SetErrorLevel|SetErrors|SetFileAttributes|SetFont|SetOutPath|SetOverwrite|SetRebootFlag|SetRegView|SetShellVarContext|SetSilent|ShowInstDetails|ShowUninstDetails|ShowWindow|SilentInstall|SilentUnInstall|Sleep|SpaceTexts|StrCmp|StrCmpS|StrCpy|StrLen|SubCaption|Unicode|UninstallButtonText|UninstallCaption|UninstallIcon|UninstallSubCaption|UninstallText|UninstPage|UnRegDLL|Var|VIAddVersionKey|VIFileVersion|VIProductVersion|WindowIcon|WriteINIStr|WriteRegBin|WriteRegDWORD|WriteRegExpandStr|WriteRegMultiStr|WriteRegNone|WriteRegStr|WriteUninstaller|XPStyle)\b/,token:"keyword"},{regex:/^\s*(?:Function|PageEx|Section(?:Group)?)\b/,token:"keyword",indent:!0},{regex:/^\s*(?:(Function|PageEx|Section(?:Group)?)End)\b/,token:"keyword",dedent:!0},{regex:/\b(?:ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_HIDDEN|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HIDDEN|HKCC|HKCR(32|64)?|HKCU(32|64)?|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM(32|64)?|HKPD|HKU|IDABORT|IDCANCEL|IDD_DIR|IDD_INST|IDD_INSTFILES|IDD_LICENSE|IDD_SELCOM|IDD_UNINST|IDD_VERIFY|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|MB_YESNOCANCEL|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SW_HIDE|SW_SHOWDEFAULT|SW_SHOWMAXIMIZED|SW_SHOWMINIMIZED|SW_SHOWNORMAL|SYSTEM|TEMPORARY)\b/,token:"atom"},{regex:/\b(?:admin|all|auto|both|bottom|bzip2|components|current|custom|directory|false|force|hide|highest|ifdiff|ifnewer|instfiles|lastused|leave|left|license|listonly|lzma|nevershow|none|normal|notset|off|on|right|show|silent|silentlog|textonly|top|true|try|un\.components|un\.custom|un\.directory|un\.instfiles|un\.license|uninstConfirm|user|Win10|Win7|Win8|WinVista|zlib)\b/,token:"builtin"},{regex:/\$\{(?:And(?:If(?:Not)?|Unless)|Break|Case(?:Else)?|Continue|Default|Do(?:Until|While)?|Else(?:If(?:Not)?|Unless)?|End(?:If|Select|Switch)|Exit(?:Do|For|While)|For(?:Each)?|If(?:Cmd|Not(?:Then)?|Then)?|Loop(?:Until|While)?|Or(?:If(?:Not)?|Unless)|Select|Switch|Unless|While)\}/,token:"variable-2",indent:!0},{regex:/\$\{(?:BannerTrimPath|DirState|DriveSpace|Get(BaseName|Drives|ExeName|ExePath|FileAttributes|FileExt|FileName|FileVersion|Options|OptionsS|Parameters|Parent|Root|Size|Time)|Locate|RefreshShellIcons)\}/,token:"variable-2",dedent:!0},{regex:/\$\{(?:Memento(?:Section(?:Done|End|Restore|Save)?|UnselectedSection))\}/,token:"variable-2",dedent:!0},{regex:/\$\{(?:Config(?:Read|ReadS|Write|WriteS)|File(?:Join|ReadFromEnd|Recode)|Line(?:Find|Read|Sum)|Text(?:Compare|CompareS)|TrimNewLines)\}/,token:"variable-2",dedent:!0},{regex:/\$\{(?:(?:At(?:Least|Most)|Is)(?:ServicePack|Win(?:7|8|10|95|98|200(?:0|3|8(?:R2)?)|ME|NT4|Vista|XP))|Is(?:NT|Server))\}/,token:"variable",dedent:!0},{regex:/\$\{(?:StrFilterS?|Version(?:Compare|Convert)|Word(?:AddS?|Find(?:(?:2|3)X)?S?|InsertS?|ReplaceS?))\}/,token:"variable-2",dedent:!0},{regex:/\$\{(?:RunningX64)\}/,token:"variable",dedent:!0},{regex:/\$\{(?:Disable|Enable)X64FSRedirection\}/,token:"variable-2",dedent:!0},{regex:/(#|;).*/,token:"comment"},{regex:/\/\*/,token:"comment",next:"comment"},{regex:/[-+\/*=<>!]+/,token:"operator"},{regex:/\$\w+/,token:"variable"},{regex:/\${[\w\.:-]+}/,token:"variable-2"},{regex:/\$\([\w\.:-]+\)/,token:"variable-3"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}],meta:{electricInput:/^\s*((Function|PageEx|Section|Section(Group)?)End|(\!(endif|macroend))|\$\{(End(If|Unless|While)|Loop(Until)|Next)\})$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:["#",";"]}}),e.defineMIME("text/x-nsis","nsis")}(n(42),n(335))},335:function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e.unicode&&(n+="u"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function i(e,i){(e.next||e.push)&&t(i,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function o(e,t){return function(n,r){if(r.pending){var i=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=i.text.length,i.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var o=r.local.endToken||null;return r.local=r.localState=null,o}var a;return o=r.local.mode.token(n,r.localState),r.local.endScan&&(a=r.local.endScan.exec(n.current()))&&(n.pos=n.start+a.index),o}for(var s=e[r.state],d=0;d<s.length;d++){var c=s[d],S=(!c.data.sol||n.sol())&&n.match(c.regex);if(S){c.data.next?r.state=c.data.next:c.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=c.data.push):c.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),c.data.mode&&l(t,r,c.data.mode,c.token),c.data.indent&&r.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&r.indent.pop();var u=c.token;if(u&&u.apply&&(u=u(S)),S.length>2&&c.token&&"string"!=typeof c.token){for(var p=2;p<S.length;p++)S[p]&&(r.pending||(r.pending=[])).push({text:S[p],token:c.token[p-1]});return n.backUp(S[0].length-(S[1]?S[1].length:0)),u[0]}return u&&u.join?u[0]:u}}return n.next(),null}}function a(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!a(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function l(t,r,i,o){var l;if(i.persistent)for(var s=r.persistentStates;s&&!l;s=s.next)(i.spec?a(i.spec,s.spec):i.mode==s.mode)&&(l=s);var d=l?l.mode:i.mode||e.getMode(t,i.spec),c=l?l.state:e.startState(d);i.persistent&&!l&&(r.persistentStates={mode:d,spec:i.spec,state:c,next:r.persistentStates}),r.localState=c,r.local={mode:d,end:i.end&&n(i.end),endScan:i.end&&!1!==i.forceEnd&&n(i.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function s(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function d(t,n){return function(r,i,o){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,i,o);if(null==r.indent||r.local||n.dontIndentStates&&s(r.state,n.dontIndentStates)>-1)return e.Pass;var a=r.indent.length-1,l=t[r.state];e:for(;;){for(var d=0;d<l.length;d++){var c=l[d];if(c.data.dedent&&!1!==c.data.dedentIfLineStart){var S=c.regex.exec(i);if(S&&S[0]){a--,(c.next||c.push)&&(l=t[c.next||c.push]),i=i.slice(S[0].length);continue e}}}break}return a<0?0:r.indent[a]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var a={},l=r.meta||{},s=!1;for(var c in r)if(c!=l&&r.hasOwnProperty(c))for(var S=a[c]=[],u=r[c],p=0;p<u.length;p++){var I=u[p];S.push(new i(I,r)),(I.indent||I.dedent)&&(s=!0)}var g={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:s?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:o(a,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:d(a,l)};if(l)for(var E in l)l.hasOwnProperty(E)&&(g[E]=l[E]);return g}}(n(42))}}]);
//# sourceMappingURL=23.f4ba5a2a.chunk.js.map