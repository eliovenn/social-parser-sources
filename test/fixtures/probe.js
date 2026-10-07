var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "node_modules/boolbase/index.js"(exports, module) {
    module.exports = {
      trueFunc: function trueFunc4() {
        return true;
      },
      falseFunc: function falseFunc6() {
        return false;
      }
    };
  }
});

// sources/common/api.js
import { createHash, randomBytes } from "crypto";

// node_modules/htmlparser2/node_modules/entities/dist/esm/decode-codepoint.js
var _a;
var fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);

// node_modules/htmlparser2/node_modules/entities/dist/esm/decode.js
var CharCodes;
(function(CharCodes4) {
  CharCodes4[CharCodes4["NUM"] = 35] = "NUM";
  CharCodes4[CharCodes4["SEMI"] = 59] = "SEMI";
  CharCodes4[CharCodes4["EQUALS"] = 61] = "EQUALS";
  CharCodes4[CharCodes4["ZERO"] = 48] = "ZERO";
  CharCodes4[CharCodes4["NINE"] = 57] = "NINE";
  CharCodes4[CharCodes4["LOWER_A"] = 97] = "LOWER_A";
  CharCodes4[CharCodes4["LOWER_F"] = 102] = "LOWER_F";
  CharCodes4[CharCodes4["LOWER_X"] = 120] = "LOWER_X";
  CharCodes4[CharCodes4["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes4[CharCodes4["UPPER_A"] = 65] = "UPPER_A";
  CharCodes4[CharCodes4["UPPER_F"] = 70] = "UPPER_F";
  CharCodes4[CharCodes4["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var BinTrieFlags;
(function(BinTrieFlags3) {
  BinTrieFlags3[BinTrieFlags3["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags3[BinTrieFlags3["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags3[BinTrieFlags3["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
var EntityDecoderState;
(function(EntityDecoderState3) {
  EntityDecoderState3[EntityDecoderState3["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState3[EntityDecoderState3["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState3[EntityDecoderState3["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState3[EntityDecoderState3["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState3[EntityDecoderState3["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode3) {
  DecodingMode3[DecodingMode3["Legacy"] = 0] = "Legacy";
  DecodingMode3[DecodingMode3["Strict"] = 1] = "Strict";
  DecodingMode3[DecodingMode3["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));

// node_modules/htmlparser2/dist/esm/Tokenizer.js
var CharCodes2;
(function(CharCodes4) {
  CharCodes4[CharCodes4["Tab"] = 9] = "Tab";
  CharCodes4[CharCodes4["NewLine"] = 10] = "NewLine";
  CharCodes4[CharCodes4["FormFeed"] = 12] = "FormFeed";
  CharCodes4[CharCodes4["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes4[CharCodes4["Space"] = 32] = "Space";
  CharCodes4[CharCodes4["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes4[CharCodes4["Number"] = 35] = "Number";
  CharCodes4[CharCodes4["Amp"] = 38] = "Amp";
  CharCodes4[CharCodes4["SingleQuote"] = 39] = "SingleQuote";
  CharCodes4[CharCodes4["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes4[CharCodes4["Dash"] = 45] = "Dash";
  CharCodes4[CharCodes4["Slash"] = 47] = "Slash";
  CharCodes4[CharCodes4["Zero"] = 48] = "Zero";
  CharCodes4[CharCodes4["Nine"] = 57] = "Nine";
  CharCodes4[CharCodes4["Semi"] = 59] = "Semi";
  CharCodes4[CharCodes4["Lt"] = 60] = "Lt";
  CharCodes4[CharCodes4["Eq"] = 61] = "Eq";
  CharCodes4[CharCodes4["Gt"] = 62] = "Gt";
  CharCodes4[CharCodes4["Questionmark"] = 63] = "Questionmark";
  CharCodes4[CharCodes4["UpperA"] = 65] = "UpperA";
  CharCodes4[CharCodes4["LowerA"] = 97] = "LowerA";
  CharCodes4[CharCodes4["UpperF"] = 70] = "UpperF";
  CharCodes4[CharCodes4["LowerF"] = 102] = "LowerF";
  CharCodes4[CharCodes4["UpperZ"] = 90] = "UpperZ";
  CharCodes4[CharCodes4["LowerZ"] = 122] = "LowerZ";
  CharCodes4[CharCodes4["LowerX"] = 120] = "LowerX";
  CharCodes4[CharCodes4["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes2 || (CharCodes2 = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
  State2[State2["InCommentLike"] = 21] = "InCommentLike";
  State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State2[State2["BeforeSpecialT"] = 23] = "BeforeSpecialT";
  State2[State2["SpecialStartSequence"] = 24] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 25] = "InSpecialTag";
  State2[State2["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
var Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `</script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ]),
  // `</textarea`
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112])
  // `</xmp`
};

// node_modules/domelementtype/lib/esm/index.js
var ElementType;
(function(ElementType2) {
  ElementType2["Root"] = "root";
  ElementType2["Text"] = "text";
  ElementType2["Directive"] = "directive";
  ElementType2["Comment"] = "comment";
  ElementType2["Script"] = "script";
  ElementType2["Style"] = "style";
  ElementType2["Tag"] = "tag";
  ElementType2["CDATA"] = "cdata";
  ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
var Root = ElementType.Root;
var Text = ElementType.Text;
var Directive = ElementType.Directive;
var Comment = ElementType.Comment;
var Script = ElementType.Script;
var Style = ElementType.Style;
var Tag = ElementType.Tag;
var CDATA = ElementType.CDATA;
var Doctype = ElementType.Doctype;

// node_modules/domhandler/lib/esm/node.js
function isTag2(node) {
  return isTag(node);
}
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
function isText(node) {
  return node.type === ElementType.Text;
}
function isComment(node) {
  return node.type === ElementType.Comment;
}
function isDocument(node) {
  return node.type === ElementType.Root;
}
function hasChildren(node) {
  return Object.prototype.hasOwnProperty.call(node, "children");
}

// node_modules/domutils/lib/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  DocumentPosition: () => DocumentPosition,
  append: () => append,
  appendChild: () => appendChild,
  compareDocumentPosition: () => compareDocumentPosition,
  existsOne: () => existsOne,
  filter: () => filter,
  find: () => find,
  findAll: () => findAll,
  findOne: () => findOne,
  findOneChild: () => findOneChild,
  getAttributeValue: () => getAttributeValue,
  getChildren: () => getChildren,
  getElementById: () => getElementById,
  getElements: () => getElements,
  getElementsByClassName: () => getElementsByClassName,
  getElementsByTagName: () => getElementsByTagName,
  getElementsByTagType: () => getElementsByTagType,
  getFeed: () => getFeed,
  getInnerHTML: () => getInnerHTML,
  getName: () => getName,
  getOuterHTML: () => getOuterHTML,
  getParent: () => getParent,
  getSiblings: () => getSiblings,
  getText: () => getText,
  hasAttrib: () => hasAttrib,
  hasChildren: () => hasChildren,
  innerText: () => innerText,
  isCDATA: () => isCDATA,
  isComment: () => isComment,
  isDocument: () => isDocument,
  isTag: () => isTag2,
  isText: () => isText,
  nextElementSibling: () => nextElementSibling,
  prepend: () => prepend,
  prependChild: () => prependChild,
  prevElementSibling: () => prevElementSibling,
  removeElement: () => removeElement,
  removeSubsets: () => removeSubsets,
  replaceElement: () => replaceElement,
  testElement: () => testElement,
  textContent: () => textContent,
  uniqueSort: () => uniqueSort
});

// node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default = new Uint16Array(
  // prettier-ignore
  '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0))
);

// node_modules/entities/lib/esm/generated/decode-data-xml.js
var decode_data_xml_default = new Uint16Array(
  // prettier-ignore
  "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0))
);

// node_modules/entities/lib/esm/decode_codepoint.js
var _a2;
var decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var fromCodePoint2 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a2 = String.fromCodePoint) !== null && _a2 !== void 0 ? _a2 : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint2(codePoint) {
  var _a3;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a3 = decodeMap.get(codePoint)) !== null && _a3 !== void 0 ? _a3 : codePoint;
}

// node_modules/entities/lib/esm/decode.js
var CharCodes3;
(function(CharCodes4) {
  CharCodes4[CharCodes4["NUM"] = 35] = "NUM";
  CharCodes4[CharCodes4["SEMI"] = 59] = "SEMI";
  CharCodes4[CharCodes4["EQUALS"] = 61] = "EQUALS";
  CharCodes4[CharCodes4["ZERO"] = 48] = "ZERO";
  CharCodes4[CharCodes4["NINE"] = 57] = "NINE";
  CharCodes4[CharCodes4["LOWER_A"] = 97] = "LOWER_A";
  CharCodes4[CharCodes4["LOWER_F"] = 102] = "LOWER_F";
  CharCodes4[CharCodes4["LOWER_X"] = 120] = "LOWER_X";
  CharCodes4[CharCodes4["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes4[CharCodes4["UPPER_A"] = 65] = "UPPER_A";
  CharCodes4[CharCodes4["UPPER_F"] = 70] = "UPPER_F";
  CharCodes4[CharCodes4["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes3 || (CharCodes3 = {}));
var TO_LOWER_BIT = 32;
var BinTrieFlags2;
(function(BinTrieFlags3) {
  BinTrieFlags3[BinTrieFlags3["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags3[BinTrieFlags3["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags3[BinTrieFlags3["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags2 || (BinTrieFlags2 = {}));
function isNumber(code) {
  return code >= CharCodes3.ZERO && code <= CharCodes3.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes3.UPPER_A && code <= CharCodes3.UPPER_F || code >= CharCodes3.LOWER_A && code <= CharCodes3.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes3.UPPER_A && code <= CharCodes3.UPPER_Z || code >= CharCodes3.LOWER_A && code <= CharCodes3.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes3.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState2;
(function(EntityDecoderState3) {
  EntityDecoderState3[EntityDecoderState3["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState3[EntityDecoderState3["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState3[EntityDecoderState3["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState3[EntityDecoderState3["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState3[EntityDecoderState3["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState2 || (EntityDecoderState2 = {}));
var DecodingMode2;
(function(DecodingMode3) {
  DecodingMode3[DecodingMode3["Legacy"] = 0] = "Legacy";
  DecodingMode3[DecodingMode3["Strict"] = 1] = "Strict";
  DecodingMode3[DecodingMode3["Attribute"] = 2] = "Attribute";
})(DecodingMode2 || (DecodingMode2 = {}));
var EntityDecoder2 = class {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState2.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode2.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState2.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState2.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes3.NUM) {
          this.state = EntityDecoderState2.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState2.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState2.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState2.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState2.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState2.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes3.LOWER_X) {
      this.state = EntityDecoderState2.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState2.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a3;
    if (this.consumed <= expectedLength) {
      (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes3.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode2.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint2(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes3.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags2.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode2.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags2.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes3.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode2.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a3;
    const { result: result2, decodeTree } = this;
    const valueLength = (decodeTree[result2] & BinTrieFlags2.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result2, valueLength, this.consumed);
    (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result2, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result2] & ~BinTrieFlags2.VALUE_LENGTH : decodeTree[result2 + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result2 + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a3;
    switch (this.state) {
      case EntityDecoderState2.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode2.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState2.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState2.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState2.NumericStart: {
        (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState2.EntityStart: {
        return 0;
      }
    }
  }
};
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder2(decodeTree, (str) => ret += fromCodePoint2(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result2 = ret + str.slice(lastIndex);
    ret = "";
    return result2;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags2.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags2.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
var htmlDecoder = getDecoder(decode_data_html_default);
var xmlDecoder = getDecoder(decode_data_xml_default);

// node_modules/entities/lib/esm/generated/encode-html.js
function restoreDiff(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i][0] += arr[i - 1][0] + 1;
  }
  return arr;
}
var encode_html_default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));

// node_modules/entities/lib/esm/escape.js
var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
var getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index)
  )
);
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match2;
  while ((match2 = xmlReplacer.exec(str)) !== null) {
    const i = match2.index;
    const char = str.charCodeAt(i);
    const next = xmlCodeMap.get(char);
    if (next !== void 0) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
function getEscaper(regex, map) {
  return function escape2(data) {
    let match2;
    let lastIdx = 0;
    let result2 = "";
    while (match2 = regex.exec(data)) {
      if (lastIdx !== match2.index) {
        result2 += data.substring(lastIdx, match2.index);
      }
      result2 += map.get(match2[0].charCodeAt(0));
      lastIdx = match2.index + 1;
    }
    return result2 + data.substring(lastIdx);
  };
}
var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));

// node_modules/entities/lib/esm/index.js
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
  EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
  EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
  EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
  EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
  EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

// node_modules/dom-serializer/lib/esm/foreignNames.js
var elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((val) => [val.toLowerCase(), val]));
var attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((val) => [val.toLowerCase(), val]));

// node_modules/dom-serializer/lib/esm/index.js
var unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes, opts) {
  var _a3;
  if (!attributes)
    return;
  const encode = ((_a3 = opts.encodeEntities) !== null && _a3 !== void 0 ? _a3 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes).map((key) => {
    var _a4, _b;
    const value = (_a4 = attributes[key]) !== null && _a4 !== void 0 ? _a4 : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return `${key}="${encode(value)}"`;
  }).join(" ");
}
var singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render(node, options = {}) {
  const nodes = "length" in node ? node : [node];
  let output = "";
  for (let i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
var esm_default = render;
function renderNode(node, options) {
  switch (node.type) {
    case Root:
      return render(node.children, options);
    // @ts-expect-error We don't use `Doctype` yet
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment:
      return renderComment(node);
    case CDATA:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options);
    case Text:
      return renderText(node, options);
  }
}
var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a3;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a3 = elementNames.get(elem.name)) !== null && _a3 !== void 0 ? _a3 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)
  ))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
}
function renderDirective(elem) {
  return `<${elem.data}>`;
}
function renderText(elem, opts) {
  var _a3;
  let data = elem.data || "";
  if (((_a3 = opts.encodeEntities) !== null && _a3 !== void 0 ? _a3 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
}
function renderCdata(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
  return `<!--${elem.data}-->`;
}

// node_modules/domutils/lib/esm/stringify.js
function getOuterHTML(node, options) {
  return esm_default(node, options);
}
function getInnerHTML(node, options) {
  return hasChildren(node) ? node.children.map((node2) => getOuterHTML(node2, options)).join("") : "";
}
function getText(node) {
  if (Array.isArray(node))
    return node.map(getText).join("");
  if (isTag2(node))
    return node.name === "br" ? "\n" : getText(node.children);
  if (isCDATA(node))
    return getText(node.children);
  if (isText(node))
    return node.data;
  return "";
}
function textContent(node) {
  if (Array.isArray(node))
    return node.map(textContent).join("");
  if (hasChildren(node) && !isComment(node)) {
    return textContent(node.children);
  }
  if (isText(node))
    return node.data;
  return "";
}
function innerText(node) {
  if (Array.isArray(node))
    return node.map(innerText).join("");
  if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
    return innerText(node.children);
  }
  if (isText(node))
    return node.data;
  return "";
}

// node_modules/domutils/lib/esm/traversal.js
function getChildren(elem) {
  return hasChildren(elem) ? elem.children : [];
}
function getParent(elem) {
  return elem.parent || null;
}
function getSiblings(elem) {
  const parent = getParent(elem);
  if (parent != null)
    return getChildren(parent);
  const siblings = [elem];
  let { prev, next } = elem;
  while (prev != null) {
    siblings.unshift(prev);
    ({ prev } = prev);
  }
  while (next != null) {
    siblings.push(next);
    ({ next } = next);
  }
  return siblings;
}
function getAttributeValue(elem, name) {
  var _a3;
  return (_a3 = elem.attribs) === null || _a3 === void 0 ? void 0 : _a3[name];
}
function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
  return elem.name;
}
function nextElementSibling(elem) {
  let { next } = elem;
  while (next !== null && !isTag2(next))
    ({ next } = next);
  return next;
}
function prevElementSibling(elem) {
  let { prev } = elem;
  while (prev !== null && !isTag2(prev))
    ({ prev } = prev);
  return prev;
}

// node_modules/domutils/lib/esm/manipulation.js
function removeElement(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    const childs = elem.parent.children;
    const childsIndex = childs.lastIndexOf(elem);
    if (childsIndex >= 0) {
      childs.splice(childsIndex, 1);
    }
  }
  elem.next = null;
  elem.prev = null;
  elem.parent = null;
}
function replaceElement(elem, replacement) {
  const prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  const next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  const parent = replacement.parent = elem.parent;
  if (parent) {
    const childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
    elem.parent = null;
  }
}
function appendChild(parent, child) {
  removeElement(child);
  child.next = null;
  child.parent = parent;
  if (parent.children.push(child) > 1) {
    const sibling = parent.children[parent.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
function append(elem, next) {
  removeElement(next);
  const { parent } = elem;
  const currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;
  if (currNext) {
    currNext.prev = next;
    if (parent) {
      const childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}
function prependChild(parent, child) {
  removeElement(child);
  child.parent = parent;
  child.prev = null;
  if (parent.children.unshift(child) !== 1) {
    const sibling = parent.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
function prepend(elem, prev) {
  removeElement(prev);
  const { parent } = elem;
  if (parent) {
    const childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}

// node_modules/domutils/lib/esm/querying.js
function filter(test, node, recurse = true, limit = Infinity) {
  return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
function find(test, nodes, recurse, limit) {
  const result2 = [];
  const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (indexStack.length === 1) {
        return result2;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (test(elem)) {
      result2.push(elem);
      if (--limit <= 0)
        return result2;
    }
    if (recurse && hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
}
function findOneChild(test, nodes) {
  return nodes.find(test);
}
function findOne(test, nodes, recurse = true) {
  const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
  for (let i = 0; i < searchedNodes.length; i++) {
    const node = searchedNodes[i];
    if (isTag2(node) && test(node)) {
      return node;
    }
    if (recurse && hasChildren(node) && node.children.length > 0) {
      const found = findOne(test, node.children, true);
      if (found)
        return found;
    }
  }
  return null;
}
function existsOne(test, nodes) {
  return (Array.isArray(nodes) ? nodes : [nodes]).some((node) => isTag2(node) && test(node) || hasChildren(node) && existsOne(test, node.children));
}
function findAll(test, nodes) {
  const result2 = [];
  const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return result2;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (isTag2(elem) && test(elem))
      result2.push(elem);
    if (hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
}

// node_modules/domutils/lib/esm/legacy.js
var Checks = {
  tag_name(name) {
    if (typeof name === "function") {
      return (elem) => isTag2(elem) && name(elem.name);
    } else if (name === "*") {
      return isTag2;
    }
    return (elem) => isTag2(elem) && elem.name === name;
  },
  tag_type(type) {
    if (typeof type === "function") {
      return (elem) => type(elem.type);
    }
    return (elem) => elem.type === type;
  },
  tag_contains(data) {
    if (typeof data === "function") {
      return (elem) => isText(elem) && data(elem.data);
    }
    return (elem) => isText(elem) && elem.data === data;
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return (elem) => isTag2(elem) && value(elem.attribs[attrib]);
  }
  return (elem) => isTag2(elem) && elem.attribs[attrib] === value;
}
function combineFuncs(a, b) {
  return (elem) => a(elem) || b(elem);
}
function compileTest(options) {
  const funcs = Object.keys(options).map((key) => {
    const value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
  const test = compileTest(options);
  return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
  const test = compileTest(options);
  return test ? filter(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return findOne(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
  return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_type"](type), nodes, recurse, limit);
}

// node_modules/domutils/lib/esm/helpers.js
function removeSubsets(nodes) {
  let idx = nodes.length;
  while (--idx >= 0) {
    const node = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
var DocumentPosition;
(function(DocumentPosition2) {
  DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
  const aParents = [];
  const bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = hasChildren(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  const maxIdx = Math.min(aParents.length, bParents.length);
  let idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return DocumentPosition.DISCONNECTED;
  }
  const sharedParent = aParents[idx - 1];
  const siblings = sharedParent.children;
  const aSibling = aParents[idx];
  const bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
    }
    return DocumentPosition.FOLLOWING;
  }
  if (sharedParent === nodeA) {
    return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
  }
  return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
  nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
  nodes.sort((a, b) => {
    const relative = compareDocumentPosition(a, b);
    if (relative & DocumentPosition.PRECEDING) {
      return -1;
    } else if (relative & DocumentPosition.FOLLOWING) {
      return 1;
    }
    return 0;
  });
  return nodes;
}

// node_modules/domutils/lib/esm/feeds.js
function getFeed(doc) {
  const feedRoot = getOneElement(isValidFeed, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
function getAtomFeed(feedRoot) {
  var _a3;
  const childs = feedRoot.children;
  const feed = {
    type: "atom",
    items: getElementsByTagName("entry", childs).map((item) => {
      var _a4;
      const { children } = item;
      const entry = { media: getMediaElements(children) };
      addConditionally(entry, "id", "id", children);
      addConditionally(entry, "title", "title", children);
      const href2 = (_a4 = getOneElement("link", children)) === null || _a4 === void 0 ? void 0 : _a4.attribs["href"];
      if (href2) {
        entry.link = href2;
      }
      const description = fetch2("summary", children) || fetch2("content", children);
      if (description) {
        entry.description = description;
      }
      const pubDate = fetch2("updated", children);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally(feed, "id", "id", childs);
  addConditionally(feed, "title", "title", childs);
  const href = (_a3 = getOneElement("link", childs)) === null || _a3 === void 0 ? void 0 : _a3.attribs["href"];
  if (href) {
    feed.link = href;
  }
  addConditionally(feed, "description", "subtitle", childs);
  const updated = fetch2("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a3, _b;
  const childs = (_b = (_a3 = getOneElement("channel", feedRoot.children)) === null || _a3 === void 0 ? void 0 : _a3.children) !== null && _b !== void 0 ? _b : [];
  const feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: getElementsByTagName("item", feedRoot.children).map((item) => {
      const { children } = item;
      const entry = { media: getMediaElements(children) };
      addConditionally(entry, "id", "guid", children);
      addConditionally(entry, "title", "title", children);
      addConditionally(entry, "link", "link", children);
      addConditionally(entry, "description", "description", children);
      const pubDate = fetch2("pubDate", children) || fetch2("dc:date", children);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally(feed, "title", "title", childs);
  addConditionally(feed, "link", "link", childs);
  addConditionally(feed, "description", "description", childs);
  const updated = fetch2("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements(where) {
  return getElementsByTagName("media:content", where).map((elem) => {
    const { attribs } = elem;
    const media = {
      medium: attribs["medium"],
      isDefault: !!attribs["isDefault"]
    };
    for (const attrib of MEDIA_KEYS_STRING) {
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (const attrib of MEDIA_KEYS_INT) {
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs["expression"]) {
      media.expression = attribs["expression"];
    }
    return media;
  });
}
function getOneElement(tagName, node) {
  return getElementsByTagName(tagName, node, true, 1)[0];
}
function fetch2(tagName, where, recurse = false) {
  return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function addConditionally(obj, prop, tagName, where, recurse = false) {
  const val = fetch2(tagName, where, recurse);
  if (val)
    obj[prop] = val;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}

// node_modules/css-select/dist/esm/index.js
var boolbase6 = __toESM(require_boolbase(), 1);

// node_modules/css-what/dist/esm/types.js
var SelectorType;
(function(SelectorType2) {
  SelectorType2["Attribute"] = "attribute";
  SelectorType2["Pseudo"] = "pseudo";
  SelectorType2["PseudoElement"] = "pseudo-element";
  SelectorType2["Tag"] = "tag";
  SelectorType2["Universal"] = "universal";
  SelectorType2["Adjacent"] = "adjacent";
  SelectorType2["Child"] = "child";
  SelectorType2["Descendant"] = "descendant";
  SelectorType2["Parent"] = "parent";
  SelectorType2["Sibling"] = "sibling";
  SelectorType2["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
var AttributeAction;
(function(AttributeAction2) {
  AttributeAction2["Any"] = "any";
  AttributeAction2["Element"] = "element";
  AttributeAction2["End"] = "end";
  AttributeAction2["Equals"] = "equals";
  AttributeAction2["Exists"] = "exists";
  AttributeAction2["Hyphen"] = "hyphen";
  AttributeAction2["Not"] = "not";
  AttributeAction2["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

// node_modules/css-what/dist/esm/parse.js
var reName = /^[^#\\]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\u00B0-\uFFFF-])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var CharCode;
(function(CharCode2) {
  CharCode2[CharCode2["LeftParenthesis"] = 40] = "LeftParenthesis";
  CharCode2[CharCode2["RightParenthesis"] = 41] = "RightParenthesis";
  CharCode2[CharCode2["LeftSquareBracket"] = 91] = "LeftSquareBracket";
  CharCode2[CharCode2["RightSquareBracket"] = 93] = "RightSquareBracket";
  CharCode2[CharCode2["Comma"] = 44] = "Comma";
  CharCode2[CharCode2["Period"] = 46] = "Period";
  CharCode2[CharCode2["Colon"] = 58] = "Colon";
  CharCode2[CharCode2["SingleQuote"] = 39] = "SingleQuote";
  CharCode2[CharCode2["DoubleQuote"] = 34] = "DoubleQuote";
  CharCode2[CharCode2["Plus"] = 43] = "Plus";
  CharCode2[CharCode2["Tilde"] = 126] = "Tilde";
  CharCode2[CharCode2["QuestionMark"] = 63] = "QuestionMark";
  CharCode2[CharCode2["ExclamationMark"] = 33] = "ExclamationMark";
  CharCode2[CharCode2["Slash"] = 47] = "Slash";
  CharCode2[CharCode2["Equal"] = 61] = "Equal";
  CharCode2[CharCode2["Dollar"] = 36] = "Dollar";
  CharCode2[CharCode2["Pipe"] = 124] = "Pipe";
  CharCode2[CharCode2["Circumflex"] = 94] = "Circumflex";
  CharCode2[CharCode2["Asterisk"] = 42] = "Asterisk";
  CharCode2[CharCode2["GreaterThan"] = 62] = "GreaterThan";
  CharCode2[CharCode2["LessThan"] = 60] = "LessThan";
  CharCode2[CharCode2["Hash"] = 35] = "Hash";
  CharCode2[CharCode2["LowerI"] = 105] = "LowerI";
  CharCode2[CharCode2["LowerS"] = 115] = "LowerS";
  CharCode2[CharCode2["BackSlash"] = 92] = "BackSlash";
  CharCode2[CharCode2["Space"] = 32] = "Space";
  CharCode2[CharCode2["Tab"] = 9] = "Tab";
  CharCode2[CharCode2["NewLine"] = 10] = "NewLine";
  CharCode2[CharCode2["FormFeed"] = 12] = "FormFeed";
  CharCode2[CharCode2["CarriageReturn"] = 13] = "CarriageReturn";
})(CharCode || (CharCode = {}));
var actionTypes = /* @__PURE__ */ new Map([
  [CharCode.Tilde, AttributeAction.Element],
  [CharCode.Circumflex, AttributeAction.Start],
  [CharCode.Dollar, AttributeAction.End],
  [CharCode.Asterisk, AttributeAction.Any],
  [CharCode.ExclamationMark, AttributeAction.Not],
  [CharCode.Pipe, AttributeAction.Hyphen]
]);
var unpackPseudos = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
var pseudosToPseudoElements = /* @__PURE__ */ new Set([
  "before",
  "after",
  "first-line",
  "first-letter"
]);
function isTraversal(selector) {
  switch (selector.type) {
    case SelectorType.Adjacent:
    case SelectorType.Child:
    case SelectorType.Descendant:
    case SelectorType.Parent:
    case SelectorType.Sibling:
    case SelectorType.ColumnCombinator: {
      return true;
    }
    default: {
      return false;
    }
  }
}
var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
function funescape(_, escaped, escapedWhitespace) {
  const high = Number.parseInt(escaped, 16) - 65536;
  return high !== high || escapedWhitespace ? escaped : high < 0 ? (
    // BMP codepoint
    String.fromCharCode(high + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
  );
}
function unescapeCSS(cssString) {
  return cssString.replace(reEscape, funescape);
}
function isQuote(c) {
  return c === CharCode.SingleQuote || c === CharCode.DoubleQuote;
}
function isWhitespace(c) {
  return c === CharCode.Space || c === CharCode.Tab || c === CharCode.NewLine || c === CharCode.FormFeed || c === CharCode.CarriageReturn;
}
function parse(selector) {
  const subselects2 = [];
  const endIndex = parseSelector(subselects2, `${selector}`, 0);
  if (endIndex < selector.length) {
    throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
  }
  return subselects2;
}
function parseSelector(subselects2, selector, selectorIndex) {
  let tokens = [];
  function getName2(offset) {
    const match2 = selector.slice(selectorIndex + offset).match(reName);
    if (!match2) {
      throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
    }
    const [name] = match2;
    selectorIndex += offset + name.length;
    return unescapeCSS(name);
  }
  function stripWhitespace(offset) {
    selectorIndex += offset;
    while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
      selectorIndex++;
    }
  }
  function readValueWithParenthesis() {
    selectorIndex += 1;
    const start = selectorIndex;
    for (let counter = 1; selectorIndex < selector.length; selectorIndex++) {
      switch (selector.charCodeAt(selectorIndex)) {
        case CharCode.BackSlash: {
          selectorIndex += 1;
          break;
        }
        case CharCode.LeftParenthesis: {
          counter += 1;
          break;
        }
        case CharCode.RightParenthesis: {
          counter -= 1;
          if (counter === 0) {
            return unescapeCSS(selector.slice(start, selectorIndex++));
          }
          break;
        }
      }
    }
    throw new Error("Parenthesis not matched");
  }
  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }
  function addTraversal(type) {
    if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens[tokens.length - 1].type = type;
      return;
    }
    ensureNotTraversal();
    tokens.push({ type });
  }
  function addSpecialAttribute(name, action) {
    tokens.push({
      type: SelectorType.Attribute,
      name,
      action,
      value: getName2(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function finalizeSubselector() {
    if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens.pop();
    }
    if (tokens.length === 0) {
      throw new Error("Empty sub-selector");
    }
    subselects2.push(tokens);
  }
  stripWhitespace(0);
  if (selector.length === selectorIndex) {
    return selectorIndex;
  }
  loop: while (selectorIndex < selector.length) {
    const firstChar = selector.charCodeAt(selectorIndex);
    switch (firstChar) {
      // Whitespace
      case CharCode.Space:
      case CharCode.Tab:
      case CharCode.NewLine:
      case CharCode.FormFeed:
      case CharCode.CarriageReturn: {
        if (tokens.length === 0 || tokens[0].type !== SelectorType.Descendant) {
          ensureNotTraversal();
          tokens.push({ type: SelectorType.Descendant });
        }
        stripWhitespace(1);
        break;
      }
      // Traversals
      case CharCode.GreaterThan: {
        addTraversal(SelectorType.Child);
        stripWhitespace(1);
        break;
      }
      case CharCode.LessThan: {
        addTraversal(SelectorType.Parent);
        stripWhitespace(1);
        break;
      }
      case CharCode.Tilde: {
        addTraversal(SelectorType.Sibling);
        stripWhitespace(1);
        break;
      }
      case CharCode.Plus: {
        addTraversal(SelectorType.Adjacent);
        stripWhitespace(1);
        break;
      }
      // Special attribute selectors: .class, #id
      case CharCode.Period: {
        addSpecialAttribute("class", AttributeAction.Element);
        break;
      }
      case CharCode.Hash: {
        addSpecialAttribute("id", AttributeAction.Equals);
        break;
      }
      case CharCode.LeftSquareBracket: {
        stripWhitespace(1);
        let name;
        let namespace = null;
        if (selector.charCodeAt(selectorIndex) === CharCode.Pipe) {
          name = getName2(1);
        } else if (selector.startsWith("*|", selectorIndex)) {
          namespace = "*";
          name = getName2(2);
        } else {
          name = getName2(0);
          if (selector.charCodeAt(selectorIndex) === CharCode.Pipe && selector.charCodeAt(selectorIndex + 1) !== CharCode.Equal) {
            namespace = name;
            name = getName2(1);
          }
        }
        stripWhitespace(0);
        let action = AttributeAction.Exists;
        const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
        if (possibleAction) {
          action = possibleAction;
          if (selector.charCodeAt(selectorIndex + 1) !== CharCode.Equal) {
            throw new Error("Expected `=`");
          }
          stripWhitespace(2);
        } else if (selector.charCodeAt(selectorIndex) === CharCode.Equal) {
          action = AttributeAction.Equals;
          stripWhitespace(1);
        }
        let value = "";
        let ignoreCase = null;
        if (action !== "exists") {
          if (isQuote(selector.charCodeAt(selectorIndex))) {
            const quote = selector.charCodeAt(selectorIndex);
            selectorIndex += 1;
            const sectionStart = selectorIndex;
            while (selectorIndex < selector.length && selector.charCodeAt(selectorIndex) !== quote) {
              selectorIndex += // Skip next character if it is escaped
              selector.charCodeAt(selectorIndex) === CharCode.BackSlash ? 2 : 1;
            }
            if (selector.charCodeAt(selectorIndex) !== quote) {
              throw new Error("Attribute value didn't end");
            }
            value = unescapeCSS(selector.slice(sectionStart, selectorIndex));
            selectorIndex += 1;
          } else {
            const valueStart = selectorIndex;
            while (selectorIndex < selector.length && !isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== CharCode.RightSquareBracket) {
              selectorIndex += // Skip next character if it is escaped
              selector.charCodeAt(selectorIndex) === CharCode.BackSlash ? 2 : 1;
            }
            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
          }
          stripWhitespace(0);
          switch (selector.charCodeAt(selectorIndex) | 32) {
            // If the forceIgnore flag is set (either `i` or `s`), use that value
            case CharCode.LowerI: {
              ignoreCase = true;
              stripWhitespace(1);
              break;
            }
            case CharCode.LowerS: {
              ignoreCase = false;
              stripWhitespace(1);
              break;
            }
          }
        }
        if (selector.charCodeAt(selectorIndex) !== CharCode.RightSquareBracket) {
          throw new Error("Attribute selector didn't terminate");
        }
        selectorIndex += 1;
        const attributeSelector = {
          type: SelectorType.Attribute,
          name,
          action,
          value,
          namespace,
          ignoreCase
        };
        tokens.push(attributeSelector);
        break;
      }
      case CharCode.Colon: {
        if (selector.charCodeAt(selectorIndex + 1) === CharCode.Colon) {
          tokens.push({
            type: SelectorType.PseudoElement,
            name: getName2(2).toLowerCase(),
            data: selector.charCodeAt(selectorIndex) === CharCode.LeftParenthesis ? readValueWithParenthesis() : null
          });
          break;
        }
        const name = getName2(1).toLowerCase();
        if (pseudosToPseudoElements.has(name)) {
          tokens.push({
            type: SelectorType.PseudoElement,
            name,
            data: null
          });
          break;
        }
        let data = null;
        if (selector.charCodeAt(selectorIndex) === CharCode.LeftParenthesis) {
          if (unpackPseudos.has(name)) {
            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
              throw new Error(`Pseudo-selector ${name} cannot be quoted`);
            }
            data = [];
            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
            if (selector.charCodeAt(selectorIndex) !== CharCode.RightParenthesis) {
              throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
            }
            selectorIndex += 1;
          } else {
            data = readValueWithParenthesis();
            if (stripQuotesFromPseudos.has(name)) {
              const quot = data.charCodeAt(0);
              if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                data = data.slice(1, -1);
              }
            }
            data = unescapeCSS(data);
          }
        }
        tokens.push({ type: SelectorType.Pseudo, name, data });
        break;
      }
      case CharCode.Comma: {
        finalizeSubselector();
        tokens = [];
        stripWhitespace(1);
        break;
      }
      default: {
        if (selector.startsWith("/*", selectorIndex)) {
          const endIndex = selector.indexOf("*/", selectorIndex + 2);
          if (endIndex < 0) {
            throw new Error("Comment was not terminated");
          }
          selectorIndex = endIndex + 2;
          if (tokens.length === 0) {
            stripWhitespace(0);
          }
          break;
        }
        let namespace = null;
        let name;
        if (firstChar === CharCode.Asterisk) {
          selectorIndex += 1;
          name = "*";
        } else if (firstChar === CharCode.Pipe) {
          name = "";
          if (selector.charCodeAt(selectorIndex + 1) === CharCode.Pipe) {
            addTraversal(SelectorType.ColumnCombinator);
            stripWhitespace(2);
            break;
          }
        } else if (reName.test(selector.slice(selectorIndex))) {
          name = getName2(0);
        } else {
          break loop;
        }
        if (selector.charCodeAt(selectorIndex) === CharCode.Pipe && selector.charCodeAt(selectorIndex + 1) !== CharCode.Pipe) {
          namespace = name;
          if (selector.charCodeAt(selectorIndex + 1) === CharCode.Asterisk) {
            name = "*";
            selectorIndex += 2;
          } else {
            name = getName2(1);
          }
        }
        tokens.push(name === "*" ? { type: SelectorType.Universal, namespace } : { type: SelectorType.Tag, name, namespace });
      }
    }
  }
  finalizeSubselector();
  return selectorIndex;
}

// node_modules/css-what/dist/esm/stringify.js
var attribValueChars = ["\\", '"'];
var pseudoValueChars = [...attribValueChars, "(", ")"];
var charsToEscapeInAttributeValue = new Set(attribValueChars.map((c) => c.charCodeAt(0)));
var charsToEscapeInPseudoValue = new Set(pseudoValueChars.map((c) => c.charCodeAt(0)));
var charsToEscapeInName = new Set([
  ...pseudoValueChars,
  "~",
  "^",
  "$",
  "*",
  "+",
  "!",
  "|",
  ":",
  "[",
  "]",
  " ",
  ".",
  "%"
].map((c) => c.charCodeAt(0)));

// node_modules/css-select/dist/esm/compile.js
var boolbase5 = __toESM(require_boolbase(), 1);

// node_modules/css-select/dist/esm/attributes.js
var boolbase = __toESM(require_boolbase(), 1);
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
  return value.replace(reChars, "\\$&");
}
var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function shouldIgnoreCase(selector, options) {
  return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
var attributeRules = {
  equals(next, data, options) {
    const { adapter } = options;
    const { name } = data;
    let { value } = data;
    if (shouldIgnoreCase(data, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
      };
    }
    return (elem) => adapter.getAttributeValue(elem, name) === value && next(elem);
  },
  hyphen(next, data, options) {
    const { adapter } = options;
    const { name } = data;
    let { value } = data;
    const len = value.length;
    if (shouldIgnoreCase(data, options)) {
      value = value.toLowerCase();
      return function hyphenIC(elem) {
        const attr = adapter.getAttributeValue(elem, name);
        return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }
    return function hyphen(elem) {
      const attr = adapter.getAttributeValue(elem, name);
      return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
    };
  },
  element(next, data, options) {
    const { adapter } = options;
    const { name, value } = data;
    if (/\s/.test(value)) {
      return boolbase.falseFunc;
    }
    const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
    return function element(elem) {
      const attr = adapter.getAttributeValue(elem, name);
      return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
    };
  },
  exists(next, { name }, { adapter }) {
    return (elem) => adapter.hasAttrib(elem, name) && next(elem);
  },
  start(next, data, options) {
    const { adapter } = options;
    const { name } = data;
    let { value } = data;
    const len = value.length;
    if (len === 0) {
      return boolbase.falseFunc;
    }
    if (shouldIgnoreCase(data, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }
    return (elem) => !!adapter.getAttributeValue(elem, name)?.startsWith(value) && next(elem);
  },
  end(next, data, options) {
    const { adapter } = options;
    const { name } = data;
    let { value } = data;
    const len = -value.length;
    if (len === 0) {
      return boolbase.falseFunc;
    }
    if (shouldIgnoreCase(data, options)) {
      value = value.toLowerCase();
      return (elem) => adapter.getAttributeValue(elem, name)?.substr(len).toLowerCase() === value && next(elem);
    }
    return (elem) => !!adapter.getAttributeValue(elem, name)?.endsWith(value) && next(elem);
  },
  any(next, data, options) {
    const { adapter } = options;
    const { name, value } = data;
    if (value === "") {
      return boolbase.falseFunc;
    }
    if (shouldIgnoreCase(data, options)) {
      const regex = new RegExp(escapeRegex(value), "i");
      return function anyIC(elem) {
        const attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
      };
    }
    return (elem) => !!adapter.getAttributeValue(elem, name)?.includes(value) && next(elem);
  },
  not(next, data, options) {
    const { adapter } = options;
    const { name } = data;
    let { value } = data;
    if (value === "") {
      return (elem) => !!adapter.getAttributeValue(elem, name) && next(elem);
    }
    if (shouldIgnoreCase(data, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr = adapter.getAttributeValue(elem, name);
        return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
      };
    }
    return (elem) => adapter.getAttributeValue(elem, name) !== value && next(elem);
  }
};

// node_modules/css-select/dist/esm/helpers/querying.js
function findAll2(query, elems, options) {
  const { adapter, xmlMode = false } = options;
  const result2 = [];
  const nodeStack = [elems];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return result2;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (!adapter.isTag(elem)) {
      continue;
    }
    if (query(elem)) {
      result2.push(elem);
    }
    if (xmlMode || adapter.getName(elem) !== "template") {
      const children = adapter.getChildren(elem);
      if (children.length > 0) {
        nodeStack.unshift(children);
        indexStack.unshift(0);
      }
    }
  }
}
function findOne2(query, elems, options) {
  const { adapter, xmlMode = false } = options;
  const nodeStack = [elems];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return null;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (!adapter.isTag(elem)) {
      continue;
    }
    if (query(elem)) {
      return elem;
    }
    if (xmlMode || adapter.getName(elem) !== "template") {
      const children = adapter.getChildren(elem);
      if (children.length > 0) {
        nodeStack.unshift(children);
        indexStack.unshift(0);
      }
    }
  }
}
function getNextSiblings(elem, adapter) {
  const siblings = adapter.getSiblings(elem);
  if (siblings.length <= 1) {
    return [];
  }
  const elemIndex = siblings.indexOf(elem);
  if (elemIndex < 0 || elemIndex === siblings.length - 1) {
    return [];
  }
  return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function getElementParent(node, adapter) {
  const parent = adapter.getParent(node);
  return parent != null && adapter.isTag(parent) ? parent : null;
}

// node_modules/css-select/dist/esm/pseudo-selectors/aliases.js
var textControl = "input:is([type=text i],[type=search i],[type=url i],[type=tel i],[type=email i],[type=password i],[type=date i],[type=month i],[type=week i],[type=time i],[type=datetime-local i],[type=number i])";
var aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], :selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  "read-only": `[readonly]:is(textarea, ${textControl})`,
  "read-write": `:not([readonly]):is(textarea, ${textControl})`,
  // JQuery extensions
  /**
   * `:selected` matches option elements that have the `selected` attribute,
   * or are the first option element in a select element that does not have
   * the `multiple` attribute and does not have any option elements with the
   * `selected` attribute.
   *
   * @see https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
   */
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};

// node_modules/css-select/dist/esm/pseudo-selectors/filters.js
var boolbase3 = __toESM(require_boolbase(), 1);

// node_modules/nth-check/lib/esm/parse.js
var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
function parse2(formula) {
  formula = formula.trim().toLowerCase();
  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  }
  let idx = 0;
  let a = 0;
  let sign3 = readSign();
  let number = readNumber();
  if (idx < formula.length && formula.charAt(idx) === "n") {
    idx++;
    a = sign3 * (number !== null && number !== void 0 ? number : 1);
    skipWhitespace();
    if (idx < formula.length) {
      sign3 = readSign();
      skipWhitespace();
      number = readNumber();
    } else {
      sign3 = number = 0;
    }
  }
  if (number === null || idx < formula.length) {
    throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
  }
  return [a, sign3 * number];
  function readSign() {
    if (formula.charAt(idx) === "-") {
      idx++;
      return -1;
    }
    if (formula.charAt(idx) === "+") {
      idx++;
    }
    return 1;
  }
  function readNumber() {
    const start = idx;
    let value = 0;
    while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
      value = value * 10 + (formula.charCodeAt(idx) - ZERO);
      idx++;
    }
    return idx === start ? null : value;
  }
  function skipWhitespace() {
    while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
      idx++;
    }
  }
}

// node_modules/nth-check/lib/esm/compile.js
var import_boolbase = __toESM(require_boolbase(), 1);
function compile(parsed) {
  const a = parsed[0];
  const b = parsed[1] - 1;
  if (b < 0 && a <= 0)
    return import_boolbase.default.falseFunc;
  if (a === -1)
    return (index) => index <= b;
  if (a === 0)
    return (index) => index === b;
  if (a === 1)
    return b < 0 ? import_boolbase.default.trueFunc : (index) => index >= b;
  const absA = Math.abs(a);
  const bMod = (b % absA + absA) % absA;
  return a > 1 ? (index) => index >= b && index % absA === bMod : (index) => index <= b && index % absA === bMod;
}

// node_modules/nth-check/lib/esm/index.js
function nthCheck(formula) {
  return compile(parse2(formula));
}

// node_modules/css-select/dist/esm/helpers/cache.js
function cacheParentResults(next, { adapter, cacheResults }, matches) {
  if (cacheResults === false || typeof WeakMap === "undefined") {
    return (elem) => next(elem) && matches(elem);
  }
  const resultCache = /* @__PURE__ */ new WeakMap();
  function addResultToCache(elem) {
    const result2 = matches(elem);
    resultCache.set(elem, result2);
    return result2;
  }
  return function cachedMatcher(elem) {
    if (!next(elem)) {
      return false;
    }
    if (resultCache.has(elem)) {
      return resultCache.get(elem);
    }
    let node = elem;
    do {
      const parent = getElementParent(node, adapter);
      if (parent === null) {
        return addResultToCache(elem);
      }
      node = parent;
    } while (!resultCache.has(node));
    return resultCache.get(node) && addResultToCache(elem);
  };
}

// node_modules/css-select/dist/esm/pseudo-selectors/filters.js
var filters = {
  contains(next, text, options) {
    const { getText: getText2 } = options.adapter;
    return cacheParentResults(next, options, (elem) => getText2(elem).includes(text));
  },
  icontains(next, text, options) {
    const itext = text.toLowerCase();
    const { getText: getText2 } = options.adapter;
    return cacheParentResults(next, options, (elem) => getText2(elem).toLowerCase().includes(itext));
  },
  // Location specific methods
  "nth-child"(next, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === boolbase3.falseFunc) {
      return boolbase3.falseFunc;
    }
    if (func === boolbase3.trueFunc) {
      return (elem) => getElementParent(elem, adapter) !== null && next(elem);
    }
    return function nthChild(elem) {
      const siblings = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = 0; i < siblings.length; i++) {
        if (equals(elem, siblings[i])) {
          break;
        }
        if (adapter.isTag(siblings[i])) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-last-child"(next, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === boolbase3.falseFunc) {
      return boolbase3.falseFunc;
    }
    if (func === boolbase3.trueFunc) {
      return (elem) => getElementParent(elem, adapter) !== null && next(elem);
    }
    return function nthLastChild(elem) {
      const siblings = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = siblings.length - 1; i >= 0; i--) {
        if (equals(elem, siblings[i])) {
          break;
        }
        if (adapter.isTag(siblings[i])) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-of-type"(next, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === boolbase3.falseFunc) {
      return boolbase3.falseFunc;
    }
    if (func === boolbase3.trueFunc) {
      return (elem) => getElementParent(elem, adapter) !== null && next(elem);
    }
    return function nthOfType(elem) {
      const siblings = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = 0; i < siblings.length; i++) {
        const currentSibling = siblings[i];
        if (equals(elem, currentSibling)) {
          break;
        }
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-last-of-type"(next, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === boolbase3.falseFunc) {
      return boolbase3.falseFunc;
    }
    if (func === boolbase3.trueFunc) {
      return (elem) => getElementParent(elem, adapter) !== null && next(elem);
    }
    return function nthLastOfType(elem) {
      const siblings = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = siblings.length - 1; i >= 0; i--) {
        const currentSibling = siblings[i];
        if (equals(elem, currentSibling)) {
          break;
        }
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  // TODO determine the actual root element
  root(next, _rule, { adapter }) {
    return (elem) => getElementParent(elem, adapter) === null && next(elem);
  },
  scope(next, rule, options, context) {
    const { equals } = options;
    if (!context || context.length === 0) {
      return filters["root"](next, rule, options);
    }
    if (context.length === 1) {
      return (elem) => equals(context[0], elem) && next(elem);
    }
    return (elem) => context.includes(elem) && next(elem);
  },
  hover: dynamicStatePseudo("isHovered"),
  visited: dynamicStatePseudo("isVisited"),
  active: dynamicStatePseudo("isActive")
};
function dynamicStatePseudo(name) {
  return function dynamicPseudo(next, _rule, { adapter }) {
    const func = adapter[name];
    if (typeof func !== "function") {
      return boolbase3.falseFunc;
    }
    return function active(elem) {
      return func(elem) && next(elem);
    };
  };
}

// node_modules/css-select/dist/esm/pseudo-selectors/pseudos.js
var isDocumentWhiteSpace = /^[ \t\r\n]*$/;
var pseudos = {
  empty(elem, { adapter }) {
    const children = adapter.getChildren(elem);
    return (
      // First, make sure the tag does not have any element children.
      children.every((elem2) => !adapter.isTag(elem2)) && // Then, check that the text content is only whitespace.
      children.every((elem2) => (
        // FIXME: `getText` call is potentially expensive.
        isDocumentWhiteSpace.test(adapter.getText(elem2))
      ))
    );
  },
  "first-child"(elem, { adapter, equals }) {
    if (adapter.prevElementSibling) {
      return adapter.prevElementSibling(elem) == null;
    }
    const firstChild = adapter.getSiblings(elem).find((elem2) => adapter.isTag(elem2));
    return firstChild != null && equals(elem, firstChild);
  },
  "last-child"(elem, { adapter, equals }) {
    const siblings = adapter.getSiblings(elem);
    for (let i = siblings.length - 1; i >= 0; i--) {
      if (equals(elem, siblings[i])) {
        return true;
      }
      if (adapter.isTag(siblings[i])) {
        break;
      }
    }
    return false;
  },
  "first-of-type"(elem, { adapter, equals }) {
    const siblings = adapter.getSiblings(elem);
    const elemName = adapter.getName(elem);
    for (let i = 0; i < siblings.length; i++) {
      const currentSibling = siblings[i];
      if (equals(elem, currentSibling)) {
        return true;
      }
      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }
    return false;
  },
  "last-of-type"(elem, { adapter, equals }) {
    const siblings = adapter.getSiblings(elem);
    const elemName = adapter.getName(elem);
    for (let i = siblings.length - 1; i >= 0; i--) {
      const currentSibling = siblings[i];
      if (equals(elem, currentSibling)) {
        return true;
      }
      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }
    return false;
  },
  "only-of-type"(elem, { adapter, equals }) {
    const elemName = adapter.getName(elem);
    return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
  },
  "only-child"(elem, { adapter, equals }) {
    return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
  }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
  if (subselect === null) {
    if (func.length > argIndex) {
      throw new Error(`Pseudo-class :${name} requires an argument`);
    }
  } else if (func.length === argIndex) {
    throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
  }
}

// node_modules/css-select/dist/esm/pseudo-selectors/subselects.js
var boolbase4 = __toESM(require_boolbase(), 1);

// node_modules/css-select/dist/esm/helpers/selectors.js
function isTraversal2(token) {
  return token.type === "_flexibleDescendant" || isTraversal(token);
}
function sortRules(arr) {
  const ratings = arr.map(getQuality);
  for (let i = 1; i < arr.length; i++) {
    const procNew = ratings[i];
    if (procNew < 0) {
      continue;
    }
    for (let j = i; j > 0 && procNew < ratings[j - 1]; j--) {
      const token = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = token;
      ratings[j] = ratings[j - 1];
      ratings[j - 1] = procNew;
    }
  }
}
function getAttributeQuality(token) {
  switch (token.action) {
    case AttributeAction.Exists: {
      return 10;
    }
    case AttributeAction.Equals: {
      return token.name === "id" ? 9 : 8;
    }
    case AttributeAction.Not: {
      return 7;
    }
    case AttributeAction.Start: {
      return 6;
    }
    case AttributeAction.End: {
      return 6;
    }
    case AttributeAction.Any: {
      return 5;
    }
    case AttributeAction.Hyphen: {
      return 4;
    }
    case AttributeAction.Element: {
      return 3;
    }
  }
}
function getQuality(token) {
  switch (token.type) {
    case SelectorType.Universal: {
      return 50;
    }
    case SelectorType.Tag: {
      return 30;
    }
    case SelectorType.Attribute: {
      return Math.floor(getAttributeQuality(token) / // `ignoreCase` adds some overhead, half the result if applicable.
      (token.ignoreCase ? 2 : 1));
    }
    case SelectorType.Pseudo: {
      return !token.data ? 3 : token.name === "has" || token.name === "contains" || token.name === "icontains" ? (
        // Expensive in any case — run as late as possible.
        0
      ) : Array.isArray(token.data) ? (
        // Eg. `:is`, `:not`
        Math.max(
          // If we have traversals, try to avoid executing this selector
          0,
          Math.min(...token.data.map((d) => Math.min(...d.map(getQuality))))
        )
      ) : 2;
    }
    default: {
      return -1;
    }
  }
}
function includesScopePseudo(t) {
  return t.type === SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data) => data.some(includesScopePseudo)));
}

// node_modules/css-select/dist/esm/pseudo-selectors/subselects.js
var PLACEHOLDER_ELEMENT = {};
function hasDependsOnCurrentElement(selector) {
  return selector.some((sel) => sel.length > 0 && (isTraversal2(sel[0]) || sel.some(includesScopePseudo)));
}
function copyOptions(options) {
  return {
    xmlMode: !!options.xmlMode,
    lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
    lowerCaseTags: !!options.lowerCaseTags,
    quirksMode: !!options.quirksMode,
    cacheResults: !!options.cacheResults,
    pseudos: options.pseudos,
    adapter: options.adapter,
    equals: options.equals
  };
}
var is = (next, token, options, context, compileToken2) => {
  const func = compileToken2(token, copyOptions(options), context);
  return func === boolbase4.trueFunc ? next : func === boolbase4.falseFunc ? boolbase4.falseFunc : (elem) => func(elem) && next(elem);
};
var subselects = {
  is,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: is,
  where: is,
  not(next, token, options, context, compileToken2) {
    const func = compileToken2(token, copyOptions(options), context);
    return func === boolbase4.falseFunc ? next : func === boolbase4.trueFunc ? boolbase4.falseFunc : (elem) => !func(elem) && next(elem);
  },
  has(next, subselect, options, _context, compileToken2) {
    const { adapter } = options;
    const opts = copyOptions(options);
    opts.relativeSelector = true;
    const context = subselect.some((s) => s.some(isTraversal2)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [PLACEHOLDER_ELEMENT]
    ) : void 0;
    const skipCache = hasDependsOnCurrentElement(subselect);
    const compiled = compileToken2(subselect, opts, context);
    if (compiled === boolbase4.falseFunc) {
      return boolbase4.falseFunc;
    }
    if (context && compiled !== boolbase4.trueFunc) {
      return skipCache ? (elem) => {
        if (!next(elem)) {
          return false;
        }
        context[0] = elem;
        const childs = adapter.getChildren(elem);
        return findOne2(compiled, compiled.shouldTestNextSiblings ? [
          ...childs,
          ...getNextSiblings(elem, adapter)
        ] : childs, options) !== null;
      } : cacheParentResults(next, options, (elem) => {
        context[0] = elem;
        return findOne2(compiled, adapter.getChildren(elem), options) !== null;
      });
    }
    const hasOne = (elem) => findOne2(compiled, adapter.getChildren(elem), options) !== null;
    return skipCache ? (elem) => next(elem) && hasOne(elem) : cacheParentResults(next, options, hasOne);
  }
};

// node_modules/css-select/dist/esm/pseudo-selectors/index.js
function compilePseudoSelector(next, selector, options, context, compileToken2) {
  const { name, data } = selector;
  if (Array.isArray(data)) {
    if (!(name in subselects)) {
      throw new Error(`Unknown pseudo-class :${name}(${data})`);
    }
    return subselects[name](next, data, options, context, compileToken2);
  }
  const userPseudo = options.pseudos?.[name];
  const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
  if (typeof stringPseudo === "string") {
    if (data != null) {
      throw new Error(`Pseudo ${name} doesn't have any arguments`);
    }
    const alias = parse(stringPseudo);
    return subselects["is"](next, alias, options, context, compileToken2);
  }
  if (typeof userPseudo === "function") {
    verifyPseudoArgs(userPseudo, name, data, 1);
    return (elem) => userPseudo(elem, data) && next(elem);
  }
  if (name in filters) {
    return filters[name](next, data, options, context);
  }
  if (name in pseudos) {
    const pseudo = pseudos[name];
    verifyPseudoArgs(pseudo, name, data, 2);
    return (elem) => pseudo(elem, options, data) && next(elem);
  }
  throw new Error(`Unknown pseudo-class :${name}`);
}

// node_modules/css-select/dist/esm/general.js
function compileGeneralSelector(next, selector, options, context, compileToken2, hasExpensiveSubselector) {
  const { adapter, equals, cacheResults } = options;
  switch (selector.type) {
    case SelectorType.PseudoElement: {
      throw new Error("Pseudo-elements are not supported by css-select");
    }
    case SelectorType.ColumnCombinator: {
      throw new Error("Column combinators are not yet supported by css-select");
    }
    case SelectorType.Attribute: {
      if (selector.namespace != null) {
        throw new Error("Namespaced attributes are not yet supported by css-select");
      }
      if (!options.xmlMode || options.lowerCaseAttributeNames) {
        selector.name = selector.name.toLowerCase();
      }
      return attributeRules[selector.action](next, selector, options);
    }
    case SelectorType.Pseudo: {
      return compilePseudoSelector(next, selector, options, context, compileToken2);
    }
    // Tags
    case SelectorType.Tag: {
      if (selector.namespace != null) {
        throw new Error("Namespaced tag names are not yet supported by css-select");
      }
      let { name } = selector;
      if (!options.xmlMode || options.lowerCaseTags) {
        name = name.toLowerCase();
      }
      return function tag(elem) {
        return adapter.getName(elem) === name && next(elem);
      };
    }
    // Traversal
    case SelectorType.Descendant: {
      if (!hasExpensiveSubselector || cacheResults === false || typeof WeakMap === "undefined") {
        return function descendant(elem) {
          let current = elem;
          while (current = getElementParent(current, adapter)) {
            if (next(current)) {
              return true;
            }
          }
          return false;
        };
      }
      const resultCache = /* @__PURE__ */ new WeakMap();
      return function cachedDescendant(elem) {
        let current = elem;
        let result2;
        while (current = getElementParent(current, adapter)) {
          const cached = resultCache.get(current);
          if (cached === void 0) {
            result2 ?? (result2 = { matches: false });
            result2.matches = next(current);
            resultCache.set(current, result2);
            if (result2.matches) {
              return true;
            }
          } else {
            if (result2) {
              result2.matches = cached.matches;
            }
            return cached.matches;
          }
        }
        return false;
      };
    }
    case "_flexibleDescendant": {
      return function flexibleDescendant(elem) {
        let current = elem;
        do {
          if (next(current)) {
            return true;
          }
          current = getElementParent(current, adapter);
        } while (current);
        return false;
      };
    }
    case SelectorType.Parent: {
      return function parent(elem) {
        return adapter.getChildren(elem).some((elem2) => adapter.isTag(elem2) && next(elem2));
      };
    }
    case SelectorType.Child: {
      return function child(elem) {
        const parent = getElementParent(elem, adapter);
        return parent !== null && next(parent);
      };
    }
    case SelectorType.Sibling: {
      return function sibling(elem) {
        const siblings = adapter.getSiblings(elem);
        for (let i = 0; i < siblings.length; i++) {
          const currentSibling = siblings[i];
          if (equals(elem, currentSibling)) {
            break;
          }
          if (adapter.isTag(currentSibling) && next(currentSibling)) {
            return true;
          }
        }
        return false;
      };
    }
    case SelectorType.Adjacent: {
      if (adapter.prevElementSibling) {
        return function adjacent(elem) {
          const previous = adapter.prevElementSibling(elem);
          return previous != null && next(previous);
        };
      }
      return function adjacent(elem) {
        const siblings = adapter.getSiblings(elem);
        let lastElement;
        for (let i = 0; i < siblings.length; i++) {
          const currentSibling = siblings[i];
          if (equals(elem, currentSibling)) {
            break;
          }
          if (adapter.isTag(currentSibling)) {
            lastElement = currentSibling;
          }
        }
        return !!lastElement && next(lastElement);
      };
    }
    case SelectorType.Universal: {
      if (selector.namespace != null && selector.namespace !== "*") {
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      }
      return next;
    }
  }
}

// node_modules/css-select/dist/esm/compile.js
var DESCENDANT_TOKEN = { type: SelectorType.Descendant };
var FLEXIBLE_DESCENDANT_TOKEN = {
  type: "_flexibleDescendant"
};
var SCOPE_TOKEN = {
  type: SelectorType.Pseudo,
  name: "scope",
  data: null
};
function absolutize(token, { adapter }, context) {
  const hasContext = !!context?.every((e) => e === PLACEHOLDER_ELEMENT || adapter.isTag(e) && getElementParent(e, adapter) !== null);
  for (const t of token) {
    if (t.length > 0 && isTraversal2(t[0]) && t[0].type !== SelectorType.Descendant) {
    } else if (hasContext && !t.some(includesScopePseudo)) {
      t.unshift(DESCENDANT_TOKEN);
    } else {
      continue;
    }
    t.unshift(SCOPE_TOKEN);
  }
}
function compileToken(token, options, ctx) {
  token.forEach(sortRules);
  const { context = ctx, rootFunc = boolbase5.trueFunc } = options;
  const isArrayContext = Array.isArray(context);
  const finalContext = context && (Array.isArray(context) ? context : [context]);
  if (options.relativeSelector !== false) {
    absolutize(token, options, finalContext);
  } else if (token.some((t) => t.length > 0 && isTraversal2(t[0]))) {
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  }
  let shouldTestNextSiblings = false;
  let query = boolbase5.falseFunc;
  combineLoop: for (const rules of token) {
    if (rules.length >= 2) {
      const [first, second] = rules;
      if (first.type !== SelectorType.Pseudo || first.name !== "scope") {
      } else if (isArrayContext && second.type === SelectorType.Descendant) {
        rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
      } else if (second.type === SelectorType.Adjacent || second.type === SelectorType.Sibling) {
        shouldTestNextSiblings = true;
      }
    }
    let next = rootFunc;
    let hasExpensiveSubselector = false;
    for (const rule of rules) {
      next = compileGeneralSelector(next, rule, options, finalContext, compileToken, hasExpensiveSubselector);
      const quality = getQuality(rule);
      if (quality === 0) {
        hasExpensiveSubselector = true;
      }
      if (next === boolbase5.falseFunc) {
        continue combineLoop;
      }
    }
    if (next === rootFunc) {
      return rootFunc;
    }
    query = query === boolbase5.falseFunc ? next : or(query, next);
  }
  query.shouldTestNextSiblings = shouldTestNextSiblings;
  return query;
}
function or(a, b) {
  return (elem) => a(elem) || b(elem);
}

// node_modules/css-select/dist/esm/index.js
var defaultEquals = (a, b) => a === b;
var defaultOptions = {
  adapter: esm_exports2,
  equals: defaultEquals
};
function convertOptionFormats(options) {
  const opts = options ?? defaultOptions;
  opts.adapter ?? (opts.adapter = esm_exports2);
  opts.equals ?? (opts.equals = opts.adapter?.equals ?? defaultEquals);
  return opts;
}
function _compileUnsafe(selector, options, context) {
  return _compileToken(typeof selector === "string" ? parse(selector) : selector, options, context);
}
function _compileToken(selector, options, context) {
  return compileToken(selector, convertOptionFormats(options), context);
}
function getSelectorFunc(searchFunc) {
  return function select(query, elements, options) {
    const opts = convertOptionFormats(options);
    if (typeof query !== "function") {
      query = _compileUnsafe(query, opts, elements);
    }
    const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
    return searchFunc(query, filteredElements, opts);
  };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
  if (shouldTestNextSiblings) {
    elems = appendNextSiblings(elems, adapter);
  }
  return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
  const elems = Array.isArray(elem) ? elem.slice(0) : [elem];
  const elemsLength = elems.length;
  for (let i = 0; i < elemsLength; i++) {
    const nextSiblings = getNextSiblings(elems[i], adapter);
    elems.push(...nextSiblings);
  }
  return elems;
}
var selectAll = getSelectorFunc((query, elems, options) => query === boolbase6.falseFunc || !elems || elems.length === 0 ? [] : findAll2(query, elems, options));
var selectOne = getSelectorFunc((query, elems, options) => query === boolbase6.falseFunc || !elems || elems.length === 0 ? null : findOne2(query, elems, options));

// sources/common/data.js
function readData(text, requireEnd = false) {
  let i = 0;
  const space = () => {
    while (i < text.length) {
      if (/\s/.test(text[i])) i++;
      else if (text.startsWith("//", i)) {
        const n = text.indexOf("\n", i);
        i = n < 0 ? text.length : n + 1;
      } else if (text.startsWith("/*", i)) {
        const n = text.indexOf("*/", i + 2);
        if (n < 0) throw Error("comment");
        i = n + 2;
      } else break;
    }
  };
  const take = (c) => {
    space();
    if (text[i++] !== c) throw Error("literal");
  };
  function quoted() {
    const q = text[i++];
    let out = "";
    while (i < text.length) {
      let c = text[i++];
      if (c === q) return out;
      if (c === "\\") {
        c = text[i++];
        if (c === "u" || c === "x") {
          const n = c === "u" ? 4 : 2;
          const hex = text.slice(i, i + n);
          if (!new RegExp(`^[0-9a-fA-F]{${n}}$`).test(hex)) throw Error("escape");
          out += String.fromCharCode(parseInt(hex, 16));
          i += n;
          continue;
        }
        c = { n: "\n", r: "\r", t: "	", b: "\b", f: "\f", "\n": "" }[c] ?? c;
      }
      out += c;
    }
    throw Error("string");
  }
  function token() {
    space();
    const start = i;
    while (i < text.length && /[\w$.+\-]/.test(text[i])) i++;
    if (start === i) throw Error("token");
    return text.slice(start, i);
  }
  function read(depth = 0) {
    if (depth > 80) throw Error("depth");
    space();
    let value2;
    if (text[i] === "{") {
      i++;
      value2 = /* @__PURE__ */ Object.create(null);
      space();
      while (text[i] !== "}") {
        const key = /["']/.test(text[i]) ? quoted() : token();
        take(":");
        value2[key] = read(depth + 1);
        space();
        if (text[i] !== ",") break;
        i++;
        space();
      }
      take("}");
    } else if (text[i] === "[") {
      i++;
      value2 = [];
      space();
      while (text[i] !== "]") {
        value2.push(read(depth + 1));
        space();
        if (text[i] !== ",") break;
        i++;
        space();
      }
      take("]");
    } else if (text[i] === '"' || text[i] === "'") value2 = quoted();
    else {
      const word = token();
      if (["null", "undefined"].includes(word)) value2 = null;
      else if (word === "true" || word === "false") value2 = word === "true";
      else {
        if (!/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(word)) throw Error("expression");
        const n = Number(word);
        value2 = Number.isInteger(n) && !Number.isSafeInteger(n) && /^-?\d+$/.test(word) ? word : n;
      }
    }
    space();
    if (text[i] === "*") {
      i++;
      if (token() !== "1" || !Number.isFinite(Number(value2))) throw Error("expression");
      value2 = Number(value2);
    }
    return value2;
  }
  const value = read();
  space();
  if (requireEnd && i < text.length) throw Error("Trailing data");
  return value;
}

// sources/common/api.js
function fail(message = "Source could not find the requested content", code = "parseFailed") {
  throw Object.assign(new Error(message), { code });
}
var form = (o) => Object.entries(o).map(([k, v]) => encodeURIComponent(k).replace(/%20/g, "+") + "=" + encodeURIComponent(v).replace(/%20/g, "+")).join("&");
var digest = (algorithm, text) => createHash(algorithm).update(text).digest("hex");
var random = (length) => Array.from(randomBytes(length));

// sources/douyin/src/signing.js
var rot = (x, n) => (x << n % 32 | x >>> 32 - n % 32) >>> 0;
var utf8 = (s) => Array.from(unescape(encodeURIComponent(s)), (c) => c.charCodeAt(0));
function sm3(input) {
  const bytes = [...input, 128];
  while (bytes.length % 64 !== 56) bytes.push(0);
  const bits = input.length * 8;
  for (let i = 7; i >= 0; i--) bytes.push(Math.floor(bits / 2 ** (8 * i)) & 255);
  const state = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214];
  for (let off = 0; off < bytes.length; off += 64) {
    const w = Array(68).fill(0);
    for (let j = 0; j < 16; j++) {
      const k = off + 4 * j;
      w[j] = (bytes[k] << 24 | bytes[k + 1] << 16 | bytes[k + 2] << 8 | bytes[k + 3]) >>> 0;
    }
    for (let j = 16; j < 68; j++) {
      const x = w[j - 16] ^ w[j - 9] ^ rot(w[j - 3], 15);
      w[j] = (x ^ rot(x, 15) ^ rot(x, 23) ^ rot(w[j - 13], 7) ^ w[j - 6]) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = state;
    for (let j = 0; j < 64; j++) {
      const s1 = rot(rot(a, 12) + e + rot(j < 16 ? 2043430169 : 2055708042, j) >>> 0, 7), s2 = (s1 ^ rot(a, 12)) >>> 0, ff = (j < 16 ? a ^ b ^ c : a & b | a & c | b & c) >>> 0, gg = (j < 16 ? e ^ f ^ g : e & f | ~e & g) >>> 0, t1 = ff + d + s2 + ((w[j] ^ w[j + 4]) >>> 0) >>> 0, t2 = gg + h + s1 + w[j] >>> 0;
      d = c;
      c = rot(b, 9);
      b = a;
      a = t1;
      h = g;
      g = rot(f, 19);
      f = e;
      e = (t2 ^ rot(t2, 9) ^ rot(t2, 17)) >>> 0;
    }
    const next = [a, b, c, d, e, f, g, h];
    for (let j = 0; j < 8; j++) state[j] = (state[j] ^ next[j]) >>> 0;
  }
  return state.flatMap((w) => [24, 16, 8, 0].map((s) => w >>> s & 255));
}
async function aBogus(query, { startTime, endTime, randomValues } = {}) {
  const entropy = random(8), start = startTime ?? Date.now(), end = endTime ?? start + 4 + entropy[0] % 5, p = sm3(sm3(utf8(query + "cus"))), m = sm3(sm3(utf8("GETcus"))), browser = "1536|742|1536|864|0|0|0|0|1536|864|1536|864|1536|742|24|24|MacIntel";
  const data = [44, end >>> 24 & 255, 0, 0, 0, 0, 24, p[21], m[21], 0, 40, end >>> 16 & 255, 0, 0, 0, 1, 0, 239, p[22], m[22], 49, end >>> 8 & 255, 0, 0, 0, 0, end & 255, 0, 0, 14, start >>> 24 & 255, start >>> 16 & 255, 0, start >>> 8 & 255, start & 255, 3, Math.floor(end / 4294967296), 1, Math.floor(start / 4294967296), 1, browser.length, 0, 0, 0];
  const check = data.reduce((a, b) => a ^ b, 0);
  data.push(...Array.from(browser, (c) => c.charCodeAt(0)), check);
  const s = Array.from({ length: 256 }, (_, i2) => i2);
  let j = 0;
  for (let i2 = 0; i2 < 256; i2++) {
    j = (j + s[i2] + 121) % 256;
    [s[i2], s[j]] = [s[j], s[i2]];
  }
  let i = 0;
  j = 0;
  const cipher = [];
  for (const b of data) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    [s[i], s[j]] = [s[j], s[i]];
    cipher.push(b ^ s[(s[i] + s[j]) % 256]);
  }
  const prefix = [];
  for (let k = 0; k < 3; k++) {
    const r = randomValues?.[k] ?? (entropy[2 * k + 1] << 8 | entropy[2 * k + 2]) % 1e4, lo = r & 255, hi = r >>> 8;
    prefix.push(lo & 170 | 1, lo & 85 | (k === 0 ? 2 : 0), hi & 170 | (k === 1 ? 0 : 5), hi & 85 | (k === 0 ? 40 : 0));
  }
  const alphabet = "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe", codes = [...prefix, ...cipher];
  let out = "";
  for (let i2 = 0; i2 < codes.length; i2 += 3) {
    const n = codes[i2] << 16 | (codes[i2 + 1] ?? 0) << 8 | (codes[i2 + 2] ?? 0);
    out += alphabet[n >>> 18 & 63] + alphabet[n >>> 12 & 63];
    if (i2 + 1 < codes.length) out += alphabet[n >>> 6 & 63];
    if (i2 + 2 < codes.length) out += alphabet[n & 63];
  }
  return out.padEnd(Math.ceil(out.length / 4) * 4, "=");
}

// sources/xiaoheihe/src/signing.js
async function sign(path, { time, nonce } = {}) {
  const t = time ?? Math.floor(Date.now() / 1e3), n = nonce ?? (await digest("md5", `${t}${(await random(16)).join(",")}`)).toUpperCase(), table = "AB45STUVWZEFGJ6CH01D237IXYPQRKLMN89";
  const map = (s, cut) => Array.from(s, (c2) => table[c2.charCodeAt(0) % (table.length - cut)]).join(""), normalized = "/" + path.split("/").filter(Boolean).join("/") + "/", mapped = [map(String(t + 1), 2), map(normalized, 0), map(n, 0)];
  let mixed = "";
  for (let i = 0; i < Math.max(...mapped.map((v) => v.length)); i++) for (const s of mapped) if (i < s.length) mixed += s[i];
  const d = await digest("md5", mixed.slice(0, 20)), twice = (e) => (e << 1 ^ (e & 128 ? 27 : 0)) & 255, m3 = (e) => twice(e) ^ e, m6 = (e) => m3(twice(e)), m12 = (e) => m6(m3(twice(e))), m14 = (e) => m12(e) ^ m6(e) ^ m3(e), c = Array.from(d.slice(26), (c2) => c2.charCodeAt(0)), bytes = [m14(c[0]) ^ m12(c[1]) ^ m6(c[2]) ^ m3(c[3]), m3(c[0]) ^ m14(c[1]) ^ m12(c[2]) ^ m6(c[3]), m6(c[0]) ^ m3(c[1]) ^ m14(c[2]) ^ m12(c[3]), m12(c[0]) ^ m6(c[1]) ^ m3(c[2]) ^ m14(c[3]), ...c.slice(4)];
  return { hkey: map(d.slice(0, 5), 4) + String(bytes.reduce((a, b) => a + b, 0) % 100).padStart(2, "0"), _time: String(t), nonce: n };
}

// sources/zhihu/src/constants.js
var sm4Box = [
  20,
  223,
  245,
  7,
  248,
  2,
  194,
  209,
  87,
  6,
  227,
  253,
  240,
  128,
  222,
  91,
  237,
  9,
  125,
  157,
  230,
  93,
  252,
  205,
  90,
  79,
  144,
  199,
  159,
  197,
  186,
  167,
  39,
  37,
  156,
  198,
  38,
  42,
  43,
  168,
  217,
  153,
  15,
  103,
  80,
  189,
  71,
  191,
  97,
  84,
  247,
  95,
  36,
  69,
  14,
  35,
  12,
  171,
  28,
  114,
  178,
  148,
  86,
  182,
  32,
  83,
  158,
  109,
  22,
  255,
  94,
  238,
  151,
  85,
  77,
  124,
  254,
  18,
  4,
  26,
  123,
  176,
  232,
  193,
  131,
  172,
  143,
  142,
  150,
  30,
  10,
  146,
  162,
  62,
  224,
  218,
  196,
  229,
  1,
  192,
  213,
  27,
  110,
  56,
  231,
  180,
  138,
  107,
  242,
  187,
  54,
  120,
  19,
  44,
  117,
  228,
  215,
  203,
  53,
  239,
  251,
  127,
  81,
  11,
  133,
  96,
  204,
  132,
  41,
  115,
  73,
  55,
  249,
  147,
  102,
  48,
  122,
  145,
  106,
  118,
  74,
  190,
  29,
  16,
  174,
  5,
  177,
  129,
  63,
  113,
  99,
  31,
  161,
  76,
  246,
  34,
  211,
  13,
  60,
  68,
  207,
  160,
  65,
  111,
  82,
  165,
  67,
  169,
  225,
  57,
  112,
  244,
  155,
  51,
  236,
  200,
  233,
  58,
  61,
  47,
  100,
  137,
  185,
  64,
  17,
  70,
  234,
  163,
  219,
  108,
  170,
  166,
  59,
  149,
  52,
  105,
  24,
  212,
  78,
  173,
  45,
  0,
  116,
  226,
  119,
  136,
  206,
  135,
  175,
  195,
  25,
  92,
  121,
  208,
  126,
  139,
  3,
  75,
  141,
  21,
  130,
  98,
  241,
  40,
  154,
  66,
  184,
  49,
  181,
  46,
  243,
  88,
  101,
  183,
  8,
  23,
  72,
  188,
  104,
  179,
  210,
  134,
  250,
  201,
  164,
  89,
  216,
  202,
  220,
  50,
  221,
  152,
  140,
  33,
  235,
  214
];
var sm4Keys = [
  1170614578,
  1024848638,
  1413669199,
  3951632832,
  3528873006,
  2921909214,
  4151847688,
  3997739139,
  1933479194,
  3323781115,
  3888513386,
  460404854,
  3747539722,
  2403641034,
  2615871395,
  2119585428,
  2265697227,
  2035090028,
  2773447226,
  4289380121,
  4217216195,
  2200601443,
  3051914490,
  1579901135,
  1321810770,
  456816404,
  2903323407,
  4065664991,
  330002838,
  3506006750,
  363569021,
  2347096187
];
var zhihuAlphabet = "6fpLRqJO8M/c3jnYxFkUVC4ZIG12SiH=5v0mXDazWBTsuw7QetbKdoPyAl+hN9rgE";

// sources/zhihu/src/signing.js
var rot2 = (x, n) => (x << n | x >>> 32 - n) >>> 0;
var load = (a, i) => (a[i] << 24 | a[i + 1] << 16 | a[i + 2] << 8 | a[i + 3]) >>> 0;
function encrypt(block) {
  const x = Array(36).fill(0);
  for (let i = 0; i < 4; i++) x[i] = load(block, 4 * i);
  for (let i = 0; i < 32; i++) {
    const t = x[i + 1] ^ x[i + 2] ^ x[i + 3] ^ sm4Keys[i], e = load([sm4Box[t >>> 24 & 255], sm4Box[t >>> 16 & 255], sm4Box[t >>> 8 & 255], sm4Box[t & 255]], 0);
    x[i + 4] = (x[i] ^ e ^ rot2(e, 2) ^ rot2(e, 10) ^ rot2(e, 18) ^ rot2(e, 24)) >>> 0;
  }
  return x.slice(32).reverse().flatMap((v) => [24, 16, 8, 0].map((s) => v >>> s & 255));
}
async function sign2(path, cookie, { iv } = {}) {
  const initial = iv ?? await random(16);
  if (initial.length !== 16) throw Error("iv");
  const d = await digest("md5", `101_3_3.0+${path}+${cookie}`), plain = Array.from(d.slice(14), (c) => c.charCodeAt(0)), pad = 16 - plain.length % 16;
  plain.push(...Array(pad).fill(pad));
  let prev = [...initial];
  const blob = [...prev];
  for (let off = 0; off < plain.length; off += 16) {
    prev = encrypt(Array.from({ length: 16 }, (_, i) => plain[off + i] ^ prev[i]));
    blob.push(...prev);
  }
  const sextets = [];
  for (let i = 0; i < blob.length; i += 3) {
    const n = blob[i] << 16 | blob[i + 1] << 8 | blob[i + 2];
    for (const s of [18, 12, 6, 0]) sextets.push(n >>> s & 63);
  }
  const masks = [58, 0, 0, 0, 0, 40, 3, 0, 0, 0, 32, 14, 0, 0, 0, 0];
  return "2.0_" + Array.from({ length: 64 }, (_, i) => zhihuAlphabet[sextets[63 - i] ^ masks[i % 16]]).join("");
}

// sources/bilibili/src/signing.js
async function signWbi(query, imageUrl, subUrl, timestamp) {
  const stem = (u) => new URL(u).pathname.split("/").pop().split(".")[0], value = stem(imageUrl) + stem(subUrl);
  const order = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13];
  if (value.length < 64) fail("Invalid WBI key");
  const params = { ...query, wts: String(timestamp) }, sorted = {};
  for (const k of Object.keys(params).sort()) sorted[k] = String(params[k]).replace(/[!'()*]/g, "");
  return { ...sorted, w_rid: await digest("md5", form(sorted) + order.map((i) => value[i]).join("")) };
}

// sources/threads/src/main.js
function postId(code) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = 0n;
  for (const ch of code) {
    const n = alphabet.indexOf(ch);
    if (n < 0) fail();
    id = id * 64n + BigInt(n);
  }
  return id.toString();
}

// sources/youtube/vendor/lib.js
/*!
 * SPDX-License-Identifier: Unlicense
 * This file was automatically generated by https://github.com/yt-dlp/ejs
 *
 * Bundled Dependencies:
 *
 * ---
 * Name: meriyah
 * Version: 6.1.4
 * License: ISC
 * Repository: git+https://github.com/meriyah/meriyah.git
 * Author: Kenny F. (https://github.com/KFlash)
 *
 * ISC License
 *
 * Copyright (c) 2019 and later, KFlash and others.
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * ---
 * Name: astring
 * Version: 1.9.0
 * License: MIT
 * Repository: https://github.com/davidbonnet/astring.git
 * Author: David Bonnet <david@bonnet.cc>
 *
 * Copyright (c) 2015, David Bonnet <david@bonnet.cc>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ---
 */
var lib = (function(e) {
  "use strict";
  const t = ((e2, t2) => {
    const r2 = new Uint32Array(69632);
    let n2 = 0, o2 = 0;
    for (; n2 < 2571; ) {
      const i2 = e2[n2++];
      if (i2 < 0) o2 -= i2;
      else {
        let a2 = e2[n2++];
        2 & i2 && (a2 = t2[a2]), 1 & i2 ? r2.fill(a2, o2, o2 += e2[n2++]) : r2[o2++] = a2;
      }
    }
    return r2;
  })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 65, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2, 49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 9, 2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, 0, 12288, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14, 0, 131042, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, 2, 25, 0, 1638399, 0, 57344, 2, 109, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 48, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57, 0, 4026531840, 2, 20, 2, 43, 2, 36, 2, 18, 2, 37, 2, 18, 2, 126, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144, 2, 0, 2, 58, 2, 56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42, -6, 2, 0, 2, 45, 2, 59, 2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519, 2, 49, -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 2, 57, -13, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 92, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 154, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 60, 2, 100, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2, 32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 61, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34, -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0, 131135, 2, 98, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2, 99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 70, 2, 69, 0, 33554435, 2, 131, 2, 70, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0, 4294828e3, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 0, 1610612736, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 71, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 72, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2, 0, 2, 81, 2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2, 127, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 10, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 90, 2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 0, 4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0, 4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2, 34, 2, 153, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 57, -1, 2, 20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0, 2490368, 2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0, 4718591, 2, 127, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 17, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2, 134, 0, 2147549183, 0, 2, -2, 2, 135, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 10, -55, 3, 0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 107, -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133, -6, 2, 18, 0, 81919, -15, 2, 155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767, 4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519, 16777215, 2147483648, 4294902e3, 28, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 535511039, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64, 4294966719, 3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 4294901761]), r = (e2) => !!(1 & t[(e2 >>> 5) + 34816] >>> e2);
  function n(e2) {
    return e2.column++, e2.currentChar = e2.source.charCodeAt(++e2.index);
  }
  function o(e2) {
    const t2 = e2.currentChar;
    if (55296 != (64512 & t2)) return 0;
    const r2 = e2.source.charCodeAt(e2.index + 1);
    return 56320 != (64512 & r2) ? 0 : 65536 + ((1023 & t2) << 10) + (1023 & r2);
  }
  function i(e2, t2) {
    e2.currentChar = e2.source.charCodeAt(++e2.index), e2.flags |= 1, 4 & t2 || (e2.column = 0, e2.line++);
  }
  function a(e2) {
    e2.flags |= 1, e2.currentChar = e2.source.charCodeAt(++e2.index), e2.column = 0, e2.line++;
  }
  function s(e2) {
    return 160 === e2 || 65279 === e2 || 133 === e2 || 5760 === e2 || e2 >= 8192 && e2 <= 8203 || 8239 === e2 || 8287 === e2 || 12288 === e2 || 8201 === e2 || 65519 === e2;
  }
  function c(e2) {
    return e2 < 65 ? e2 - 48 : e2 - 65 + 10 & 15;
  }
  function l(e2) {
    switch (e2) {
      case 134283266:
        return "NumericLiteral";
      case 134283267:
        return "StringLiteral";
      case 86021:
      case 86022:
        return "BooleanLiteral";
      case 86023:
        return "NullLiteral";
      case 65540:
        return "RegularExpression";
      case 67174408:
      case 67174409:
      case 131:
        return "TemplateLiteral";
      default:
        return 143360 & ~e2 ? 4096 & ~e2 ? "Punctuator" : "Keyword" : "Identifier";
    }
  }
  const u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0], p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  function g(e2) {
    return e2 <= 127 ? p[e2] > 0 : r(e2);
  }
  function f(e2) {
    return e2 <= 127 ? d[e2] > 0 : ((e3) => !!(1 & t[(e3 >>> 5) + 0] >>> e3))(e2) || 8204 === e2 || 8205 === e2;
  }
  const h = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
  function k(e2, t2, r2, n2, o2, i2) {
    return 2 & n2 && e2.report(0), m(e2, t2, r2, o2, i2);
  }
  function m(e2, t2, r2, o2, i2) {
    const { index: s2 } = e2;
    for (e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column; e2.index < e2.end; ) {
      if (8 & u[e2.currentChar]) {
        const r3 = 13 === e2.currentChar;
        a(e2), r3 && e2.index < e2.end && 10 === e2.currentChar && (e2.currentChar = t2.charCodeAt(++e2.index));
        break;
      }
      if ((8232 ^ e2.currentChar) <= 1) {
        a(e2);
        break;
      }
      n(e2), e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column;
    }
    if (e2.options.onComment) {
      const r3 = { start: { line: i2.line, column: i2.column }, end: { line: e2.tokenLine, column: e2.tokenColumn } };
      e2.options.onComment(h[255 & o2], t2.slice(s2, e2.tokenIndex), i2.index, e2.tokenIndex, r3);
    }
    return 1 | r2;
  }
  function b(e2, t2, r2) {
    const { index: o2 } = e2;
    for (; e2.index < e2.end; ) if (e2.currentChar < 43) {
      let s2 = false;
      for (; 42 === e2.currentChar; ) if (s2 || (r2 &= -5, s2 = true), 47 === n(e2)) {
        if (n(e2), e2.options.onComment) {
          const r3 = { start: { line: e2.tokenLine, column: e2.tokenColumn }, end: { line: e2.line, column: e2.column } };
          e2.options.onComment(h[1], t2.slice(o2, e2.index - 2), o2 - 2, e2.index, r3);
        }
        return e2.tokenIndex = e2.index, e2.tokenLine = e2.line, e2.tokenColumn = e2.column, r2;
      }
      if (s2) continue;
      8 & u[e2.currentChar] ? 13 === e2.currentChar ? (r2 |= 5, a(e2)) : (i(e2, r2), r2 = -5 & r2 | 1) : n(e2);
    } else (8232 ^ e2.currentChar) <= 1 ? (r2 = -5 & r2 | 1, a(e2)) : (r2 &= -5, n(e2));
    e2.report(18);
  }
  var w, y;
  function T(e2) {
    const t2 = e2.index;
    let r2 = w.Empty;
    e: for (; ; ) {
      const t3 = e2.currentChar;
      if (n(e2), r2 & w.Escape) r2 &= ~w.Escape;
      else switch (t3) {
        case 47:
          if (r2) break;
          break e;
        case 92:
          r2 |= w.Escape;
          break;
        case 91:
          r2 |= w.Class;
          break;
        case 93:
          r2 &= w.Escape;
      }
      if (13 !== t3 && 10 !== t3 && 8232 !== t3 && 8233 !== t3 || e2.report(34), e2.index >= e2.source.length) return e2.report(34);
    }
    const o2 = e2.index - 1;
    let i2 = y.Empty, a2 = e2.currentChar;
    const { index: s2 } = e2;
    for (; f(a2); ) {
      switch (a2) {
        case 103:
          i2 & y.Global && e2.report(36, "g"), i2 |= y.Global;
          break;
        case 105:
          i2 & y.IgnoreCase && e2.report(36, "i"), i2 |= y.IgnoreCase;
          break;
        case 109:
          i2 & y.Multiline && e2.report(36, "m"), i2 |= y.Multiline;
          break;
        case 117:
          i2 & y.Unicode && e2.report(36, "u"), i2 & y.UnicodeSets && e2.report(36, "vu"), i2 |= y.Unicode;
          break;
        case 118:
          i2 & y.Unicode && e2.report(36, "uv"), i2 & y.UnicodeSets && e2.report(36, "v"), i2 |= y.UnicodeSets;
          break;
        case 121:
          i2 & y.Sticky && e2.report(36, "y"), i2 |= y.Sticky;
          break;
        case 115:
          i2 & y.DotAll && e2.report(36, "s"), i2 |= y.DotAll;
          break;
        case 100:
          i2 & y.Indices && e2.report(36, "d"), i2 |= y.Indices;
          break;
        default:
          e2.report(35);
      }
      a2 = n(e2);
    }
    const c2 = e2.source.slice(s2, e2.index), l2 = e2.source.slice(t2, o2);
    return e2.tokenRegExp = { pattern: l2, flags: c2 }, e2.options.raw && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), e2.tokenValue = (function(e3, t3, r3) {
      try {
        return new RegExp(t3, r3);
      } catch {
        try {
          return new RegExp(t3, r3), null;
        } catch {
          e3.report(34);
        }
      }
    })(e2, l2, c2), 65540;
  }
  function x(e2, t2, r2) {
    const { index: o2 } = e2;
    let i2 = "", a2 = n(e2), s2 = e2.index;
    for (; !(8 & u[a2]); ) {
      if (a2 === r2) return i2 += e2.source.slice(s2, e2.index), n(e2), e2.options.raw && (e2.tokenRaw = e2.source.slice(o2, e2.index)), e2.tokenValue = i2, 134283267;
      if (8 & ~a2 || 92 !== a2) 8232 !== a2 && 8233 !== a2 || (e2.column = -1, e2.line++);
      else {
        if (i2 += e2.source.slice(s2, e2.index), a2 = n(e2), a2 < 127 || 8232 === a2 || 8233 === a2) {
          const r3 = S(e2, t2, a2);
          r3 >= 0 ? i2 += String.fromCodePoint(r3) : v(e2, r3, 0);
        } else i2 += String.fromCodePoint(a2);
        s2 = e2.index + 1;
      }
      e2.index >= e2.end && e2.report(16), a2 = n(e2);
    }
    e2.report(16);
  }
  function S(e2, t2, r2, o2 = 0) {
    switch (r2) {
      case 98:
        return 8;
      case 102:
        return 12;
      case 114:
        return 13;
      case 110:
        return 10;
      case 116:
        return 9;
      case 118:
        return 11;
      case 13:
        if (e2.index < e2.end) {
          const t3 = e2.source.charCodeAt(e2.index + 1);
          10 === t3 && (e2.index = e2.index + 1, e2.currentChar = t3);
        }
      case 10:
      case 8232:
      case 8233:
        return e2.column = -1, e2.line++, -1;
      case 48:
      case 49:
      case 50:
      case 51: {
        let n2 = r2 - 48, i2 = e2.index + 1, a2 = e2.column + 1;
        if (i2 < e2.end) {
          const r3 = e2.source.charCodeAt(i2);
          if (32 & u[r3]) {
            if (1 & t2 || o2) return -2;
            if (e2.currentChar = r3, n2 = n2 << 3 | r3 - 48, i2++, a2++, i2 < e2.end) {
              const t3 = e2.source.charCodeAt(i2);
              32 & u[t3] && (e2.currentChar = t3, n2 = n2 << 3 | t3 - 48, i2++, a2++);
            }
            e2.flags |= 64;
          } else if (0 !== n2 || 512 & u[r3]) {
            if (1 & t2 || o2) return -2;
            e2.flags |= 64;
          }
          e2.index = i2 - 1, e2.column = a2 - 1;
        }
        return n2;
      }
      case 52:
      case 53:
      case 54:
      case 55: {
        if (o2 || 1 & t2) return -2;
        let n2 = r2 - 48;
        const i2 = e2.index + 1, a2 = e2.column + 1;
        if (i2 < e2.end) {
          const t3 = e2.source.charCodeAt(i2);
          32 & u[t3] && (n2 = n2 << 3 | t3 - 48, e2.currentChar = t3, e2.index = i2, e2.column = a2);
        }
        return e2.flags |= 64, n2;
      }
      case 120: {
        const t3 = n(e2);
        if (!(64 & u[t3])) return -4;
        const r3 = c(t3), o3 = n(e2);
        if (!(64 & u[o3])) return -4;
        return r3 << 4 | c(o3);
      }
      case 117: {
        const t3 = n(e2);
        if (123 === e2.currentChar) {
          let t4 = 0;
          for (; 64 & u[n(e2)]; ) if (t4 = t4 << 4 | c(e2.currentChar), t4 > 1114111) return -5;
          return e2.currentChar < 1 || 125 !== e2.currentChar ? -4 : t4;
        }
        {
          if (!(64 & u[t3])) return -4;
          const r3 = e2.source.charCodeAt(e2.index + 1);
          if (!(64 & u[r3])) return -4;
          const n2 = e2.source.charCodeAt(e2.index + 2);
          if (!(64 & u[n2])) return -4;
          const o3 = e2.source.charCodeAt(e2.index + 3);
          return 64 & u[o3] ? (e2.index += 3, e2.column += 3, e2.currentChar = e2.source.charCodeAt(e2.index), c(t3) << 12 | c(r3) << 8 | c(n2) << 4 | c(o3)) : -4;
        }
      }
      case 56:
      case 57:
        if (o2 || !e2.options.webcompat || 1 & t2) return -3;
        e2.flags |= 4096;
      default:
        return r2;
    }
  }
  function v(e2, t2, r2) {
    switch (t2) {
      case -1:
        return;
      case -2:
        e2.report(r2 ? 2 : 1);
      case -3:
        e2.report(r2 ? 3 : 14);
      case -4:
        e2.report(7);
      case -5:
        e2.report(104);
    }
  }
  function C(e2, t2) {
    const { index: r2 } = e2;
    let o2 = 67174409, i2 = "", a2 = n(e2);
    for (; 96 !== a2; ) {
      if (36 === a2 && 123 === e2.source.charCodeAt(e2.index + 1)) {
        n(e2), o2 = 67174408;
        break;
      }
      if (92 === a2) if (a2 = n(e2), a2 > 126) i2 += String.fromCodePoint(a2);
      else {
        const { index: r3, line: n2, column: s2 } = e2, c2 = S(e2, 1 | t2, a2, 1);
        if (c2 >= 0) i2 += String.fromCodePoint(c2);
        else {
          if (-1 !== c2 && 64 & t2) {
            e2.index = r3, e2.line = n2, e2.column = s2, i2 = null, a2 = E(e2, a2), a2 < 0 && (o2 = 67174408);
            break;
          }
          v(e2, c2, 1);
        }
      }
      else e2.index < e2.end && (13 === a2 && 10 === e2.source.charCodeAt(e2.index) && (i2 += String.fromCodePoint(a2), e2.currentChar = e2.source.charCodeAt(++e2.index)), ((83 & a2) < 3 && 10 === a2 || (8232 ^ a2) <= 1) && (e2.column = -1, e2.line++), i2 += String.fromCodePoint(a2));
      e2.index >= e2.end && e2.report(17), a2 = n(e2);
    }
    return n(e2), e2.tokenValue = i2, e2.tokenRaw = e2.source.slice(r2 + 1, e2.index - (67174409 === o2 ? 1 : 2)), o2;
  }
  function E(e2, t2) {
    for (; 96 !== t2; ) {
      switch (t2) {
        case 36: {
          const r2 = e2.index + 1;
          if (r2 < e2.end && 123 === e2.source.charCodeAt(r2)) return e2.index = r2, e2.column++, -t2;
          break;
        }
        case 10:
        case 8232:
        case 8233:
          e2.column = -1, e2.line++;
      }
      e2.index >= e2.end && e2.report(17), t2 = n(e2);
    }
    return t2;
  }
  function q(e2, t2) {
    return e2.index >= e2.end && e2.report(0), e2.index--, e2.column--, C(e2, t2);
  }
  !(function(e2) {
    e2[e2.Empty = 0] = "Empty", e2[e2.Escape = 1] = "Escape", e2[e2.Class = 2] = "Class";
  })(w || (w = {})), (function(e2) {
    e2[e2.Empty = 0] = "Empty", e2[e2.IgnoreCase = 1] = "IgnoreCase", e2[e2.Global = 2] = "Global", e2[e2.Multiline = 4] = "Multiline", e2[e2.Unicode = 16] = "Unicode", e2[e2.Sticky = 8] = "Sticky", e2[e2.DotAll = 32] = "DotAll", e2[e2.Indices = 64] = "Indices", e2[e2.UnicodeSets = 128] = "UnicodeSets";
  })(y || (y = {}));
  const N = { 0: "Unexpected token", 30: "Unexpected token: '%0'", 1: "Octal escape sequences are not allowed in strict mode", 2: "Octal escape sequences are not allowed in template strings", 3: "\\8 and \\9 are not allowed in template strings", 4: "Private identifier #%0 is not defined", 5: "Illegal Unicode escape sequence", 6: "Invalid code point %0", 7: "Invalid hexadecimal escape sequence", 9: "Octal literals are not allowed in strict mode", 8: "Decimal integer literals with a leading zero are forbidden in strict mode", 10: "Expected number in radix %0", 151: "Invalid left-hand side assignment to a destructible right-hand side", 11: "Non-number found after exponent indicator", 12: "Invalid BigIntLiteral", 13: "No identifiers allowed directly after numeric literal", 14: "Escapes \\8 or \\9 are not syntactically valid escapes", 15: "Escapes \\8 or \\9 are not allowed in strict mode", 16: "Unterminated string literal", 17: "Unterminated template literal", 18: "Multiline comment was not closed properly", 19: "The identifier contained dynamic unicode escape that was not closed", 20: "Illegal character '%0'", 21: "Missing hexadecimal digits", 22: "Invalid implicit octal", 23: "Invalid line break in string literal", 24: "Only unicode escapes are legal in identifier names", 25: "Expected '%0'", 26: "Invalid left-hand side in assignment", 27: "Invalid left-hand side in async arrow", 28: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass', 29: "Member access on super must be in a method", 31: "Await expression not allowed in formal parameter", 32: "Yield expression not allowed in formal parameter", 95: "Unexpected token: 'escaped keyword'", 33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses", 123: "Async functions can only be declared at the top level or inside a block", 34: "Unterminated regular expression", 35: "Unexpected regular expression flag", 36: "Duplicate regular expression flag '%0'", 37: "%0 functions must have exactly %1 argument%2", 38: "Setter function argument must not be a rest parameter", 39: "%0 declaration must have a name in this context", 40: "Function name may not contain any reserved words or be eval or arguments in strict mode", 41: "The rest operator is missing an argument", 42: "A getter cannot be a generator", 43: "A setter cannot be a generator", 44: "A computed property name must be followed by a colon or paren", 134: "Object literal keys that are strings or numbers must be a method or have a colon", 46: "Found `* async x(){}` but this should be `async * x(){}`", 45: "Getters and setters can not be generators", 47: "'%0' can not be generator method", 48: "No line break is allowed after '=>'", 49: "The left-hand side of the arrow can only be destructed through assignment", 50: "The binding declaration is not destructible", 51: "Async arrow can not be followed by new expression", 52: "Classes may not have a static property named 'prototype'", 53: "Class constructor may not be a %0", 54: "Duplicate constructor method in class", 55: "Invalid increment/decrement operand", 56: "Invalid use of `new` keyword on an increment/decrement expression", 57: "`=>` is an invalid assignment target", 58: "Rest element may not have a trailing comma", 59: "Missing initializer in %0 declaration", 60: "'for-%0' loop head declarations can not have an initializer", 61: "Invalid left-hand side in for-%0 loop: Must have a single binding", 62: "Invalid shorthand property initializer", 63: "Property name __proto__ appears more than once in object literal", 64: "Let is disallowed as a lexically bound name", 65: "Invalid use of '%0' inside new expression", 66: "Illegal 'use strict' directive in function with non-simple parameter list", 67: 'Identifier "let" disallowed as left-hand side expression in strict mode', 68: "Illegal continue statement", 69: "Illegal break statement", 70: "Cannot have `let[...]` as a var name in strict mode", 71: "Invalid destructuring assignment target", 72: "Rest parameter may not have a default initializer", 73: "The rest argument must the be last parameter", 74: "Invalid rest argument", 76: "In strict mode code, functions can only be declared at top level or inside a block", 77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement", 78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement", 79: "Class declaration can't appear in single-statement context", 80: "Invalid left-hand side in for-%0", 81: "Invalid assignment in for-%0", 82: "for await (... of ...) is only valid in async functions and async generators", 83: "The first token after the template expression should be a continuation of the template", 85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode", 84: "`let \n [` is a restricted production at the start of a statement", 86: "Catch clause requires exactly one parameter, not more (and no trailing comma)", 87: "Catch clause parameter does not support default values", 88: "Missing catch or finally after try", 89: "More than one default clause in switch statement", 90: "Illegal newline after throw", 91: "Strict mode code may not include a with statement", 92: "Illegal return statement", 93: "The left hand side of the for-header binding declaration is not destructible", 94: "new.target only allowed within functions or static blocks", 96: "'#' not followed by identifier", 102: "Invalid keyword", 101: "Can not use 'let' as a class name", 100: "'A lexical declaration can't define a 'let' binding", 99: "Can not use `let` as variable name in strict mode", 97: "'%0' may not be used as an identifier in this context", 98: "Await is only valid in async functions", 103: "The %0 keyword can only be used with the module goal", 104: "Unicode codepoint must not be greater than 0x10FFFF", 105: "%0 source must be string", 106: "Only a identifier or string can be used to indicate alias", 107: "Only '*' or '{...}' can be imported after default", 108: "Trailing decorator may be followed by method", 109: "Decorators can't be used with a constructor", 110: "Can not use `await` as identifier in module or async func", 111: "Can not use `await` as identifier in module", 112: "HTML comments are only allowed with web compatibility (Annex B)", 113: "The identifier 'let' must not be in expression position in strict mode", 114: "Cannot assign to `eval` and `arguments` in strict mode", 115: "The left-hand side of a for-of loop may not start with 'let'", 116: "Block body arrows can not be immediately invoked without a group", 117: "Block body arrows can not be immediately accessed without a group", 118: "Unexpected strict mode reserved word", 119: "Unexpected eval or arguments in strict mode", 120: "Decorators must not be followed by a semicolon", 121: "Calling delete on expression not allowed in strict mode", 122: "Pattern can not have a tail", 124: "Can not have a `yield` expression on the left side of a ternary", 125: "An arrow function can not have a postfix update operator", 126: "Invalid object literal key character after generator star", 127: "Private fields can not be deleted", 129: "Classes may not have a field called constructor", 128: "Classes may not have a private element named constructor", 130: "A class field initializer or static block may not contain arguments", 131: "Generators can only be declared at the top level or inside a block", 132: "Async methods are a restricted production and cannot have a newline following it", 133: "Unexpected character after object literal property name", 135: "Invalid key token", 136: "Label '%0' has already been declared", 137: "continue statement must be nested within an iteration statement", 138: "Undefined label '%0'", 139: "Trailing comma is disallowed inside import(...) arguments", 140: "Invalid binding in JSON import", 141: "import() requires exactly one argument", 142: "Cannot use new with import(...)", 143: "... is not allowed in import()", 144: "Expected '=>'", 145: "Duplicate binding '%0'", 146: "Duplicate private identifier #%0", 147: "Cannot export a duplicate name '%0'", 150: "Duplicate %0 for-binding", 148: "Exported binding '%0' needs to refer to a top-level declared variable", 149: "Unexpected private field", 153: "Numeric separators are not allowed at the end of numeric literals", 152: "Only one underscore is allowed as numeric separator", 154: "JSX value should be either an expression or a quoted JSX text", 155: "Expected corresponding JSX closing tag for %0", 156: "Adjacent JSX elements must be wrapped in an enclosing tag", 157: "JSX attributes must only be assigned a non-empty 'expression'", 158: "'%0' has already been declared", 159: "'%0' shadowed a catch clause binding", 160: "Dot property must be an identifier", 161: "Encountered invalid input after spread/rest argument", 162: "Catch without try", 163: "Finally without try", 164: "Expected corresponding closing tag for JSX fragment", 165: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses", 166: "Invalid tagged template on optional chain", 167: "Invalid optional chain from super property", 168: "Invalid optional chain from new expression", 169: 'Cannot use "import.meta" outside a module', 170: "Leading decorators must be attached to a class declaration", 171: "An export name cannot include a lone surrogate, found %0", 172: "A string literal cannot be used as an exported binding without `from`", 173: "Private fields can't be accessed on super", 174: "The only valid meta property for import is 'import.meta'", 175: "'import.meta' must not contain escaped characters", 176: 'cannot use "await" as identifier inside an async function', 177: 'cannot use "await" in static blocks' };
  class L extends SyntaxError {
    start;
    end;
    range;
    loc;
    description;
    constructor(e2, t2, r2, ...n2) {
      const o2 = N[r2].replace(/%(\d+)/g, (e3, t3) => n2[t3]);
      super("[" + e2.line + ":" + e2.column + "-" + t2.line + ":" + t2.column + "]: " + o2), this.start = e2.index, this.end = t2.index, this.range = [e2.index, t2.index], this.loc = { start: { line: e2.line, column: e2.column }, end: { line: t2.line, column: t2.column } }, this.description = o2;
    }
  }
  function A(e2, t2, r2) {
    let o2 = e2.currentChar, i2 = 0, a2 = 9, s2 = 64 & r2 ? 0 : 1, l2 = 0, p2 = 0;
    if (64 & r2) i2 = "." + I(e2, o2), o2 = e2.currentChar, 110 === o2 && e2.report(12);
    else {
      if (48 === o2) if (o2 = n(e2), 120 == (32 | o2)) {
        for (r2 = 136, o2 = n(e2); 4160 & u[o2]; ) 95 !== o2 ? (p2 = 1, i2 = 16 * i2 + c(o2), l2++, o2 = n(e2)) : (p2 || e2.report(152), p2 = 0, o2 = n(e2));
        0 !== l2 && p2 || e2.report(0 === l2 ? 21 : 153);
      } else if (111 == (32 | o2)) {
        for (r2 = 132, o2 = n(e2); 4128 & u[o2]; ) 95 !== o2 ? (p2 = 1, i2 = 8 * i2 + (o2 - 48), l2++, o2 = n(e2)) : (p2 || e2.report(152), p2 = 0, o2 = n(e2));
        0 !== l2 && p2 || e2.report(0 === l2 ? 0 : 153);
      } else if (98 == (32 | o2)) {
        for (r2 = 130, o2 = n(e2); 4224 & u[o2]; ) 95 !== o2 ? (p2 = 1, i2 = 2 * i2 + (o2 - 48), l2++, o2 = n(e2)) : (p2 || e2.report(152), p2 = 0, o2 = n(e2));
        0 !== l2 && p2 || e2.report(0 === l2 ? 0 : 153);
      } else if (32 & u[o2]) for (1 & t2 && e2.report(1), r2 = 1; 16 & u[o2]; ) {
        if (512 & u[o2]) {
          r2 = 32, s2 = 0;
          break;
        }
        i2 = 8 * i2 + (o2 - 48), o2 = n(e2);
      }
      else 512 & u[o2] ? (1 & t2 && e2.report(1), e2.flags |= 64, r2 = 32) : 95 === o2 && e2.report(0);
      if (48 & r2) {
        if (s2) {
          for (; a2 >= 0 && 4112 & u[o2]; ) if (95 !== o2) p2 = 0, i2 = 10 * i2 + (o2 - 48), o2 = n(e2), --a2;
          else {
            if (o2 = n(e2), 95 === o2 || 32 & r2) throw new L(e2.currentLocation, { index: e2.index + 1, line: e2.line, column: e2.column }, 152);
            p2 = 1;
          }
          if (p2) throw new L(e2.currentLocation, { index: e2.index + 1, line: e2.line, column: e2.column }, 153);
          if (a2 >= 0 && !g(o2) && 46 !== o2) return e2.tokenValue = i2, e2.options.raw && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), 134283266;
        }
        i2 += I(e2, o2), o2 = e2.currentChar, 46 === o2 && (95 === n(e2) && e2.report(0), r2 = 64, i2 += "." + I(e2, e2.currentChar), o2 = e2.currentChar);
      }
    }
    const d2 = e2.index;
    let f2 = 0;
    if (110 === o2 && 128 & r2) f2 = 1, o2 = n(e2);
    else if (101 == (32 | o2)) {
      o2 = n(e2), 256 & u[o2] && (o2 = n(e2));
      const { index: t3 } = e2;
      16 & u[o2] || e2.report(11), i2 += e2.source.substring(d2, t3) + I(e2, o2), o2 = e2.currentChar;
    }
    return (e2.index < e2.end && 16 & u[o2] || g(o2)) && e2.report(13), f2 ? (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index), e2.tokenValue = BigInt(e2.tokenRaw.slice(0, -1).replaceAll("_", "")), 134283388) : (e2.tokenValue = 15 & r2 ? i2 : 32 & r2 ? parseFloat(e2.source.substring(e2.tokenIndex, e2.index)) : +i2, e2.options.raw && (e2.tokenRaw = e2.source.slice(e2.tokenIndex, e2.index)), 134283266);
  }
  function I(e2, t2) {
    let r2 = 0, o2 = e2.index, i2 = "";
    for (; 4112 & u[t2]; ) {
      if (95 === t2) {
        const { index: a2 } = e2;
        if (95 === (t2 = n(e2))) throw new L(e2.currentLocation, { index: e2.index + 1, line: e2.line, column: e2.column }, 152);
        r2 = 1, i2 += e2.source.substring(o2, a2), o2 = e2.index;
        continue;
      }
      r2 = 0, t2 = n(e2);
    }
    if (r2) throw new L(e2.currentLocation, { index: e2.index + 1, line: e2.line, column: e2.column }, 153);
    return i2 + e2.source.substring(o2, e2.index);
  }
  const D = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", '"', "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "accessor", "from", "of", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"], V = { this: 86111, function: 86104, if: 20569, return: 20572, var: 86088, else: 20563, for: 20567, new: 86107, in: 8673330, typeof: 16863275, while: 20578, case: 20556, break: 20555, try: 20577, catch: 20557, delete: 16863276, throw: 86112, switch: 86110, continue: 20559, default: 20561, instanceof: 8411187, do: 20562, void: 16863277, finally: 20566, async: 209005, await: 209006, class: 86094, const: 86090, constructor: 12399, debugger: 20560, export: 20564, extends: 20565, false: 86021, from: 209011, get: 209008, implements: 36964, import: 86106, interface: 36965, let: 241737, null: 86023, of: 471156, package: 36966, private: 36967, protected: 36968, public: 36969, set: 209009, static: 36970, super: 86109, true: 86022, with: 20579, yield: 241771, enum: 86133, eval: 537079926, as: 77932, arguments: 537079927, target: 209029, meta: 209030, accessor: 12402 };
  function P(e2, t2) {
    !(1 & e2.flags) && 1048576 & ~e2.getToken() && e2.report(30, D[255 & e2.getToken()]), U(e2, t2, 1074790417) || e2.options.onInsertedSemicolon?.(e2.startIndex);
  }
  function R(e2, t2, r2, n2) {
    return t2 - r2 < 13 && "use strict" === n2 && (!(1048576 & ~e2.getToken()) || 1 & e2.flags) ? 1 : 0;
  }
  function B(e2, t2, r2) {
    return e2.getToken() !== r2 ? 0 : (ee(e2, t2), 1);
  }
  function U(e2, t2, r2) {
    return e2.getToken() === r2 && (ee(e2, t2), true);
  }
  function O(e2, t2, r2) {
    e2.getToken() !== r2 && e2.report(25, D[255 & r2]), ee(e2, t2);
  }
  function M(e2, t2) {
    switch (t2.type) {
      case "ArrayExpression": {
        t2.type = "ArrayPattern";
        const { elements: r2 } = t2;
        for (let t3 = 0, n2 = r2.length; t3 < n2; ++t3) {
          const n3 = r2[t3];
          n3 && M(e2, n3);
        }
        return;
      }
      case "ObjectExpression": {
        t2.type = "ObjectPattern";
        const { properties: r2 } = t2;
        for (let t3 = 0, n2 = r2.length; t3 < n2; ++t3) M(e2, r2[t3]);
        return;
      }
      case "AssignmentExpression":
        return t2.type = "AssignmentPattern", "=" !== t2.operator && e2.report(71), delete t2.operator, void M(e2, t2.left);
      case "Property":
        return void M(e2, t2.value);
      case "SpreadElement":
        t2.type = "RestElement", M(e2, t2.argument);
    }
  }
  function j(e2, t2, r2, n2, o2) {
    1 & t2 && (36864 & ~n2 || e2.report(118), o2 || 537079808 & ~n2 || e2.report(119)), 20480 & ~n2 && -2147483528 !== n2 || e2.report(102), 24 & r2 && 73 == (255 & n2) && e2.report(100), 2050 & t2 && 209006 === n2 && e2.report(110), 1025 & t2 && 241771 === n2 && e2.report(97, "yield");
  }
  function F(e2, t2, r2) {
    1 & t2 && (36864 & ~r2 || e2.report(118), 537079808 & ~r2 || e2.report(119), -2147483527 === r2 && e2.report(95), -2147483528 === r2 && e2.report(95)), 20480 & ~r2 || e2.report(102), 2050 & t2 && 209006 === r2 && e2.report(110), 1025 & t2 && 241771 === r2 && e2.report(97, "yield");
  }
  function G(e2, t2, r2) {
    return 209006 === r2 && (2050 & t2 && e2.report(110), e2.destructible |= 128), 241771 === r2 && 1024 & t2 && e2.report(97, "yield"), !(20480 & ~r2 && 36864 & ~r2 && -2147483527 != r2);
  }
  function J(e2, t2, r2, n2) {
    for (; t2; ) {
      if (t2["$" + r2]) return n2 && e2.report(137), 1;
      n2 && t2.loop && (n2 = 0), t2 = t2.$;
    }
    return 0;
  }
  function z(e2) {
    switch (e2.type) {
      case "JSXIdentifier":
        return e2.name;
      case "JSXNamespacedName":
        return e2.namespace + ":" + e2.name;
      case "JSXMemberExpression":
        return z(e2.object) + "." + z(e2.property);
    }
  }
  function H(e2, t2) {
    return 1025 & e2 ? !(2 & e2 && 209006 === t2) && (!(1024 & e2 && 241771 === t2) && !(12288 & ~t2)) : !(12288 & ~t2 && 36864 & ~t2);
  }
  function X(e2, t2, r2) {
    537079808 & ~r2 || (1 & t2 && e2.report(119), e2.flags |= 512), H(t2, r2) || e2.report(0);
  }
  function $(e2, t2) {
    return Object.hasOwn(e2, t2) ? e2[t2] : void 0;
  }
  function W(e2, t2, r2) {
    for (; d[n(e2)]; ) ;
    return e2.tokenValue = e2.source.slice(e2.tokenIndex, e2.index), 92 !== e2.currentChar && e2.currentChar <= 126 ? $(V, e2.tokenValue) ?? 208897 : Y(e2, t2, 0, r2);
  }
  function _(e2, t2) {
    const r2 = K(e2);
    return g(r2) || e2.report(5), e2.tokenValue = String.fromCodePoint(r2), Y(e2, t2, 1, 4 & u[r2]);
  }
  function Y(e2, t2, r2, i2) {
    let a2 = e2.index;
    for (; e2.index < e2.end; ) if (92 === e2.currentChar) {
      e2.tokenValue += e2.source.slice(a2, e2.index), r2 = 1;
      const t3 = K(e2);
      f(t3) || e2.report(5), i2 = i2 && 4 & u[t3], e2.tokenValue += String.fromCodePoint(t3), a2 = e2.index;
    } else {
      const t3 = o(e2);
      if (t3 > 0) f(t3) || e2.report(20, String.fromCodePoint(t3)), e2.currentChar = t3, e2.index++, e2.column++;
      else if (!f(e2.currentChar)) break;
      n(e2);
    }
    e2.index <= e2.end && (e2.tokenValue += e2.source.slice(a2, e2.index));
    const { length: s2 } = e2.tokenValue;
    if (i2 && s2 >= 2 && s2 <= 11) {
      const n2 = $(V, e2.tokenValue);
      return void 0 === n2 ? 208897 | (r2 ? -2147483648 : 0) : r2 ? 209006 === n2 ? 2050 & t2 ? -2147483528 : -2147483648 | n2 : 1 & t2 ? 36970 === n2 ? -2147483527 : 36864 & ~n2 ? 20480 & ~n2 ? -2147274630 : 262144 & t2 && !(8 & t2) ? -2147483648 | n2 : -2147483528 : -2147483527 : !(262144 & t2) || 8 & t2 || 20480 & ~n2 ? 241771 === n2 ? 262144 & t2 ? -2147274630 : 1024 & t2 ? -2147483528 : -2147483648 | n2 : 209005 === n2 ? -2147274630 : 36864 & ~n2 ? -2147483528 : 12288 | n2 | -2147483648 : -2147483648 | n2 : n2;
    }
    return 208897 | (r2 ? -2147483648 : 0);
  }
  function Z(e2) {
    let t2 = n(e2);
    if (92 === t2) return 130;
    const r2 = o(e2);
    return r2 && (t2 = r2), g(t2) || e2.report(96), 130;
  }
  function K(e2) {
    return 117 !== e2.source.charCodeAt(e2.index + 1) && e2.report(5), e2.currentChar = e2.source.charCodeAt(e2.index += 2), e2.column += 2, (function(e3) {
      let t2 = 0;
      const r2 = e3.currentChar;
      if (123 === r2) {
        const r3 = e3.index - 2;
        for (; 64 & u[n(e3)]; ) if (t2 = t2 << 4 | c(e3.currentChar), t2 > 1114111) throw new L({ index: r3, line: e3.line, column: e3.column }, e3.currentLocation, 104);
        if (125 !== e3.currentChar) throw new L({ index: r3, line: e3.line, column: e3.column }, e3.currentLocation, 7);
        return n(e3), t2;
      }
      64 & u[r2] || e3.report(7);
      const o2 = e3.source.charCodeAt(e3.index + 1);
      64 & u[o2] || e3.report(7);
      const i2 = e3.source.charCodeAt(e3.index + 2);
      64 & u[i2] || e3.report(7);
      const a2 = e3.source.charCodeAt(e3.index + 3);
      64 & u[a2] || e3.report(7);
      return t2 = c(r2) << 12 | c(o2) << 8 | c(i2) << 4 | c(a2), e3.currentChar = e3.source.charCodeAt(e3.index += 4), e3.column += 4, t2;
    })(e2);
  }
  const Q = [128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 135, 127, 127, 129, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 16842798, 134283267, 130, 208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 132, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 136, 20, 8389959, 208897, 131, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 128];
  function ee(e2, t2) {
    e2.flags = 1 ^ (1 | e2.flags), e2.startIndex = e2.index, e2.startColumn = e2.column, e2.startLine = e2.line, e2.setToken(te(e2, t2, 0));
  }
  function te(e2, t2, c2) {
    const l2 = 0 === e2.index, { source: u2 } = e2;
    let p2 = e2.currentLocation;
    for (; e2.index < e2.end; ) {
      e2.tokenIndex = e2.index, e2.tokenColumn = e2.column, e2.tokenLine = e2.line;
      let d2 = e2.currentChar;
      if (d2 <= 126) {
        const r2 = Q[d2];
        switch (r2) {
          case 67174411:
          case 16:
          case 2162700:
          case 1074790415:
          case 69271571:
          case 20:
          case 21:
          case 1074790417:
          case 18:
          case 16842799:
          case 132:
          case 128:
            return n(e2), r2;
          case 208897:
            return W(e2, t2, 0);
          case 4096:
            return W(e2, t2, 1);
          case 134283266:
            return A(e2, t2, 144);
          case 134283267:
            return x(e2, t2, d2);
          case 131:
            return C(e2, t2);
          case 136:
            return _(e2, t2);
          case 130:
            return Z(e2);
          case 127:
            n(e2);
            break;
          case 129:
            c2 |= 5, a(e2);
            break;
          case 135:
            i(e2, c2), c2 = -5 & c2 | 1;
            break;
          case 8456256: {
            const r3 = n(e2);
            if (e2.index < e2.end) {
              if (60 === r3) return e2.index < e2.end && 61 === n(e2) ? (n(e2), 4194332) : 8390978;
              if (61 === r3) return n(e2), 8390718;
              if (33 === r3) {
                const r4 = e2.index + 1;
                if (r4 + 1 < e2.end && 45 === u2.charCodeAt(r4) && 45 == u2.charCodeAt(r4 + 1)) {
                  e2.column += 3, e2.currentChar = u2.charCodeAt(e2.index += 3), c2 = k(e2, u2, c2, t2, 2, e2.tokenStart), p2 = e2.tokenStart;
                  continue;
                }
                return 8456256;
              }
            }
            return 8456256;
          }
          case 1077936155: {
            n(e2);
            const t3 = e2.currentChar;
            return 61 === t3 ? 61 === n(e2) ? (n(e2), 8390458) : 8390460 : 62 === t3 ? (n(e2), 10) : 1077936155;
          }
          case 16842798:
            return 61 !== n(e2) ? 16842798 : 61 !== n(e2) ? 8390461 : (n(e2), 8390459);
          case 8391477:
            return 61 !== n(e2) ? 8391477 : (n(e2), 4194340);
          case 8391476: {
            if (n(e2), e2.index >= e2.end) return 8391476;
            const t3 = e2.currentChar;
            return 61 === t3 ? (n(e2), 4194338) : 42 !== t3 ? 8391476 : 61 !== n(e2) ? 8391735 : (n(e2), 4194335);
          }
          case 8389959:
            return 61 !== n(e2) ? 8389959 : (n(e2), 4194341);
          case 25233968: {
            n(e2);
            const t3 = e2.currentChar;
            return 43 === t3 ? (n(e2), 33619993) : 61 === t3 ? (n(e2), 4194336) : 25233968;
          }
          case 25233969: {
            n(e2);
            const r3 = e2.currentChar;
            if (45 === r3) {
              if (n(e2), (1 & c2 || l2) && 62 === e2.currentChar) {
                e2.options.webcompat || e2.report(112), n(e2), c2 = k(e2, u2, c2, t2, 3, p2), p2 = e2.tokenStart;
                continue;
              }
              return 33619994;
            }
            return 61 === r3 ? (n(e2), 4194337) : 25233969;
          }
          case 8457014:
            if (n(e2), e2.index < e2.end) {
              const r3 = e2.currentChar;
              if (47 === r3) {
                n(e2), c2 = m(e2, u2, c2, 0, e2.tokenStart), p2 = e2.tokenStart;
                continue;
              }
              if (42 === r3) {
                n(e2), c2 = b(e2, u2, c2), p2 = e2.tokenStart;
                continue;
              }
              if (32 & t2) return T(e2);
              if (61 === r3) return n(e2), 4259875;
            }
            return 8457014;
          case 67108877: {
            const r3 = n(e2);
            if (r3 >= 48 && r3 <= 57) return A(e2, t2, 80);
            if (46 === r3) {
              const t3 = e2.index + 1;
              if (t3 < e2.end && 46 === u2.charCodeAt(t3)) return e2.column += 2, e2.currentChar = u2.charCodeAt(e2.index += 2), 14;
            }
            return 67108877;
          }
          case 8389702: {
            n(e2);
            const t3 = e2.currentChar;
            return 124 === t3 ? (n(e2), 61 === e2.currentChar ? (n(e2), 4194344) : 8913465) : 61 === t3 ? (n(e2), 4194342) : 8389702;
          }
          case 8390721: {
            n(e2);
            const t3 = e2.currentChar;
            if (61 === t3) return n(e2), 8390719;
            if (62 !== t3) return 8390721;
            if (n(e2), e2.index < e2.end) {
              const t4 = e2.currentChar;
              if (62 === t4) return 61 === n(e2) ? (n(e2), 4194334) : 8390980;
              if (61 === t4) return n(e2), 4194333;
            }
            return 8390979;
          }
          case 8390213: {
            n(e2);
            const t3 = e2.currentChar;
            return 38 === t3 ? (n(e2), 61 === e2.currentChar ? (n(e2), 4194345) : 8913720) : 61 === t3 ? (n(e2), 4194343) : 8390213;
          }
          case 22: {
            let t3 = n(e2);
            if (63 === t3) return n(e2), 61 === e2.currentChar ? (n(e2), 4194346) : 276824445;
            if (46 === t3) {
              const r3 = e2.index + 1;
              if (r3 < e2.end && (t3 = u2.charCodeAt(r3), !(t3 >= 48 && t3 <= 57))) return n(e2), 67108990;
            }
            return 22;
          }
        }
      } else {
        if ((8232 ^ d2) <= 1) {
          c2 = -5 & c2 | 1, a(e2);
          continue;
        }
        const i2 = o(e2);
        if (i2 > 0 && (d2 = i2), r(d2)) return e2.tokenValue = "", Y(e2, t2, 0, 0);
        if (s(d2)) {
          n(e2);
          continue;
        }
        e2.report(20, String.fromCodePoint(d2));
      }
    }
    return 1048576;
  }
  const re = { AElig: "\xC6", AMP: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", Aring: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", Bcy: "\u0411", Because: "\u2235", Bernoullis: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", Bscr: "\u212C", Bumpeq: "\u224E", CHcy: "\u0427", COPY: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", Cayleys: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", CenterDot: "\xB7", Cfr: "\u212D", Chi: "\u03A7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", Colon: "\u2237", Colone: "\u2A74", Congruent: "\u2261", Conint: "\u222F", ContourIntegral: "\u222E", Copf: "\u2102", Coproduct: "\u2210", CounterClockwiseContourIntegral: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", DD: "\u2145", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", Diamond: "\u22C4", DifferentialD: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", Downarrow: "\u21D3", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", Equilibrium: "\u21CC", Escr: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", ExponentialE: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", HilbertSpace: "\u210B", Hopf: "\u210D", HorizontalLine: "\u2500", Hscr: "\u210B", Hstrok: "\u0126", HumpDownHump: "\u224E", HumpEqual: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Igrave: "\xCC", Im: "\u2111", Imacr: "\u012A", ImaginaryI: "\u2148", Implies: "\u21D2", Int: "\u222C", Integral: "\u222B", Intersection: "\u22C2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Larr: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", LeftRightArrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", Leftarrow: "\u21D0", Leftrightarrow: "\u21D4", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", LongLeftRightArrow: "\u27F7", LongRightArrow: "\u27F6", Longleftarrow: "\u27F8", Longleftrightarrow: "\u27FA", Longrightarrow: "\u27F9", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", Lscr: "\u2112", Lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", Mopf: "\u{1D544}", Mscr: "\u2133", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", Poincareplane: "\u210C", Popf: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", Prime: "\u2033", Product: "\u220F", Proportion: "\u2237", Proportional: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', Qfr: "\u{1D514}", Qopf: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", REG: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", Rfr: "\u211C", Rho: "\u03A1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", Rightarrow: "\u21D2", Ropf: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", Rscr: "\u211B", Rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", SuchThat: "\u220B", Sum: "\u2211", Sup: "\u22D1", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22D1", THORN: "\xDE", TRADE: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", UpEquilibrium: "\u296E", UpTee: "\u22A5", UpTeeArrow: "\u21A5", Uparrow: "\u21D1", Updownarrow: "\u21D5", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", ZeroWidthSpace: "\u200B", Zeta: "\u0396", Zfr: "\u2128", Zopf: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acute: "\xB4", acy: "\u0430", aelig: "\xE6", af: "\u2061", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", amp: "&", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", ap: "\u2248", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", apid: "\u224B", apos: "'", approx: "\u2248", approxeq: "\u224A", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", asymp: "\u2248", asympeq: "\u224D", atilde: "\xE3", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", beta: "\u03B2", beth: "\u2136", between: "\u226C", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxh: "\u2500", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", bprime: "\u2035", breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", bumpeq: "\u224F", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cedil: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledR: "\xAE", circledS: "\u24C8", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", conint: "\u222E", copf: "\u{1D554}", coprod: "\u2210", copy: "\xA9", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dArr: "\u21D3", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", darr: "\u2193", dash: "\u2010", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", dcaron: "\u010F", dcy: "\u0434", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", ddotseq: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", dharl: "\u21C3", dharr: "\u21C2", diam: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", dot: "\u02D9", doteq: "\u2250", doteqdot: "\u2251", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", downarrow: "\u2193", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eDDot: "\u2A77", eDot: "\u2251", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", ecirc: "\xEA", ecolon: "\u2255", ecy: "\u044D", edot: "\u0117", ee: "\u2147", efDot: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", equals: "=", equest: "\u225F", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", erarr: "\u2971", escr: "\u212F", esdot: "\u2250", esim: "\u2242", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", expectation: "\u2130", exponentiale: "\u2147", fallingdotseq: "\u2252", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", gE: "\u2267", gEl: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gammad: "\u03DD", gap: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", ge: "\u2265", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", gjcy: "\u0453", gl: "\u2277", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", gopf: "\u{1D558}", grave: "`", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hArr: "\u21D4", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", hardcy: "\u044A", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", hbar: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hslash: "\u210F", hstrok: "\u0127", hybull: "\u2043", hyphen: "\u2010", iacute: "\xED", ic: "\u2063", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", image: "\u2111", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", int: "\u222B", intcal: "\u22BA", integers: "\u2124", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", isin: "\u2208", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAarr: "\u21DA", lArr: "\u21D0", lAtail: "\u291B", lBarr: "\u290E", lE: "\u2266", lEg: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", lambda: "\u03BB", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", laquo: "\xAB", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lceil: "\u2308", lcub: "{", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leftarrow: "\u2190", leftarrowtail: "\u21A2", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", leftthreetimes: "\u22CB", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", lessgtr: "\u2276", lesssim: "\u2272", lfisht: "\u297C", lfloor: "\u230A", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", lstrok: "\u0142", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", measuredangle: "\u2221", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", mstpos: "\u223E", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nGtv: "\u226B\u0338", nLeftarrow: "\u21CD", nLeftrightarrow: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nLtv: "\u226A\u0338", nRightarrow: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", neArr: "\u21D7", nearhk: "\u2924", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", ngsim: "\u2275", ngt: "\u226F", ngtr: "\u226F", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", njcy: "\u045A", nlArr: "\u21CD", nlE: "\u2266\u0338", nlarr: "\u219A", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219A", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nlsim: "\u2274", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nmid: "\u2224", nopf: "\u{1D55F}", not: "\xAC", notin: "\u2209", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", oS: "\u24C8", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", ocirc: "\xF4", ocy: "\u043E", odash: "\u229D", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", oplus: "\u2295", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oscr: "\u2134", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimes: "\u2297", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", pr: "\u227A", prE: "\u2AB3", prap: "\u2AB7", prcue: "\u227C", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", prime: "\u2032", primes: "\u2119", prnE: "\u2AB5", prnap: "\u2AB9", prnsim: "\u22E8", prod: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', rAarr: "\u21DB", rArr: "\u21D2", rAtail: "\u291C", rBarr: "\u290F", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", reg: "\xAE", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", rightarrow: "\u2192", rightarrowtail: "\u21A3", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", rightthreetimes: "\u22CC", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", rsaquo: "\u203A", rscr: "\u{1D4C7}", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", sbquo: "\u201A", sc: "\u227B", scE: "\u2AB4", scap: "\u2AB8", scaron: "\u0161", sccue: "\u227D", sce: "\u2AB0", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", scnap: "\u2ABA", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", seArr: "\u21D8", searhk: "\u2925", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shortmid: "\u2223", shortparallel: "\u2225", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", square: "\u25A1", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", subE: "\u2AC5", subdot: "\u2ABD", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", supE: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supe: "\u2287", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swarhk: "\u2926", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tbrk: "\u23B4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", thorn: "\xFE", tilde: "\u02DC", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", uArr: "\u21D1", uHar: "\u2963", uacute: "\xFA", uarr: "\u2191", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udarr: "\u21C5", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uml: "\xA8", uogon: "\u0173", uopf: "\u{1D566}", uparrow: "\u2191", updownarrow: "\u2195", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", upsi: "\u03C5", upsih: "\u03D2", upsilon: "\u03C5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", uuml: "\xFC", uwangle: "\u29A7", vArr: "\u21D5", vBar: "\u2AE8", vBarv: "\u2AE9", vDash: "\u22A8", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vcy: "\u0432", vdash: "\u22A2", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", vert: "|", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeetrf: "\u2128", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, ne = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
  function oe(e2) {
    return e2.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (e3) => {
      if ("#" === e3.charAt(1)) {
        const t2 = e3.charAt(2);
        return (function(e4) {
          if (e4 >= 55296 && e4 <= 57343 || e4 > 1114111) return "\uFFFD";
          return String.fromCodePoint($(ne, e4) ?? e4);
        })("X" === t2 || "x" === t2 ? parseInt(e3.slice(3), 16) : parseInt(e3.slice(2), 10));
      }
      return $(re, e3.slice(1, -1)) ?? e3;
    });
  }
  function ie(e2, t2) {
    return e2.startIndex = e2.tokenIndex = e2.index, e2.startColumn = e2.tokenColumn = e2.column, e2.startLine = e2.tokenLine = e2.line, e2.setToken(8192 & u[e2.currentChar] ? (function(e3) {
      const t3 = e3.currentChar;
      let r2 = n(e3);
      const o2 = e3.index;
      for (; r2 !== t3; ) e3.index >= e3.end && e3.report(16), r2 = n(e3);
      r2 !== t3 && e3.report(16);
      e3.tokenValue = e3.source.slice(o2, e3.index), n(e3), e3.options.raw && (e3.tokenRaw = e3.source.slice(e3.tokenIndex, e3.index));
      return 134283267;
    })(e2) : te(e2, t2, 0)), e2.getToken();
  }
  function ae(e2) {
    if (e2.startIndex = e2.tokenIndex = e2.index, e2.startColumn = e2.tokenColumn = e2.column, e2.startLine = e2.tokenLine = e2.line, e2.index >= e2.end) return void e2.setToken(1048576);
    if (60 === e2.currentChar) return n(e2), void e2.setToken(8456256);
    if (123 === e2.currentChar) return n(e2), void e2.setToken(2162700);
    let t2 = 0;
    for (; e2.index < e2.end; ) {
      const r3 = u[e2.source.charCodeAt(e2.index)];
      if (1024 & r3 ? (t2 |= 5, a(e2)) : 2048 & r3 ? (i(e2, t2), t2 = -5 & t2 | 1) : n(e2), 16384 & u[e2.currentChar]) break;
    }
    e2.tokenIndex === e2.index && e2.report(0);
    const r2 = e2.source.slice(e2.tokenIndex, e2.index);
    e2.options.raw && (e2.tokenRaw = r2), e2.tokenValue = oe(r2), e2.setToken(137);
  }
  function se(e2) {
    if (!(143360 & ~e2.getToken())) {
      const { index: t2 } = e2;
      let r2 = e2.currentChar;
      for (; 32770 & u[r2]; ) r2 = n(e2);
      e2.tokenValue += e2.source.slice(t2, e2.index), e2.setToken(208897, true);
    }
    return e2.getToken();
  }
  class ce {
    parser;
    type;
    parent;
    scopeError;
    variableBindings = /* @__PURE__ */ new Map();
    constructor(e2, t2 = 2, r2) {
      this.parser = e2, this.type = t2, this.parent = r2;
    }
    createChildScope(e2) {
      return new ce(this.parser, e2, this);
    }
    addVarOrBlock(e2, t2, r2, n2) {
      4 & r2 ? this.addVarName(e2, t2, r2) : this.addBlockName(e2, t2, r2, n2), 64 & n2 && this.parser.declareUnboundVariable(t2);
    }
    addVarName(e2, t2, r2) {
      const { parser: n2 } = this;
      let o2 = this;
      for (; o2 && !(128 & o2.type); ) {
        const { variableBindings: i2 } = o2, a2 = i2.get(t2);
        a2 && 248 & a2 && (!n2.options.webcompat || 1 & e2 || !(128 & r2 && 68 & a2 || 128 & a2 && 68 & r2)) && n2.report(145, t2), o2 === this && a2 && 1 & a2 && 1 & r2 && o2.recordScopeError(145, t2), a2 && (256 & a2 || 512 & a2 && !n2.options.webcompat) && n2.report(145, t2), o2.variableBindings.set(t2, r2), o2 = o2.parent;
      }
    }
    hasVariable(e2) {
      return this.variableBindings.has(e2);
    }
    addBlockName(e2, t2, r2, n2) {
      const { parser: o2 } = this, i2 = this.variableBindings.get(t2);
      !i2 || 2 & i2 || (1 & r2 ? this.recordScopeError(145, t2) : o2.options.webcompat && !(1 & e2) && 2 & n2 && 64 === i2 && 64 === r2 || o2.report(145, t2)), 64 & this.type && this.parent?.hasVariable(t2) && !(2 & this.parent.variableBindings.get(t2)) && o2.report(145, t2), 512 & this.type && i2 && !(2 & i2) && 1 & r2 && this.recordScopeError(145, t2), 32 & this.type && 768 & this.parent.variableBindings.get(t2) && o2.report(159, t2), this.variableBindings.set(t2, r2);
    }
    recordScopeError(e2, ...t2) {
      this.scopeError = { type: e2, params: t2, start: this.parser.tokenStart, end: this.parser.currentLocation };
    }
    reportScopeError() {
      const { scopeError: e2 } = this;
      if (e2) throw new L(e2.start, e2.end, e2.type, ...e2.params);
    }
  }
  function le(e2, t2, r2) {
    const n2 = e2.createScope().createChildScope(512);
    return n2.addBlockName(t2, r2, 1, 0), n2;
  }
  class ue {
    parser;
    parent;
    refs = /* @__PURE__ */ Object.create(null);
    privateIdentifiers = /* @__PURE__ */ new Map();
    constructor(e2, t2) {
      this.parser = e2, this.parent = t2;
    }
    addPrivateIdentifier(e2, t2) {
      const { privateIdentifiers: r2 } = this;
      let n2 = 800 & t2;
      768 & n2 || (n2 |= 768);
      const o2 = r2.get(e2);
      this.hasPrivateIdentifier(e2) && ((32 & o2) != (32 & n2) || o2 & n2 & 768) && this.parser.report(146, e2), r2.set(e2, this.hasPrivateIdentifier(e2) ? o2 | n2 : n2);
    }
    addPrivateIdentifierRef(e2) {
      this.refs[e2] ??= [], this.refs[e2].push(this.parser.tokenStart);
    }
    isPrivateIdentifierDefined(e2) {
      return this.hasPrivateIdentifier(e2) || Boolean(this.parent?.isPrivateIdentifierDefined(e2));
    }
    validatePrivateIdentifierRefs() {
      for (const e2 in this.refs) if (!this.isPrivateIdentifierDefined(e2)) {
        const { index: t2, line: r2, column: n2 } = this.refs[e2][0];
        throw new L({ index: t2, line: r2, column: n2 }, { index: t2 + e2.length, line: r2, column: n2 + e2.length }, 4, e2);
      }
    }
    hasPrivateIdentifier(e2) {
      return this.privateIdentifiers.has(e2);
    }
  }
  class pe {
    source;
    options;
    lastOnToken = null;
    token = 1048576;
    flags = 0;
    index = 0;
    line = 1;
    column = 0;
    startIndex = 0;
    end = 0;
    tokenIndex = 0;
    startColumn = 0;
    tokenColumn = 0;
    tokenLine = 1;
    startLine = 1;
    tokenValue = "";
    tokenRaw = "";
    tokenRegExp = void 0;
    currentChar = 0;
    exportedNames = /* @__PURE__ */ new Set();
    exportedBindings = /* @__PURE__ */ new Set();
    assignable = 1;
    destructible = 0;
    leadingDecorators = { decorators: [] };
    constructor(e2, t2 = {}) {
      this.source = e2, this.options = t2, this.end = e2.length, this.currentChar = e2.charCodeAt(0);
    }
    getToken() {
      return this.token;
    }
    setToken(e2, t2 = false) {
      this.token = e2;
      const { onToken: r2 } = this.options;
      if (r2) if (1048576 !== e2) {
        const n2 = { start: { line: this.tokenLine, column: this.tokenColumn }, end: { line: this.line, column: this.column } };
        !t2 && this.lastOnToken && r2(...this.lastOnToken), this.lastOnToken = [l(e2), this.tokenIndex, this.index, n2];
      } else this.lastOnToken && (r2(...this.lastOnToken), this.lastOnToken = null);
      return e2;
    }
    get tokenStart() {
      return { index: this.tokenIndex, line: this.tokenLine, column: this.tokenColumn };
    }
    get currentLocation() {
      return { index: this.index, line: this.line, column: this.column };
    }
    finishNode(e2, t2, r2) {
      if (this.options.ranges) {
        e2.start = t2.index;
        const n2 = r2 ? r2.index : this.startIndex;
        e2.end = n2, e2.range = [t2.index, n2];
      }
      return this.options.loc && (e2.loc = { start: { line: t2.line, column: t2.column }, end: r2 ? { line: r2.line, column: r2.column } : { line: this.startLine, column: this.startColumn } }, this.options.source && (e2.loc.source = this.options.source)), e2;
    }
    addBindingToExports(e2) {
      this.exportedBindings.add(e2);
    }
    declareUnboundVariable(e2) {
      const { exportedNames: t2 } = this;
      t2.has(e2) && this.report(147, e2), t2.add(e2);
    }
    report(e2, ...t2) {
      throw new L(this.tokenStart, this.currentLocation, e2, ...t2);
    }
    createScopeIfLexical(e2, t2) {
      if (this.options.lexical) return this.createScope(e2, t2);
    }
    createScope(e2, t2) {
      return new ce(this, e2, t2);
    }
    createPrivateScopeIfLexical(e2) {
      if (this.options.lexical) return new ue(this, e2);
    }
  }
  function de(e2, t2 = {}, r2 = 0) {
    const o2 = (function(e3) {
      const t3 = { ...e3 };
      return t3.onComment && (t3.onComment = Array.isArray(t3.onComment) ? /* @__PURE__ */ (function(e4, t4) {
        return function(r3, n2, o3, i3, a3) {
          const s3 = { type: r3, value: n2 };
          t4.ranges && (s3.start = o3, s3.end = i3, s3.range = [o3, i3]), t4.loc && (s3.loc = a3), e4.push(s3);
        };
      })(t3.onComment, t3) : t3.onComment), t3.onToken && (t3.onToken = Array.isArray(t3.onToken) ? /* @__PURE__ */ (function(e4, t4) {
        return function(r3, n2, o3, i3) {
          const a3 = { token: r3 };
          t4.ranges && (a3.start = n2, a3.end = o3, a3.range = [n2, o3]), t4.loc && (a3.loc = i3), e4.push(a3);
        };
      })(t3.onToken, t3) : t3.onToken), t3;
    })(t2);
    o2.module && (r2 |= 3), o2.globalReturn && (r2 |= 4096), o2.impliedStrict && (r2 |= 1);
    const i2 = new pe(e2, o2);
    !(function(e3) {
      const { source: t3 } = e3;
      35 === e3.currentChar && 33 === t3.charCodeAt(e3.index + 1) && (n(e3), n(e3), m(e3, t3, 0, 4, e3.tokenStart));
    })(i2);
    const a2 = i2.createScopeIfLexical();
    let s2 = [], c2 = "script";
    if (2 & r2) {
      if (c2 = "module", s2 = (function(e3, t3, r3) {
        ee(e3, 32 | t3);
        const n2 = [];
        for (; 134283267 === e3.getToken(); ) {
          const { tokenStart: r4 } = e3, o3 = e3.getToken();
          n2.push(ye(e3, t3, nt(e3, t3), o3, r4));
        }
        for (; 1048576 !== e3.getToken(); ) n2.push(ge(e3, t3, r3));
        return n2;
      })(i2, 8 | r2, a2), a2) for (const e3 of i2.exportedBindings) a2.hasVariable(e3) || i2.report(148, e3);
    } else s2 = (function(e3, t3, r3) {
      ee(e3, 262176 | t3);
      const n2 = [];
      for (; 134283267 === e3.getToken(); ) {
        const { index: r4, tokenValue: o3, tokenStart: i3, tokenIndex: a3 } = e3, s3 = e3.getToken(), c3 = nt(e3, t3);
        if (R(e3, r4, a3, o3)) {
          if (t3 |= 1, 64 & e3.flags) throw new L(e3.tokenStart, e3.currentLocation, 9);
          if (4096 & e3.flags) throw new L(e3.tokenStart, e3.currentLocation, 15);
        }
        n2.push(ye(e3, t3, c3, s3, i3));
      }
      for (; 1048576 !== e3.getToken(); ) n2.push(fe(e3, t3, r3, void 0, 4, {}));
      return n2;
    })(i2, 8 | r2, a2);
    return i2.finishNode({ type: "Program", sourceType: c2, body: s2 }, { index: 0, line: 1, column: 0 }, i2.currentLocation);
  }
  function ge(e2, t2, r2) {
    let n2;
    switch (132 === e2.getToken() && Object.assign(e2.leadingDecorators, { start: e2.tokenStart, decorators: Tt(e2, t2, void 0) }), e2.getToken()) {
      case 20564:
        n2 = (function(e3, t3, r3) {
          const n3 = e3.leadingDecorators.decorators.length ? e3.leadingDecorators.start : e3.tokenStart;
          ee(e3, 32 | t3);
          const o2 = [];
          let i2 = null, a2 = null, s2 = [];
          if (U(e3, 32 | t3, 20561)) {
            switch (e3.getToken()) {
              case 86104:
                i2 = ot(e3, t3, r3, void 0, 4, 1, 1, 0, e3.tokenStart);
                break;
              case 132:
              case 86094:
                i2 = yt(e3, t3, r3, void 0, 1);
                break;
              case 209005: {
                const { tokenStart: n4 } = e3;
                i2 = rt(e3, t3);
                const { flags: o3 } = e3;
                1 & o3 || (86104 === e3.getToken() ? i2 = ot(e3, t3, r3, void 0, 4, 1, 1, 1, n4) : 67174411 === e3.getToken() ? (i2 = wt(e3, t3, void 0, i2, 1, 1, 0, o3, n4), i2 = Fe(e3, t3, void 0, i2, 0, 0, n4), i2 = Re(e3, t3, void 0, 0, 0, n4, i2)) : 143360 & e3.getToken() && (r3 && (r3 = le(e3, t3, e3.tokenValue)), i2 = rt(e3, t3), i2 = ht(e3, t3, r3, void 0, [i2], 1, n4)));
                break;
              }
              default:
                i2 = De(e3, t3, void 0, 1, 0, e3.tokenStart), P(e3, 32 | t3);
            }
            return r3 && e3.declareUnboundVariable("default"), e3.finishNode({ type: "ExportDefaultDeclaration", declaration: i2 }, n3);
          }
          switch (e3.getToken()) {
            case 8391476: {
              ee(e3, t3);
              let o3 = null;
              U(e3, t3, 77932) && (r3 && e3.declareUnboundVariable(e3.tokenValue), o3 = _e(e3, t3)), O(e3, t3, 209011), 134283267 !== e3.getToken() && e3.report(105, "Export"), a2 = nt(e3, t3);
              const i3 = { type: "ExportAllDeclaration", source: a2, exported: o3, attributes: Xe(e3, t3) };
              return P(e3, 32 | t3), e3.finishNode(i3, n3);
            }
            case 2162700: {
              ee(e3, t3);
              const n4 = [], i3 = [];
              let c3 = 0;
              for (; 143360 & e3.getToken() || 134283267 === e3.getToken(); ) {
                const { tokenStart: a3, tokenValue: s3 } = e3, l2 = _e(e3, t3);
                let u2;
                "Literal" === l2.type && (c3 = 1), 77932 === e3.getToken() ? (ee(e3, t3), 143360 & e3.getToken() || 134283267 === e3.getToken() || e3.report(106), r3 && (n4.push(e3.tokenValue), i3.push(s3)), u2 = _e(e3, t3)) : (r3 && (n4.push(e3.tokenValue), i3.push(e3.tokenValue)), u2 = l2), o2.push(e3.finishNode({ type: "ExportSpecifier", local: l2, exported: u2 }, a3)), 1074790415 !== e3.getToken() && O(e3, t3, 18);
              }
              O(e3, t3, 1074790415), U(e3, t3, 209011) ? (134283267 !== e3.getToken() && e3.report(105, "Export"), a2 = nt(e3, t3), s2 = Xe(e3, t3), r3 && n4.forEach((t4) => e3.declareUnboundVariable(t4))) : (c3 && e3.report(172), r3 && (n4.forEach((t4) => e3.declareUnboundVariable(t4)), i3.forEach((t4) => e3.addBindingToExports(t4)))), P(e3, 32 | t3);
              break;
            }
            case 132:
            case 86094:
              i2 = yt(e3, t3, r3, void 0, 2);
              break;
            case 86104:
              i2 = ot(e3, t3, r3, void 0, 4, 1, 2, 0, e3.tokenStart);
              break;
            case 241737:
              i2 = Se(e3, t3, r3, void 0, 8, 64);
              break;
            case 86090:
              i2 = Se(e3, t3, r3, void 0, 16, 64);
              break;
            case 86088:
              i2 = ve(e3, t3, r3, void 0, 64);
              break;
            case 209005: {
              const { tokenStart: n4 } = e3;
              if (ee(e3, t3), !(1 & e3.flags) && 86104 === e3.getToken()) {
                i2 = ot(e3, t3, r3, void 0, 4, 1, 2, 1, n4);
                break;
              }
            }
            default:
              e3.report(30, D[255 & e3.getToken()]);
          }
          const c2 = { type: "ExportNamedDeclaration", declaration: i2, specifiers: o2, source: a2, attributes: s2 };
          return e3.finishNode(c2, n3);
        })(e2, t2, r2);
        break;
      case 86106:
        n2 = (function(e3, t3, r3) {
          const n3 = e3.tokenStart;
          ee(e3, t3);
          let o2 = null;
          const { tokenStart: i2 } = e3;
          let a2 = [];
          if (134283267 === e3.getToken()) o2 = nt(e3, t3);
          else {
            if (143360 & e3.getToken()) {
              const n4 = qe(e3, t3, r3);
              if (a2 = [e3.finishNode({ type: "ImportDefaultSpecifier", local: n4 }, i2)], U(e3, t3, 18)) switch (e3.getToken()) {
                case 8391476:
                  a2.push(Ne(e3, t3, r3));
                  break;
                case 2162700:
                  Le(e3, t3, r3, a2);
                  break;
                default:
                  e3.report(107);
              }
            } else switch (e3.getToken()) {
              case 8391476:
                a2 = [Ne(e3, t3, r3)];
                break;
              case 2162700:
                Le(e3, t3, r3, a2);
                break;
              case 67174411:
                return Ie(e3, t3, void 0, n3);
              case 67108877:
                return Ae(e3, t3, n3);
              default:
                e3.report(30, D[255 & e3.getToken()]);
            }
            o2 = (function(e4, t4) {
              O(e4, t4, 209011), 134283267 !== e4.getToken() && e4.report(105, "Import");
              return nt(e4, t4);
            })(e3, t3);
          }
          const s2 = Xe(e3, t3), c2 = { type: "ImportDeclaration", specifiers: a2, source: o2, attributes: s2 };
          return P(e3, 32 | t3), e3.finishNode(c2, n3);
        })(e2, t2, r2);
        break;
      default:
        n2 = fe(e2, t2, r2, void 0, 4, {});
    }
    return e2.leadingDecorators?.decorators.length && e2.report(170), n2;
  }
  function fe(e2, t2, r2, n2, o2, i2) {
    const a2 = e2.tokenStart;
    switch (e2.getToken()) {
      case 86104:
        return ot(e2, t2, r2, n2, o2, 1, 0, 0, a2);
      case 132:
      case 86094:
        return yt(e2, t2, r2, n2, 0);
      case 86090:
        return Se(e2, t2, r2, n2, 16, 0);
      case 241737:
        return (function(e3, t3, r3, n3, o3) {
          const { tokenValue: i3, tokenStart: a3 } = e3, s2 = e3.getToken();
          let c2 = rt(e3, t3);
          if (2240512 & e3.getToken()) {
            const o4 = Ce(e3, t3, r3, n3, 8, 0);
            return P(e3, 32 | t3), e3.finishNode({ type: "VariableDeclaration", kind: "let", declarations: o4 }, a3);
          }
          e3.assignable = 1, 1 & t3 && e3.report(85);
          if (21 === e3.getToken()) return be(e3, t3, r3, n3, o3, {}, i3, c2, s2, 0, a3);
          if (10 === e3.getToken()) {
            let r4;
            e3.options.lexical && (r4 = le(e3, t3, i3)), e3.flags = 128 ^ (128 | e3.flags), c2 = ht(e3, t3, r4, n3, [c2], 0, a3);
          } else c2 = Fe(e3, t3, n3, c2, 0, 0, a3), c2 = Re(e3, t3, n3, 0, 0, a3, c2);
          18 === e3.getToken() && (c2 = Ve(e3, t3, n3, 0, a3, c2));
          return me(e3, t3, c2, a3);
        })(e2, t2, r2, n2, o2);
      case 20564:
        e2.report(103, "export");
      case 86106:
        switch (ee(e2, t2), e2.getToken()) {
          case 67174411:
            return Ie(e2, t2, n2, a2);
          case 67108877:
            return Ae(e2, t2, a2);
          default:
            e2.report(103, "import");
        }
      case 209005:
        return we(e2, t2, r2, n2, o2, i2, 1);
      default:
        return he(e2, t2, r2, n2, o2, i2, 1);
    }
  }
  function he(e2, t2, r2, n2, o2, i2, a2) {
    switch (e2.getToken()) {
      case 86088:
        return ve(e2, t2, r2, n2, 0);
      case 20572:
        return (function(e3, t3, r3) {
          4096 & t3 || e3.report(92);
          const n3 = e3.tokenStart;
          ee(e3, 32 | t3);
          const o3 = 1 & e3.flags || 1048576 & e3.getToken() ? null : Pe(e3, t3, r3, 0, 1, e3.tokenStart);
          return P(e3, 32 | t3), e3.finishNode({ type: "ReturnStatement", argument: o3 }, n3);
        })(e2, t2, n2);
      case 20569:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, t3), O(e3, 32 | t3, 67174411), e3.assignable = 1;
          const a3 = Pe(e3, t3, n3, 0, 1, e3.tokenStart);
          O(e3, 32 | t3, 16);
          const s2 = Te(e3, t3, r3, n3, o3);
          let c2 = null;
          20563 === e3.getToken() && (ee(e3, 32 | t3), c2 = Te(e3, t3, r3, n3, o3));
          return e3.finishNode({ type: "IfStatement", test: a3, consequent: s2, alternate: c2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 20567:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, t3);
          const a3 = ((2048 & t3) > 0 || (2 & t3) > 0 && (8 & t3) > 0) && U(e3, t3, 209006);
          O(e3, 32 | t3, 67174411), r3 = r3?.createChildScope(1);
          let s2, c2 = null, l2 = null, u2 = 0, p2 = null, d2 = 86088 === e3.getToken() || 241737 === e3.getToken() || 86090 === e3.getToken();
          const { tokenStart: g2 } = e3, f2 = e3.getToken();
          if (d2) 241737 === f2 ? (p2 = rt(e3, t3), 2240512 & e3.getToken() ? (8673330 === e3.getToken() ? 1 & t3 && e3.report(67) : p2 = e3.finishNode({ type: "VariableDeclaration", kind: "let", declarations: Ce(e3, 131072 | t3, r3, n3, 8, 32) }, g2), e3.assignable = 1) : 1 & t3 ? e3.report(67) : (d2 = false, e3.assignable = 1, p2 = Fe(e3, t3, n3, p2, 0, 0, g2), 471156 === e3.getToken() && e3.report(115))) : (ee(e3, t3), p2 = e3.finishNode(86088 === f2 ? { type: "VariableDeclaration", kind: "var", declarations: Ce(e3, 131072 | t3, r3, n3, 4, 32) } : { type: "VariableDeclaration", kind: "const", declarations: Ce(e3, 131072 | t3, r3, n3, 16, 32) }, g2), e3.assignable = 1);
          else if (1074790417 === f2) a3 && e3.report(82);
          else if (2097152 & ~f2) p2 = je(e3, 131072 | t3, n3, 1, 0, 1);
          else {
            const r4 = e3.tokenStart;
            p2 = 2162700 === f2 ? ut(e3, t3, void 0, n3, 1, 0, 0, 2, 32) : at(e3, t3, void 0, n3, 1, 0, 0, 2, 32), u2 = e3.destructible, 64 & u2 && e3.report(63), e3.assignable = 16 & u2 ? 2 : 1, p2 = Fe(e3, 131072 | t3, n3, p2, 0, 0, r4);
          }
          if (!(262144 & ~e3.getToken())) {
            if (471156 === e3.getToken()) {
              2 & e3.assignable && e3.report(80, a3 ? "await" : "of"), M(e3, p2), ee(e3, 32 | t3), s2 = De(e3, t3, n3, 1, 0, e3.tokenStart), O(e3, 32 | t3, 16);
              const c4 = xe(e3, t3, r3, n3, o3);
              return e3.finishNode({ type: "ForOfStatement", left: p2, right: s2, body: c4, await: a3 }, i3);
            }
            2 & e3.assignable && e3.report(80, "in"), M(e3, p2), ee(e3, 32 | t3), a3 && e3.report(82), s2 = Pe(e3, t3, n3, 0, 1, e3.tokenStart), O(e3, 32 | t3, 16);
            const c3 = xe(e3, t3, r3, n3, o3);
            return e3.finishNode({ type: "ForInStatement", body: c3, left: p2, right: s2 }, i3);
          }
          a3 && e3.report(82);
          d2 || (8 & u2 && 1077936155 !== e3.getToken() && e3.report(80, "loop"), p2 = Re(e3, 131072 | t3, n3, 0, 0, g2, p2));
          18 === e3.getToken() && (p2 = Ve(e3, t3, n3, 0, g2, p2));
          O(e3, 32 | t3, 1074790417), 1074790417 !== e3.getToken() && (c2 = Pe(e3, t3, n3, 0, 1, e3.tokenStart));
          O(e3, 32 | t3, 1074790417), 16 !== e3.getToken() && (l2 = Pe(e3, t3, n3, 0, 1, e3.tokenStart));
          O(e3, 32 | t3, 16);
          const h2 = xe(e3, t3, r3, n3, o3);
          return e3.finishNode({ type: "ForStatement", init: p2, test: c2, update: l2, body: h2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 20562:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, 32 | t3);
          const a3 = xe(e3, t3, r3, n3, o3);
          O(e3, t3, 20578), O(e3, 32 | t3, 67174411);
          const s2 = Pe(e3, t3, n3, 0, 1, e3.tokenStart);
          return O(e3, 32 | t3, 16), U(e3, 32 | t3, 1074790417), e3.finishNode({ type: "DoWhileStatement", body: a3, test: s2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 20578:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, t3), O(e3, 32 | t3, 67174411);
          const a3 = Pe(e3, t3, n3, 0, 1, e3.tokenStart);
          O(e3, 32 | t3, 16);
          const s2 = xe(e3, t3, r3, n3, o3);
          return e3.finishNode({ type: "WhileStatement", test: a3, body: s2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 86110:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, t3), O(e3, 32 | t3, 67174411);
          const a3 = Pe(e3, t3, n3, 0, 1, e3.tokenStart);
          O(e3, t3, 16), O(e3, t3, 2162700);
          const s2 = [];
          let c2 = 0;
          r3 = r3?.createChildScope(8);
          for (; 1074790415 !== e3.getToken(); ) {
            const { tokenStart: i4 } = e3;
            let a4 = null;
            const l2 = [];
            for (U(e3, 32 | t3, 20556) ? a4 = Pe(e3, t3, n3, 0, 1, e3.tokenStart) : (O(e3, 32 | t3, 20561), c2 && e3.report(89), c2 = 1), O(e3, 32 | t3, 21); 20556 !== e3.getToken() && 1074790415 !== e3.getToken() && 20561 !== e3.getToken(); ) l2.push(fe(e3, 4 | t3, r3, n3, 2, { $: o3 }));
            s2.push(e3.finishNode({ type: "SwitchCase", test: a4, consequent: l2 }, i4));
          }
          return O(e3, 32 | t3, 1074790415), e3.finishNode({ type: "SwitchStatement", discriminant: a3, cases: s2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 1074790417:
        return (function(e3, t3) {
          const r3 = e3.tokenStart;
          return ee(e3, 32 | t3), e3.finishNode({ type: "EmptyStatement" }, r3);
        })(e2, t2);
      case 2162700:
        return ke(e2, t2, r2?.createChildScope(), n2, i2, e2.tokenStart);
      case 86112:
        return (function(e3, t3, r3) {
          const n3 = e3.tokenStart;
          ee(e3, 32 | t3), 1 & e3.flags && e3.report(90);
          const o3 = Pe(e3, t3, r3, 0, 1, e3.tokenStart);
          return P(e3, 32 | t3), e3.finishNode({ type: "ThrowStatement", argument: o3 }, n3);
        })(e2, t2, n2);
      case 20555:
        return (function(e3, t3, r3) {
          const n3 = e3.tokenStart;
          ee(e3, 32 | t3);
          let o3 = null;
          if (!(1 & e3.flags) && 143360 & e3.getToken()) {
            const { tokenValue: n4 } = e3;
            o3 = rt(e3, 32 | t3), J(e3, r3, n4, 0) || e3.report(138, n4);
          } else 132 & t3 || e3.report(69);
          return P(e3, 32 | t3), e3.finishNode({ type: "BreakStatement", label: o3 }, n3);
        })(e2, t2, i2);
      case 20559:
        return (function(e3, t3, r3) {
          128 & t3 || e3.report(68);
          const n3 = e3.tokenStart;
          ee(e3, t3);
          let o3 = null;
          if (!(1 & e3.flags) && 143360 & e3.getToken()) {
            const { tokenValue: n4 } = e3;
            o3 = rt(e3, 32 | t3), J(e3, r3, n4, 1) || e3.report(138, n4);
          }
          return P(e3, 32 | t3), e3.finishNode({ type: "ContinueStatement", label: o3 }, n3);
        })(e2, t2, i2);
      case 20577:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, 32 | t3);
          const a3 = r3?.createChildScope(16), s2 = ke(e3, t3, a3, n3, { $: o3 }), { tokenStart: c2 } = e3, l2 = U(e3, 32 | t3, 20557) ? (function(e4, t4, r4, n4, o4, i4) {
            let a4 = null, s3 = r4;
            U(e4, t4, 67174411) && (r4 = r4?.createChildScope(4), a4 = qt(e4, t4, r4, n4, 2097152 & ~e4.getToken() ? 512 : 256, 0), 18 === e4.getToken() ? e4.report(86) : 1077936155 === e4.getToken() && e4.report(87), O(e4, 32 | t4, 16));
            s3 = r4?.createChildScope(32);
            const c3 = ke(e4, t4, s3, n4, { $: o4 });
            return e4.finishNode({ type: "CatchClause", param: a4, body: c3 }, i4);
          })(e3, t3, r3, n3, o3, c2) : null;
          let u2 = null;
          if (20566 === e3.getToken()) {
            ee(e3, 32 | t3);
            const i4 = r3?.createChildScope(4);
            u2 = ke(e3, t3, i4, n3, { $: o3 });
          }
          l2 || u2 || e3.report(88);
          return e3.finishNode({ type: "TryStatement", block: s2, handler: l2, finalizer: u2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 20579:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = e3.tokenStart;
          ee(e3, t3), 1 & t3 && e3.report(91);
          O(e3, 32 | t3, 67174411);
          const a3 = Pe(e3, t3, n3, 0, 1, e3.tokenStart);
          O(e3, 32 | t3, 16);
          const s2 = he(e3, t3, r3, n3, 2, o3, 0);
          return e3.finishNode({ type: "WithStatement", object: a3, body: s2 }, i3);
        })(e2, t2, r2, n2, i2);
      case 20560:
        return (function(e3, t3) {
          const r3 = e3.tokenStart;
          return ee(e3, 32 | t3), P(e3, 32 | t3), e3.finishNode({ type: "DebuggerStatement" }, r3);
        })(e2, t2);
      case 209005:
        return we(e2, t2, r2, n2, o2, i2, 0);
      case 20557:
        e2.report(162);
      case 20566:
        e2.report(163);
      case 86104:
        e2.report(1 & t2 ? 76 : e2.options.webcompat ? 77 : 78);
      case 86094:
        e2.report(79);
      default:
        return (function(e3, t3, r3, n3, o3, i3, a3) {
          const { tokenValue: s2, tokenStart: c2 } = e3, l2 = e3.getToken();
          let u2;
          if (241737 === l2) u2 = rt(e3, t3), 1 & t3 && e3.report(85), 69271571 === e3.getToken() && e3.report(84);
          else u2 = Je(e3, t3, n3, 2, 0, 1, 0, 1, e3.tokenStart);
          if (143360 & l2 && 21 === e3.getToken()) return be(e3, t3, r3, n3, o3, i3, s2, u2, l2, a3, c2);
          u2 = Fe(e3, t3, n3, u2, 0, 0, c2), u2 = Re(e3, t3, n3, 0, 0, c2, u2), 18 === e3.getToken() && (u2 = Ve(e3, t3, n3, 0, c2, u2));
          return me(e3, t3, u2, c2);
        })(e2, t2, r2, n2, o2, i2, a2);
    }
  }
  function ke(e2, t2, r2, n2, o2, i2 = e2.tokenStart, a2 = "BlockStatement") {
    const s2 = [];
    for (O(e2, 32 | t2, 2162700); 1074790415 !== e2.getToken(); ) s2.push(fe(e2, t2, r2, n2, 2, { $: o2 }));
    return O(e2, 32 | t2, 1074790415), e2.finishNode({ type: a2, body: s2 }, i2);
  }
  function me(e2, t2, r2, n2) {
    return P(e2, 32 | t2), e2.finishNode({ type: "ExpressionStatement", expression: r2 }, n2);
  }
  function be(e2, t2, r2, n2, o2, i2, a2, s2, c2, l2, u2) {
    j(e2, t2, 0, c2, 1), (function(e3, t3, r3) {
      let n3 = t3;
      for (; n3; ) n3["$" + r3] && e3.report(136, r3), n3 = n3.$;
      t3["$" + r3] = 1;
    })(e2, i2, a2), ee(e2, 32 | t2);
    const p2 = !l2 || 1 & t2 || !e2.options.webcompat || 86104 !== e2.getToken() ? he(e2, t2, r2, n2, o2, i2, l2) : ot(e2, t2, r2?.createChildScope(), n2, o2, 0, 0, 0, e2.tokenStart);
    return e2.finishNode({ type: "LabeledStatement", label: s2, body: p2 }, u2);
  }
  function we(e2, t2, r2, n2, o2, i2, a2) {
    const { tokenValue: s2, tokenStart: c2 } = e2, l2 = e2.getToken();
    let u2 = rt(e2, t2);
    if (21 === e2.getToken()) return be(e2, t2, r2, n2, o2, i2, s2, u2, l2, 1, c2);
    const p2 = 1 & e2.flags;
    if (!p2) {
      if (86104 === e2.getToken()) return a2 || e2.report(123), ot(e2, t2, r2, n2, o2, 1, 0, 1, c2);
      if (H(t2, e2.getToken())) return u2 = bt(e2, t2, n2, 1, c2), 18 === e2.getToken() && (u2 = Ve(e2, t2, n2, 0, c2, u2)), me(e2, t2, u2, c2);
    }
    return 67174411 === e2.getToken() ? u2 = wt(e2, t2, n2, u2, 1, 1, 0, p2, c2) : (10 === e2.getToken() && (X(e2, t2, l2), 36864 & ~l2 || (e2.flags |= 256), u2 = gt(e2, 2048 | t2, n2, e2.tokenValue, u2, 0, 1, 0, c2)), e2.assignable = 1), u2 = Fe(e2, t2, n2, u2, 0, 0, c2), u2 = Re(e2, t2, n2, 0, 0, c2, u2), e2.assignable = 1, 18 === e2.getToken() && (u2 = Ve(e2, t2, n2, 0, c2, u2)), me(e2, t2, u2, c2);
  }
  function ye(e2, t2, r2, n2, o2) {
    const i2 = e2.startIndex;
    1074790417 !== n2 && (e2.assignable = 2, r2 = Fe(e2, t2, void 0, r2, 0, 0, o2), 1074790417 !== e2.getToken() && (r2 = Re(e2, t2, void 0, 0, 0, o2, r2), 18 === e2.getToken() && (r2 = Ve(e2, t2, void 0, 0, o2, r2))), P(e2, 32 | t2));
    const a2 = { type: "ExpressionStatement", expression: r2 };
    return "Literal" === r2.type && "string" == typeof r2.value && (a2.directive = e2.source.slice(o2.index + 1, i2 - 1)), e2.finishNode(a2, o2);
  }
  function Te(e2, t2, r2, n2, o2) {
    const { tokenStart: i2 } = e2;
    return 1 & t2 || !e2.options.webcompat || 86104 !== e2.getToken() ? he(e2, t2, r2, n2, 0, { $: o2 }, 0) : ot(e2, t2, r2?.createChildScope(), n2, 0, 0, 0, 0, i2);
  }
  function xe(e2, t2, r2, n2, o2) {
    return he(e2, 131072 ^ (131072 | t2) | 128, r2, n2, 0, { loop: 1, $: o2 }, 0);
  }
  function Se(e2, t2, r2, n2, o2, i2) {
    const a2 = e2.tokenStart;
    ee(e2, t2);
    const s2 = Ce(e2, t2, r2, n2, o2, i2);
    return P(e2, 32 | t2), e2.finishNode({ type: "VariableDeclaration", kind: 8 & o2 ? "let" : "const", declarations: s2 }, a2);
  }
  function ve(e2, t2, r2, n2, o2) {
    const i2 = e2.tokenStart;
    ee(e2, t2);
    const a2 = Ce(e2, t2, r2, n2, 4, o2);
    return P(e2, 32 | t2), e2.finishNode({ type: "VariableDeclaration", kind: "var", declarations: a2 }, i2);
  }
  function Ce(e2, t2, r2, n2, o2, i2) {
    let a2 = 1;
    const s2 = [Ee(e2, t2, r2, n2, o2, i2)];
    for (; U(e2, t2, 18); ) a2++, s2.push(Ee(e2, t2, r2, n2, o2, i2));
    return a2 > 1 && 32 & i2 && 262144 & e2.getToken() && e2.report(61, D[255 & e2.getToken()]), s2;
  }
  function Ee(e2, t2, r2, n2, o2, i2) {
    const { tokenStart: a2 } = e2, s2 = e2.getToken();
    let c2 = null;
    const l2 = qt(e2, t2, r2, n2, o2, i2);
    if (1077936155 === e2.getToken()) {
      if (ee(e2, 32 | t2), c2 = De(e2, t2, n2, 1, 0, e2.tokenStart), (32 & i2 || !(2097152 & s2)) && (471156 === e2.getToken() || 8673330 === e2.getToken() && (2097152 & s2 || !(4 & o2) || 1 & t2))) throw new L(a2, e2.currentLocation, 60, 471156 === e2.getToken() ? "of" : "in");
    } else (16 & o2 || (2097152 & s2) > 0) && 262144 & ~e2.getToken() && e2.report(59, 16 & o2 ? "const" : "destructuring");
    return e2.finishNode({ type: "VariableDeclarator", id: l2, init: c2 }, a2);
  }
  function qe(e2, t2, r2) {
    return H(t2, e2.getToken()) || e2.report(118), 537079808 & ~e2.getToken() || e2.report(119), r2?.addBlockName(t2, e2.tokenValue, 8, 0), rt(e2, t2);
  }
  function Ne(e2, t2, r2) {
    const { tokenStart: n2 } = e2;
    if (ee(e2, t2), O(e2, t2, 77932), !(134217728 & ~e2.getToken())) throw new L(n2, e2.currentLocation, 30, D[255 & e2.getToken()]);
    return e2.finishNode({ type: "ImportNamespaceSpecifier", local: qe(e2, t2, r2) }, n2);
  }
  function Le(e2, t2, r2, n2) {
    for (ee(e2, t2); 143360 & e2.getToken() || 134283267 === e2.getToken(); ) {
      let { tokenValue: o2, tokenStart: i2 } = e2;
      const a2 = e2.getToken(), s2 = _e(e2, t2);
      let c2;
      U(e2, t2, 77932) ? (134217728 & ~e2.getToken() && 18 !== e2.getToken() ? j(e2, t2, 16, e2.getToken(), 0) : e2.report(106), o2 = e2.tokenValue, c2 = rt(e2, t2)) : "Identifier" === s2.type ? (j(e2, t2, 16, a2, 0), c2 = s2) : e2.report(25, D[108]), r2?.addBlockName(t2, o2, 8, 0), n2.push(e2.finishNode({ type: "ImportSpecifier", local: c2, imported: s2 }, i2)), 1074790415 !== e2.getToken() && O(e2, t2, 18);
    }
    return O(e2, t2, 1074790415), n2;
  }
  function Ae(e2, t2, r2) {
    let n2 = ze(e2, t2, e2.finishNode({ type: "Identifier", name: "import" }, r2), r2);
    return n2 = Fe(e2, t2, void 0, n2, 0, 0, r2), n2 = Re(e2, t2, void 0, 0, 0, r2, n2), 18 === e2.getToken() && (n2 = Ve(e2, t2, void 0, 0, r2, n2)), me(e2, t2, n2, r2);
  }
  function Ie(e2, t2, r2, n2) {
    let o2 = He(e2, t2, r2, 0, n2);
    return o2 = Fe(e2, t2, r2, o2, 0, 0, n2), 18 === e2.getToken() && (o2 = Ve(e2, t2, r2, 0, n2, o2)), me(e2, t2, o2, n2);
  }
  function De(e2, t2, r2, n2, o2, i2) {
    let a2 = Je(e2, t2, r2, 2, 0, n2, o2, 1, i2);
    return a2 = Fe(e2, t2, r2, a2, o2, 0, i2), Re(e2, t2, r2, o2, 0, i2, a2);
  }
  function Ve(e2, t2, r2, n2, o2, i2) {
    const a2 = [i2];
    for (; U(e2, 32 | t2, 18); ) a2.push(De(e2, t2, r2, 1, n2, e2.tokenStart));
    return e2.finishNode({ type: "SequenceExpression", expressions: a2 }, o2);
  }
  function Pe(e2, t2, r2, n2, o2, i2) {
    const a2 = De(e2, t2, r2, o2, n2, i2);
    return 18 === e2.getToken() ? Ve(e2, t2, r2, n2, i2, a2) : a2;
  }
  function Re(e2, t2, r2, n2, o2, i2, a2) {
    const s2 = e2.getToken();
    if (!(4194304 & ~s2)) {
      2 & e2.assignable && e2.report(26), (!o2 && 1077936155 === s2 && "ArrayExpression" === a2.type || "ObjectExpression" === a2.type) && M(e2, a2), ee(e2, 32 | t2);
      const c2 = De(e2, t2, r2, 1, n2, e2.tokenStart);
      return e2.assignable = 2, e2.finishNode(o2 ? { type: "AssignmentPattern", left: a2, right: c2 } : { type: "AssignmentExpression", left: a2, operator: D[255 & s2], right: c2 }, i2);
    }
    return 8388608 & ~s2 || (a2 = Oe(e2, t2, r2, n2, i2, 4, s2, a2)), U(e2, 32 | t2, 22) && (a2 = Ue(e2, t2, r2, a2, i2)), a2;
  }
  function Be(e2, t2, r2, n2, o2, i2, a2) {
    const s2 = e2.getToken();
    ee(e2, 32 | t2);
    const c2 = De(e2, t2, r2, 1, n2, e2.tokenStart);
    return a2 = e2.finishNode(o2 ? { type: "AssignmentPattern", left: a2, right: c2 } : { type: "AssignmentExpression", left: a2, operator: D[255 & s2], right: c2 }, i2), e2.assignable = 2, a2;
  }
  function Ue(e2, t2, r2, n2, o2) {
    const i2 = De(e2, 131072 ^ (131072 | t2), r2, 1, 0, e2.tokenStart);
    O(e2, 32 | t2, 21), e2.assignable = 1;
    const a2 = De(e2, t2, r2, 1, 0, e2.tokenStart);
    return e2.assignable = 2, e2.finishNode({ type: "ConditionalExpression", test: n2, consequent: i2, alternate: a2 }, o2);
  }
  function Oe(e2, t2, r2, n2, o2, i2, a2, s2) {
    const c2 = 8673330 & -((131072 & t2) > 0);
    let l2, u2;
    for (e2.assignable = 2; 8388608 & e2.getToken() && (l2 = e2.getToken(), u2 = 3840 & l2, (524288 & l2 && 268435456 & a2 || 524288 & a2 && 268435456 & l2) && e2.report(165), !(u2 + ((8391735 === l2) << 8) - ((c2 === l2) << 12) <= i2)); ) ee(e2, 32 | t2), s2 = e2.finishNode({ type: 524288 & l2 || 268435456 & l2 ? "LogicalExpression" : "BinaryExpression", left: s2, right: Oe(e2, t2, r2, n2, e2.tokenStart, u2, l2, je(e2, t2, r2, 0, n2, 1)), operator: D[255 & l2] }, o2);
    return 1077936155 === e2.getToken() && e2.report(26), s2;
  }
  function Me(e2, t2, r2, n2, o2, i2, a2) {
    const { tokenStart: s2 } = e2;
    O(e2, 32 | t2, 2162700);
    const c2 = [];
    if (1074790415 !== e2.getToken()) {
      for (; 134283267 === e2.getToken(); ) {
        const { index: r3, tokenStart: n3, tokenIndex: o3, tokenValue: i3 } = e2, s3 = e2.getToken(), l2 = nt(e2, t2);
        if (R(e2, r3, o3, i3)) {
          if (t2 |= 1, 128 & e2.flags) throw new L(n3, e2.currentLocation, 66);
          if (64 & e2.flags) throw new L(n3, e2.currentLocation, 9);
          if (4096 & e2.flags) throw new L(n3, e2.currentLocation, 15);
          a2?.reportScopeError();
        }
        c2.push(ye(e2, t2, l2, s3, n3));
      }
      1 & t2 && (i2 && (537079808 & ~i2 || e2.report(119), 36864 & ~i2 || e2.report(40)), 512 & e2.flags && e2.report(119), 256 & e2.flags && e2.report(118));
    }
    for (e2.flags = 4928 ^ (4928 | e2.flags), e2.destructible = 256 ^ (256 | e2.destructible); 1074790415 !== e2.getToken(); ) c2.push(fe(e2, t2, r2, n2, 4, {}));
    return O(e2, 24 & o2 ? 32 | t2 : t2, 1074790415), e2.flags &= -4289, 1077936155 === e2.getToken() && e2.report(26), e2.finishNode({ type: "BlockStatement", body: c2 }, s2);
  }
  function je(e2, t2, r2, n2, o2, i2) {
    const a2 = e2.tokenStart;
    return Fe(e2, t2, r2, Je(e2, t2, r2, 2, 0, n2, o2, i2, a2), o2, 0, a2);
  }
  function Fe(e2, t2, r2, n2, o2, i2, a2) {
    if (33619968 & ~e2.getToken() || 1 & e2.flags) {
      if (!(67108864 & ~e2.getToken())) {
        switch (t2 = 131072 ^ (131072 | t2), e2.getToken()) {
          case 67108877: {
            ee(e2, 8 ^ (262152 | t2)), 16 & t2 && 130 === e2.getToken() && "super" === e2.tokenValue && e2.report(173), e2.assignable = 1;
            const o3 = Ge(e2, 64 | t2, r2);
            n2 = e2.finishNode({ type: "MemberExpression", object: n2, computed: false, property: o3, optional: false }, a2);
            break;
          }
          case 69271571: {
            let i3 = false;
            2048 & ~e2.flags || (i3 = true, e2.flags = 2048 ^ (2048 | e2.flags)), ee(e2, 32 | t2);
            const { tokenStart: s2 } = e2, c2 = Pe(e2, t2, r2, o2, 1, s2);
            O(e2, t2, 20), e2.assignable = 1, n2 = e2.finishNode({ type: "MemberExpression", object: n2, computed: true, property: c2, optional: false }, a2), i3 && (e2.flags |= 2048);
            break;
          }
          case 67174411: {
            if (!(1024 & ~e2.flags)) return e2.flags = 1024 ^ (1024 | e2.flags), n2;
            let i3 = false;
            2048 & ~e2.flags || (i3 = true, e2.flags = 2048 ^ (2048 | e2.flags));
            const s2 = tt(e2, t2, r2, o2);
            e2.assignable = 2, n2 = e2.finishNode({ type: "CallExpression", callee: n2, arguments: s2, optional: false }, a2), i3 && (e2.flags |= 2048);
            break;
          }
          case 67108990:
            ee(e2, 8 ^ (262152 | t2)), e2.flags |= 2048, e2.assignable = 2, n2 = (function(e3, t3, r3, n3, o3) {
              let i3, a3 = false;
              69271571 !== e3.getToken() && 67174411 !== e3.getToken() || 2048 & ~e3.flags || (a3 = true, e3.flags = 2048 ^ (2048 | e3.flags));
              if (69271571 === e3.getToken()) {
                ee(e3, 32 | t3);
                const { tokenStart: a4 } = e3, s2 = Pe(e3, t3, r3, 0, 1, a4);
                O(e3, t3, 20), e3.assignable = 2, i3 = e3.finishNode({ type: "MemberExpression", object: n3, computed: true, optional: true, property: s2 }, o3);
              } else if (67174411 === e3.getToken()) {
                const a4 = tt(e3, t3, r3, 0);
                e3.assignable = 2, i3 = e3.finishNode({ type: "CallExpression", callee: n3, arguments: a4, optional: true }, o3);
              } else {
                const a4 = Ge(e3, t3, r3);
                e3.assignable = 2, i3 = e3.finishNode({ type: "MemberExpression", object: n3, computed: false, optional: true, property: a4 }, o3);
              }
              a3 && (e3.flags |= 2048);
              return i3;
            })(e2, t2, r2, n2, a2);
            break;
          default:
            2048 & ~e2.flags || e2.report(166), e2.assignable = 2, n2 = e2.finishNode({ type: "TaggedTemplateExpression", tag: n2, quasi: 67174408 === e2.getToken() ? Ke(e2, 64 | t2, r2) : Ze(e2, t2) }, a2);
        }
        n2 = Fe(e2, t2, r2, n2, 0, 1, a2);
      }
    } else n2 = (function(e3, t3, r3, n3) {
      2 & e3.assignable && e3.report(55);
      const o3 = e3.getToken();
      return ee(e3, t3), e3.assignable = 2, e3.finishNode({ type: "UpdateExpression", argument: r3, operator: D[255 & o3], prefix: false }, n3);
    })(e2, t2, n2, a2);
    return 0 !== i2 || 2048 & ~e2.flags || (e2.flags = 2048 ^ (2048 | e2.flags), n2 = e2.finishNode({ type: "ChainExpression", expression: n2 }, a2)), n2;
  }
  function Ge(e2, t2, r2) {
    return 143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken() || 130 === e2.getToken() || e2.report(160), 130 === e2.getToken() ? Ct(e2, t2, r2, 0) : rt(e2, t2);
  }
  function Je(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    if (!(143360 & ~e2.getToken())) {
      switch (e2.getToken()) {
        case 209006:
          return (function(e3, t3, r3, n3, o3, i3) {
            o3 && (e3.destructible |= 128), 524288 & t3 && e3.report(177);
            const a3 = dt(e3, t3, r3);
            if ("ArrowFunctionExpression" === a3.type || !(65536 & e3.getToken())) {
              if (2048 & t3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 176);
              if (2 & t3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 110);
              if (8192 & t3 && 2048 & t3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 110);
              return a3;
            }
            if (8192 & t3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 31);
            if (2048 & t3 || 2 & t3 && 8 & t3) {
              if (n3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 0);
              const o4 = je(e3, t3, r3, 0, 0, 1);
              return 8391735 === e3.getToken() && e3.report(33), e3.assignable = 2, e3.finishNode({ type: "AwaitExpression", argument: o4 }, i3);
            }
            if (2 & t3) throw new L(i3, { index: e3.startIndex, line: e3.startLine, column: e3.startColumn }, 98);
            return a3;
          })(e2, t2, r2, o2, a2, c2);
        case 241771:
          return (function(e3, t3, r3, n3, o3, i3) {
            if (n3 && (e3.destructible |= 256), 1024 & t3) {
              ee(e3, 32 | t3), 8192 & t3 && e3.report(32), o3 || e3.report(26), 22 === e3.getToken() && e3.report(124);
              let n4 = null, a3 = false;
              return 1 & e3.flags ? 8391476 === e3.getToken() && e3.report(30, D[255 & e3.getToken()]) : (a3 = U(e3, 32 | t3, 8391476), (77824 & e3.getToken() || a3) && (n4 = De(e3, t3, r3, 1, 0, e3.tokenStart))), e3.assignable = 2, e3.finishNode({ type: "YieldExpression", argument: n4, delegate: a3 }, i3);
            }
            return 1 & t3 && e3.report(97, "yield"), dt(e3, t3, r3);
          })(e2, t2, r2, a2, i2, c2);
        case 209005:
          return (function(e3, t3, r3, n3, o3, i3, a3, s3) {
            const c3 = e3.getToken(), l3 = rt(e3, t3), { flags: u3 } = e3;
            if (!(1 & u3)) {
              if (86104 === e3.getToken()) return it(e3, t3, r3, 1, n3, s3);
              if (H(t3, e3.getToken())) return o3 || e3.report(0), 36864 & ~e3.getToken() || (e3.flags |= 256), bt(e3, t3, r3, i3, s3);
            }
            return a3 || 67174411 !== e3.getToken() ? 10 === e3.getToken() ? (X(e3, t3, c3), a3 && e3.report(51), 36864 & ~c3 || (e3.flags |= 256), gt(e3, t3, r3, e3.tokenValue, l3, a3, i3, 0, s3)) : (e3.assignable = 1, l3) : wt(e3, t3, r3, l3, i3, 1, 0, u3, s3);
          })(e2, t2, r2, a2, s2, i2, o2, c2);
      }
      const { tokenValue: l2 } = e2, u2 = e2.getToken(), p2 = rt(e2, 64 | t2);
      return 10 === e2.getToken() ? (s2 || e2.report(0), X(e2, t2, u2), 36864 & ~u2 || (e2.flags |= 256), gt(e2, t2, r2, l2, p2, o2, i2, 0, c2)) : (!(16 & t2) || 32768 & t2 || 8192 & t2 || "arguments" !== e2.tokenValue || e2.report(130), 73 == (255 & u2) && (1 & t2 && e2.report(113), 24 & n2 && e2.report(100)), e2.assignable = 1 & t2 && !(537079808 & ~u2) ? 2 : 1, p2);
    }
    if (!(134217728 & ~e2.getToken())) return nt(e2, t2);
    switch (e2.getToken()) {
      case 33619993:
      case 33619994:
        return (function(e3, t3, r3, n3, o3, i3) {
          n3 && e3.report(56), o3 || e3.report(0);
          const a3 = e3.getToken();
          ee(e3, 32 | t3);
          const s3 = je(e3, t3, r3, 0, 0, 1);
          return 2 & e3.assignable && e3.report(55), e3.assignable = 2, e3.finishNode({ type: "UpdateExpression", argument: s3, operator: D[255 & a3], prefix: true }, i3);
        })(e2, t2, r2, o2, s2, c2);
      case 16863276:
      case 16842798:
      case 16842799:
      case 25233968:
      case 25233969:
      case 16863275:
      case 16863277:
        return (function(e3, t3, r3, n3, o3) {
          n3 || e3.report(0);
          const { tokenStart: i3 } = e3, a3 = e3.getToken();
          ee(e3, 32 | t3);
          const s3 = je(e3, t3, r3, 0, o3, 1);
          var c3;
          return 8391735 === e3.getToken() && e3.report(33), 1 & t3 && 16863276 === a3 && ("Identifier" === s3.type ? e3.report(121) : (c3 = s3).property && "PrivateIdentifier" === c3.property.type && e3.report(127)), e3.assignable = 2, e3.finishNode({ type: "UnaryExpression", operator: D[255 & a3], argument: s3, prefix: true }, i3);
        })(e2, t2, r2, s2, a2);
      case 86104:
        return it(e2, t2, r2, 0, a2, c2);
      case 2162700:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = ut(e3, t3, void 0, r3, n3, o3, 0, 2, 0);
          64 & e3.destructible && e3.report(63);
          8 & e3.destructible && e3.report(62);
          return i3;
        })(e2, t2, r2, i2 ? 0 : 1, a2);
      case 69271571:
        return (function(e3, t3, r3, n3, o3) {
          const i3 = at(e3, t3, void 0, r3, n3, o3, 0, 2, 0);
          64 & e3.destructible && e3.report(63);
          8 & e3.destructible && e3.report(62);
          return i3;
        })(e2, t2, r2, i2 ? 0 : 1, a2);
      case 67174411:
        return (function(e3, t3, r3, n3, o3, i3, a3) {
          e3.flags = 128 ^ (128 | e3.flags);
          const s3 = e3.tokenStart;
          ee(e3, 262176 | t3);
          const c3 = e3.createScopeIfLexical()?.createChildScope(512);
          if (t3 = 131072 ^ (131072 | t3), U(e3, t3, 16)) return ft(e3, t3, c3, r3, [], n3, 0, a3);
          let l2, u2 = 0;
          e3.destructible &= -385;
          let p2 = [], d2 = 0, g2 = 0, f2 = 0;
          const h2 = e3.tokenStart;
          e3.assignable = 1;
          for (; 16 !== e3.getToken(); ) {
            const { tokenStart: n4 } = e3, a4 = e3.getToken();
            if (143360 & a4) c3?.addBlockName(t3, e3.tokenValue, 1, 0), 537079808 & ~a4 ? 36864 & ~a4 || (f2 = 1) : g2 = 1, l2 = Je(e3, t3, r3, o3, 0, 1, 1, 1, n4), 16 === e3.getToken() || 18 === e3.getToken() ? 2 & e3.assignable && (u2 |= 16, g2 = 1) : (1077936155 === e3.getToken() ? g2 = 1 : u2 |= 16, l2 = Fe(e3, t3, r3, l2, 1, 0, n4), 16 !== e3.getToken() && 18 !== e3.getToken() && (l2 = Re(e3, t3, r3, 1, 0, n4, l2)));
            else {
              if (2097152 & ~a4) {
                if (14 === a4) {
                  l2 = ct(e3, t3, c3, r3, 16, o3, i3, 0, 1, 0), 16 & e3.destructible && e3.report(74), g2 = 1, !d2 || 16 !== e3.getToken() && 18 !== e3.getToken() || p2.push(l2), u2 |= 8;
                  break;
                }
                if (u2 |= 16, l2 = De(e3, t3, r3, 1, 1, n4), !d2 || 16 !== e3.getToken() && 18 !== e3.getToken() || p2.push(l2), 18 === e3.getToken() && (d2 || (d2 = 1, p2 = [l2])), d2) {
                  for (; U(e3, 32 | t3, 18); ) p2.push(De(e3, t3, r3, 1, 1, e3.tokenStart));
                  e3.assignable = 2, l2 = e3.finishNode({ type: "SequenceExpression", expressions: p2 }, h2);
                }
                return O(e3, t3, 16), e3.destructible = u2, e3.options.preserveParens ? e3.finishNode({ type: "ParenthesizedExpression", expression: l2 }, s3) : l2;
              }
              l2 = 2162700 === a4 ? ut(e3, 262144 | t3, c3, r3, 0, 1, 0, o3, i3) : at(e3, 262144 | t3, c3, r3, 0, 1, 0, o3, i3), u2 |= e3.destructible, g2 = 1, e3.assignable = 2, 16 !== e3.getToken() && 18 !== e3.getToken() && (8 & u2 && e3.report(122), l2 = Fe(e3, t3, r3, l2, 0, 0, n4), u2 |= 16, 16 !== e3.getToken() && 18 !== e3.getToken() && (l2 = Re(e3, t3, r3, 0, 0, n4, l2)));
            }
            if (!d2 || 16 !== e3.getToken() && 18 !== e3.getToken() || p2.push(l2), !U(e3, 32 | t3, 18)) break;
            if (d2 || (d2 = 1, p2 = [l2]), 16 === e3.getToken()) {
              u2 |= 8;
              break;
            }
          }
          d2 && (e3.assignable = 2, l2 = e3.finishNode({ type: "SequenceExpression", expressions: p2 }, h2));
          O(e3, t3, 16), 16 & u2 && 8 & u2 && e3.report(151);
          if (u2 |= 256 & e3.destructible ? 256 : 128 & e3.destructible ? 128 : 0, 10 === e3.getToken()) return 48 & u2 && e3.report(49), 2050 & t3 && 128 & u2 && e3.report(31), 1025 & t3 && 256 & u2 && e3.report(32), g2 && (e3.flags |= 128), f2 && (e3.flags |= 256), ft(e3, t3, c3, r3, d2 ? p2 : [l2], n3, 0, a3);
          64 & u2 && e3.report(63);
          8 & u2 && e3.report(144);
          return e3.destructible = 256 ^ (256 | e3.destructible) | u2, e3.options.preserveParens ? e3.finishNode({ type: "ParenthesizedExpression", expression: l2 }, s3) : l2;
        })(e2, 64 | t2, r2, i2, 1, 0, c2);
      case 86021:
      case 86022:
      case 86023:
        return (function(e3, t3) {
          const r3 = e3.tokenStart, n3 = D[255 & e3.getToken()], o3 = 86023 === e3.getToken() ? null : "true" === n3;
          return ee(e3, t3), e3.assignable = 2, e3.finishNode(e3.options.raw ? { type: "Literal", value: o3, raw: n3 } : { type: "Literal", value: o3 }, r3);
        })(e2, t2);
      case 86111:
        return (function(e3, t3) {
          const { tokenStart: r3 } = e3;
          return ee(e3, t3), e3.assignable = 2, e3.finishNode({ type: "ThisExpression" }, r3);
        })(e2, t2);
      case 65540:
        return (function(e3, t3) {
          const { tokenRaw: r3, tokenRegExp: n3, tokenValue: o3, tokenStart: i3 } = e3;
          ee(e3, t3), e3.assignable = 2;
          const a3 = { type: "Literal", value: o3, regex: n3 };
          e3.options.raw && (a3.raw = r3);
          return e3.finishNode(a3, i3);
        })(e2, t2);
      case 132:
      case 86094:
        return (function(e3, t3, r3, n3, o3) {
          let i3 = null, a3 = null;
          const s3 = Tt(e3, t3, r3);
          t3 = 16384 ^ (16385 | t3), ee(e3, t3), 4096 & e3.getToken() && 20565 !== e3.getToken() && (G(e3, t3, e3.getToken()) && e3.report(118), 537079808 & ~e3.getToken() || e3.report(119), i3 = rt(e3, t3));
          let c3 = t3;
          U(e3, 32 | t3, 20565) ? (a3 = je(e3, t3, r3, 0, n3, 0), c3 |= 512) : c3 = 512 ^ (512 | c3);
          const l2 = St(e3, c3, t3, void 0, r3, 2, 0, n3);
          return e3.assignable = 2, e3.finishNode({ type: "ClassExpression", id: i3, superClass: a3, body: l2, ...e3.options.next ? { decorators: s3 } : null }, o3);
        })(e2, t2, r2, a2, c2);
      case 86109:
        return (function(e3, t3) {
          const { tokenStart: r3 } = e3;
          switch (ee(e3, t3), e3.getToken()) {
            case 67108990:
              e3.report(167);
            case 67174411:
              512 & t3 || e3.report(28), e3.assignable = 2;
              break;
            case 69271571:
            case 67108877:
              256 & t3 || e3.report(29), e3.assignable = 1;
              break;
            default:
              e3.report(30, "super");
          }
          return e3.finishNode({ type: "Super" }, r3);
        })(e2, t2);
      case 67174409:
        return Ze(e2, t2);
      case 67174408:
        return Ke(e2, t2, r2);
      case 86107:
        return (function(e3, t3, r3, n3) {
          const { tokenStart: o3 } = e3, i3 = rt(e3, 32 | t3), { tokenStart: a3 } = e3;
          if (U(e3, t3, 67108877)) {
            if (65536 & t3 && 209029 === e3.getToken()) return e3.assignable = 2, (function(e4, t4, r4, n4) {
              const o4 = rt(e4, t4);
              return e4.finishNode({ type: "MetaProperty", meta: r4, property: o4 }, n4);
            })(e3, t3, i3, o3);
            e3.report(94);
          }
          e3.assignable = 2, 16842752 & ~e3.getToken() || e3.report(65, D[255 & e3.getToken()]);
          const s3 = Je(e3, t3, r3, 2, 1, 0, n3, 1, a3);
          t3 = 131072 ^ (131072 | t3), 67108990 === e3.getToken() && e3.report(168);
          const c3 = mt(e3, t3, r3, s3, n3, a3);
          return e3.assignable = 2, e3.finishNode({ type: "NewExpression", callee: c3, arguments: 67174411 === e3.getToken() ? tt(e3, t3, r3, n3) : [] }, o3);
        })(e2, t2, r2, a2);
      case 134283388:
        return Ye(e2, t2);
      case 130:
        return Ct(e2, t2, r2, 0);
      case 86106:
        return (function(e3, t3, r3, n3, o3, i3) {
          let a3 = rt(e3, t3);
          if (67108877 === e3.getToken()) return ze(e3, t3, a3, i3);
          n3 && e3.report(142);
          return a3 = He(e3, t3, r3, o3, i3), e3.assignable = 2, Fe(e3, t3, r3, a3, o3, 0, i3);
        })(e2, t2, r2, o2, a2, c2);
      case 8456256:
        if (e2.options.jsx) return Lt(e2, t2, r2, 0, e2.tokenStart);
      default:
        if (H(t2, e2.getToken())) return dt(e2, t2, r2);
        e2.report(30, D[255 & e2.getToken()]);
    }
  }
  function ze(e2, t2, r2, n2) {
    2 & t2 || e2.report(169), ee(e2, t2);
    const o2 = e2.getToken();
    return 209030 !== o2 && "meta" !== e2.tokenValue ? e2.report(174) : -2147483648 & o2 && e2.report(175), e2.assignable = 2, e2.finishNode({ type: "MetaProperty", meta: r2, property: rt(e2, t2) }, n2);
  }
  function He(e2, t2, r2, n2, o2) {
    O(e2, 32 | t2, 67174411), 14 === e2.getToken() && e2.report(143);
    const i2 = De(e2, t2, r2, 1, n2, e2.tokenStart);
    let a2 = null;
    if (18 === e2.getToken()) {
      if (O(e2, t2, 18), 16 !== e2.getToken()) {
        a2 = De(e2, 131072 ^ (131072 | t2), r2, 1, n2, e2.tokenStart);
      }
      U(e2, t2, 18);
    }
    const s2 = { type: "ImportExpression", source: i2, options: a2 };
    return O(e2, t2, 16), e2.finishNode(s2, o2);
  }
  function Xe(e2, t2) {
    if (!U(e2, t2, 20579)) return [];
    O(e2, t2, 2162700);
    const r2 = [], n2 = /* @__PURE__ */ new Set();
    for (; 1074790415 !== e2.getToken(); ) {
      const o2 = e2.tokenStart, i2 = We(e2, t2);
      O(e2, t2, 21);
      const a2 = $e(e2, t2), s2 = "Literal" === i2.type ? i2.value : i2.name;
      n2.has(s2) && e2.report(145, `${s2}`), n2.add(s2), r2.push(e2.finishNode({ type: "ImportAttribute", key: i2, value: a2 }, o2)), 1074790415 !== e2.getToken() && O(e2, t2, 18);
    }
    return O(e2, t2, 1074790415), r2;
  }
  function $e(e2, t2) {
    if (134283267 === e2.getToken()) return nt(e2, t2);
    e2.report(30, D[255 & e2.getToken()]);
  }
  function We(e2, t2) {
    return 134283267 === e2.getToken() ? nt(e2, t2) : 143360 & e2.getToken() ? rt(e2, t2) : void e2.report(30, D[255 & e2.getToken()]);
  }
  function _e(e2, t2) {
    return 134283267 === e2.getToken() ? ((function(e3, t3) {
      const r2 = t3.length;
      for (let n2 = 0; n2 < r2; n2++) {
        const o2 = t3.charCodeAt(n2);
        55296 == (64512 & o2) && (o2 > 56319 || ++n2 >= r2 || 56320 != (64512 & t3.charCodeAt(n2))) && e3.report(171, JSON.stringify(t3.charAt(n2--)));
      }
    })(e2, e2.tokenValue), nt(e2, t2)) : 143360 & e2.getToken() ? rt(e2, t2) : void e2.report(30, D[255 & e2.getToken()]);
  }
  function Ye(e2, t2) {
    const { tokenRaw: r2, tokenValue: n2, tokenStart: o2 } = e2;
    ee(e2, t2), e2.assignable = 2;
    const i2 = { type: "Literal", value: n2, bigint: String(n2) };
    return e2.options.raw && (i2.raw = r2), e2.finishNode(i2, o2);
  }
  function Ze(e2, t2) {
    e2.assignable = 2;
    const { tokenValue: r2, tokenRaw: n2, tokenStart: o2 } = e2;
    O(e2, t2, 67174409);
    const i2 = [Qe(e2, r2, n2, o2, true)];
    return e2.finishNode({ type: "TemplateLiteral", expressions: [], quasis: i2 }, o2);
  }
  function Ke(e2, t2, r2) {
    t2 = 131072 ^ (131072 | t2);
    const { tokenValue: n2, tokenRaw: o2, tokenStart: i2 } = e2;
    O(e2, -65 & t2 | 32, 67174408);
    const a2 = [Qe(e2, n2, o2, i2, false)], s2 = [Pe(e2, -65 & t2, r2, 0, 1, e2.tokenStart)];
    for (1074790415 !== e2.getToken() && e2.report(83); 67174409 !== e2.setToken(q(e2, t2), true); ) {
      const { tokenValue: n3, tokenRaw: o3, tokenStart: i3 } = e2;
      O(e2, -65 & t2 | 32, 67174408), a2.push(Qe(e2, n3, o3, i3, false)), s2.push(Pe(e2, t2, r2, 0, 1, e2.tokenStart)), 1074790415 !== e2.getToken() && e2.report(83);
    }
    {
      const { tokenValue: r3, tokenRaw: n3, tokenStart: o3 } = e2;
      O(e2, t2, 67174409), a2.push(Qe(e2, r3, n3, o3, true));
    }
    return e2.finishNode({ type: "TemplateLiteral", expressions: s2, quasis: a2 }, i2);
  }
  function Qe(e2, t2, r2, n2, o2) {
    const i2 = e2.finishNode({ type: "TemplateElement", value: { cooked: t2, raw: r2 }, tail: o2 }, n2), a2 = o2 ? 1 : 2;
    return e2.options.ranges && (i2.start += 1, i2.range[0] += 1, i2.end -= a2, i2.range[1] -= a2), e2.options.loc && (i2.loc.start.column += 1, i2.loc.end.column -= a2), i2;
  }
  function et(e2, t2, r2) {
    const n2 = e2.tokenStart;
    O(e2, 32 | (t2 = 131072 ^ (131072 | t2)), 14);
    const o2 = De(e2, t2, r2, 1, 0, e2.tokenStart);
    return e2.assignable = 1, e2.finishNode({ type: "SpreadElement", argument: o2 }, n2);
  }
  function tt(e2, t2, r2, n2) {
    ee(e2, 32 | t2);
    const o2 = [];
    if (16 === e2.getToken()) return ee(e2, 64 | t2), o2;
    for (; 16 !== e2.getToken() && (14 === e2.getToken() ? o2.push(et(e2, t2, r2)) : o2.push(De(e2, t2, r2, 1, n2, e2.tokenStart)), 18 === e2.getToken()) && (ee(e2, 32 | t2), 16 !== e2.getToken()); ) ;
    return O(e2, 64 | t2, 16), o2;
  }
  function rt(e2, t2) {
    const { tokenValue: r2, tokenStart: n2 } = e2, o2 = "await" === r2 && !(-2147483648 & e2.getToken());
    return ee(e2, t2 | (o2 ? 32 : 0)), e2.finishNode({ type: "Identifier", name: r2 }, n2);
  }
  function nt(e2, t2) {
    const { tokenValue: r2, tokenRaw: n2, tokenStart: o2 } = e2;
    return 134283388 === e2.getToken() ? Ye(e2, t2) : (ee(e2, t2), e2.assignable = 2, e2.finishNode(e2.options.raw ? { type: "Literal", value: r2, raw: n2 } : { type: "Literal", value: r2 }, o2));
  }
  function ot(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    ee(e2, 32 | t2);
    const l2 = i2 ? B(e2, t2, 8391476) : 0;
    let u2, p2 = null, d2 = r2 ? e2.createScope() : void 0;
    if (67174411 === e2.getToken()) 1 & a2 || e2.report(39, "Function");
    else {
      const n3 = !(4 & o2) || 8 & t2 && 2 & t2 ? 64 | (s2 ? 1024 : 0) | (l2 ? 1024 : 0) : 4;
      F(e2, t2, e2.getToken()), r2 && (4 & n3 ? r2.addVarName(t2, e2.tokenValue, n3) : r2.addBlockName(t2, e2.tokenValue, n3, o2), d2 = d2?.createChildScope(128), a2 && 2 & a2 && e2.declareUnboundVariable(e2.tokenValue)), u2 = e2.getToken(), 143360 & e2.getToken() ? p2 = rt(e2, t2) : e2.report(30, D[255 & e2.getToken()]);
    }
    {
      const e3 = 28416;
      t2 = (t2 | e3) ^ e3 | 65536 | (s2 ? 2048 : 0) | (l2 ? 1024 : 0) | (l2 ? 0 : 262144);
    }
    d2 = d2?.createChildScope(256);
    const g2 = kt(e2, -524289 & t2 | 8192, d2, n2, 0, 1), f2 = 524428, h2 = Me(e2, 36864 | (t2 | f2) ^ f2, d2?.createChildScope(64), n2, 8, u2, d2);
    return e2.finishNode({ type: "FunctionDeclaration", id: p2, params: g2, body: h2, async: 1 === s2, generator: 1 === l2 }, c2);
  }
  function it(e2, t2, r2, n2, o2, i2) {
    ee(e2, 32 | t2);
    const a2 = B(e2, t2, 8391476), s2 = (n2 ? 2048 : 0) | (a2 ? 1024 : 0);
    let c2, l2 = null, u2 = e2.createScopeIfLexical();
    const p2 = 552704;
    143360 & e2.getToken() && (F(e2, (t2 | p2) ^ p2 | s2, e2.getToken()), u2 = u2?.createChildScope(128), c2 = e2.getToken(), l2 = rt(e2, t2)), t2 = (t2 | p2) ^ p2 | 65536 | s2 | (a2 ? 0 : 262144), u2 = u2?.createChildScope(256);
    const d2 = kt(e2, -524289 & t2 | 8192, u2, r2, o2, 1), g2 = Me(e2, 36864 | -131229 & t2, u2?.createChildScope(64), r2, 0, c2, u2);
    return e2.assignable = 2, e2.finishNode({ type: "FunctionExpression", id: l2, params: d2, body: g2, async: 1 === n2, generator: 1 === a2 }, i2);
  }
  function at(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    const { tokenStart: l2 } = e2;
    ee(e2, 32 | t2);
    const u2 = [];
    let p2 = 0;
    for (t2 = 131072 ^ (131072 | t2); 20 !== e2.getToken(); ) if (U(e2, 32 | t2, 18)) u2.push(null);
    else {
      let o3;
      const { tokenStart: l3, tokenValue: d3 } = e2, g2 = e2.getToken();
      if (143360 & g2) if (o3 = Je(e2, t2, n2, s2, 0, 1, i2, 1, l3), 1077936155 === e2.getToken()) {
        2 & e2.assignable && e2.report(26), ee(e2, 32 | t2), r2?.addVarOrBlock(t2, d3, s2, c2);
        const u3 = De(e2, t2, n2, 1, i2, e2.tokenStart);
        o3 = e2.finishNode(a2 ? { type: "AssignmentPattern", left: o3, right: u3 } : { type: "AssignmentExpression", operator: "=", left: o3, right: u3 }, l3), p2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0;
      } else 18 === e2.getToken() || 20 === e2.getToken() ? (2 & e2.assignable ? p2 |= 16 : r2?.addVarOrBlock(t2, d3, s2, c2), p2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0) : (p2 |= 1 & s2 ? 32 : 2 & s2 ? 0 : 16, o3 = Fe(e2, t2, n2, o3, i2, 0, l3), 18 !== e2.getToken() && 20 !== e2.getToken() ? (1077936155 !== e2.getToken() && (p2 |= 16), o3 = Re(e2, t2, n2, i2, a2, l3, o3)) : 1077936155 !== e2.getToken() && (p2 |= 2 & e2.assignable ? 16 : 32));
      else 2097152 & g2 ? (o3 = 2162700 === e2.getToken() ? ut(e2, t2, r2, n2, 0, i2, a2, s2, c2) : at(e2, t2, r2, n2, 0, i2, a2, s2, c2), p2 |= e2.destructible, e2.assignable = 16 & e2.destructible ? 2 : 1, 18 === e2.getToken() || 20 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : 8 & e2.destructible ? e2.report(71) : (o3 = Fe(e2, t2, n2, o3, i2, 0, l3), p2 = 2 & e2.assignable ? 16 : 0, 18 !== e2.getToken() && 20 !== e2.getToken() ? o3 = Re(e2, t2, n2, i2, a2, l3, o3) : 1077936155 !== e2.getToken() && (p2 |= 2 & e2.assignable ? 16 : 32))) : 14 === g2 ? (o3 = ct(e2, t2, r2, n2, 20, s2, c2, 0, i2, a2), p2 |= e2.destructible, 18 !== e2.getToken() && 20 !== e2.getToken() && e2.report(30, D[255 & e2.getToken()])) : (o3 = je(e2, t2, n2, 1, 0, 1), 18 !== e2.getToken() && 20 !== e2.getToken() ? (o3 = Re(e2, t2, n2, i2, a2, l3, o3), 3 & s2 || 67174411 !== g2 || (p2 |= 16)) : 2 & e2.assignable ? p2 |= 16 : 67174411 === g2 && (p2 |= 1 & e2.assignable && 3 & s2 ? 32 : 16));
      if (u2.push(o3), !U(e2, 32 | t2, 18)) break;
      if (20 === e2.getToken()) break;
    }
    O(e2, t2, 20);
    const d2 = e2.finishNode({ type: a2 ? "ArrayPattern" : "ArrayExpression", elements: u2 }, l2);
    return !o2 && 4194304 & e2.getToken() ? st(e2, t2, n2, p2, i2, a2, l2, d2) : (e2.destructible = p2, d2);
  }
  function st(e2, t2, r2, n2, o2, i2, a2, s2) {
    1077936155 !== e2.getToken() && e2.report(26), ee(e2, 32 | t2), 16 & n2 && e2.report(26), i2 || M(e2, s2);
    const { tokenStart: c2 } = e2, l2 = De(e2, t2, r2, 1, o2, c2);
    return e2.destructible = 72 ^ (72 | n2) | (128 & e2.destructible ? 128 : 0) | (256 & e2.destructible ? 256 : 0), e2.finishNode(i2 ? { type: "AssignmentPattern", left: s2, right: l2 } : { type: "AssignmentExpression", left: s2, operator: "=", right: l2 }, a2);
  }
  function ct(e2, t2, r2, n2, o2, i2, a2, s2, c2, l2) {
    const { tokenStart: u2 } = e2;
    ee(e2, 32 | t2);
    let p2 = null, d2 = 0;
    const { tokenValue: g2, tokenStart: f2 } = e2;
    let h2 = e2.getToken();
    if (143360 & h2) e2.assignable = 1, p2 = Je(e2, t2, n2, i2, 0, 1, c2, 1, f2), h2 = e2.getToken(), p2 = Fe(e2, t2, n2, p2, c2, 0, f2), 18 !== e2.getToken() && e2.getToken() !== o2 && (2 & e2.assignable && 1077936155 === e2.getToken() && e2.report(71), d2 |= 16, p2 = Re(e2, t2, n2, c2, l2, f2, p2)), 2 & e2.assignable ? d2 |= 16 : h2 === o2 || 18 === h2 ? r2?.addVarOrBlock(t2, g2, i2, a2) : d2 |= 32, d2 |= 128 & e2.destructible ? 128 : 0;
    else if (h2 === o2) e2.report(41);
    else {
      if (!(2097152 & h2)) {
        d2 |= 32, p2 = je(e2, t2, n2, 1, c2, 1);
        const { tokenStart: r3 } = e2, i3 = e2.getToken();
        return 1077936155 === i3 ? (2 & e2.assignable && e2.report(26), p2 = Re(e2, t2, n2, c2, l2, r3, p2), d2 |= 16) : (18 === i3 ? d2 |= 16 : i3 !== o2 && (p2 = Re(e2, t2, n2, c2, l2, r3, p2)), d2 |= 1 & e2.assignable ? 32 : 16), e2.destructible = d2, e2.getToken() !== o2 && 18 !== e2.getToken() && e2.report(161), e2.finishNode({ type: l2 ? "RestElement" : "SpreadElement", argument: p2 }, u2);
      }
      p2 = 2162700 === e2.getToken() ? ut(e2, t2, r2, n2, 1, c2, l2, i2, a2) : at(e2, t2, r2, n2, 1, c2, l2, i2, a2), h2 = e2.getToken(), 1077936155 !== h2 && h2 !== o2 && 18 !== h2 ? (8 & e2.destructible && e2.report(71), p2 = Fe(e2, t2, n2, p2, c2, 0, f2), d2 |= 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (p2 = Oe(e2, t2, n2, 1, f2, 4, h2, p2)), U(e2, 32 | t2, 22) && (p2 = Ue(e2, t2, n2, p2, f2)), d2 |= 2 & e2.assignable ? 16 : 32) : (1077936155 !== e2.getToken() && (d2 |= 16), p2 = Re(e2, t2, n2, c2, l2, f2, p2))) : d2 |= 1074790415 === o2 && 1077936155 !== h2 ? 16 : e2.destructible;
    }
    if (e2.getToken() !== o2) if (1 & i2 && (d2 |= s2 ? 16 : 32), U(e2, 32 | t2, 1077936155)) {
      16 & d2 && e2.report(26), M(e2, p2);
      const r3 = De(e2, t2, n2, 1, c2, e2.tokenStart);
      p2 = e2.finishNode(l2 ? { type: "AssignmentPattern", left: p2, right: r3 } : { type: "AssignmentExpression", left: p2, operator: "=", right: r3 }, f2), d2 = 16;
    } else d2 |= 16;
    return e2.destructible = d2, e2.finishNode({ type: l2 ? "RestElement" : "SpreadElement", argument: p2 }, u2);
  }
  function lt(e2, t2, r2, n2, o2, i2) {
    const a2 = 11264 | (64 & n2 ? 0 : 16896);
    t2 = 98560 | ((t2 | a2) ^ a2 | (8 & n2 ? 1024 : 0) | (16 & n2 ? 2048 : 0) | (64 & n2 ? 16384 : 0));
    let s2 = e2.createScopeIfLexical(256);
    const c2 = (function(e3, t3, r3, n3, o3, i3, a3) {
      O(e3, t3, 67174411);
      const s3 = [];
      if (e3.flags = 128 ^ (128 | e3.flags), 16 === e3.getToken()) return 512 & o3 && e3.report(37, "Setter", "one", ""), ee(e3, t3), s3;
      256 & o3 && e3.report(37, "Getter", "no", "s");
      512 & o3 && 14 === e3.getToken() && e3.report(38);
      t3 = 131072 ^ (131072 | t3);
      let c3 = 0, l3 = 0;
      for (; 18 !== e3.getToken(); ) {
        let u2 = null;
        const { tokenStart: p2 } = e3;
        if (143360 & e3.getToken() ? (1 & t3 || (36864 & ~e3.getToken() || (e3.flags |= 256), 537079808 & ~e3.getToken() || (e3.flags |= 512)), u2 = Nt(e3, t3, r3, 1 | o3, 0)) : (2162700 === e3.getToken() ? u2 = ut(e3, t3, r3, n3, 1, a3, 1, i3, 0) : 69271571 === e3.getToken() ? u2 = at(e3, t3, r3, n3, 1, a3, 1, i3, 0) : 14 === e3.getToken() && (u2 = ct(e3, t3, r3, n3, 16, i3, 0, 0, a3, 1)), l3 = 1, 48 & e3.destructible && e3.report(50)), 1077936155 === e3.getToken()) {
          ee(e3, 32 | t3), l3 = 1;
          const r4 = De(e3, t3, n3, 1, 0, e3.tokenStart);
          u2 = e3.finishNode({ type: "AssignmentPattern", left: u2, right: r4 }, p2);
        }
        if (c3++, s3.push(u2), !U(e3, t3, 18)) break;
        if (16 === e3.getToken()) break;
      }
      512 & o3 && 1 !== c3 && e3.report(37, "Setter", "one", "");
      r3?.reportScopeError(), l3 && (e3.flags |= 128);
      return O(e3, t3, 16), s3;
    })(e2, -524289 & t2 | 8192, s2, r2, n2, 1, o2);
    s2 = s2?.createChildScope(64);
    const l2 = Me(e2, 36864 | -655373 & t2, s2, r2, 0, void 0, s2?.parent);
    return e2.finishNode({ type: "FunctionExpression", params: c2, body: l2, async: (16 & n2) > 0, generator: (8 & n2) > 0, id: null }, i2);
  }
  function ut(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    const { tokenStart: l2 } = e2;
    ee(e2, t2);
    const u2 = [];
    let p2 = 0, d2 = 0;
    for (t2 = 131072 ^ (131072 | t2); 1074790415 !== e2.getToken(); ) {
      const { tokenValue: o3, tokenStart: l3 } = e2, g3 = e2.getToken();
      if (14 === g3) u2.push(ct(e2, t2, r2, n2, 1074790415, s2, c2, 0, i2, a2));
      else {
        let f2, h2 = 0, k2 = null;
        if (143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken()) if (-2147483527 === e2.getToken() && (p2 |= 16), k2 = rt(e2, t2), 18 === e2.getToken() || 1074790415 === e2.getToken() || 1077936155 === e2.getToken()) if (h2 |= 4, 1 & t2 && !(537079808 & ~g3) ? p2 |= 16 : j(e2, t2, s2, g3, 0), r2?.addVarOrBlock(t2, o3, s2, c2), U(e2, 32 | t2, 1077936155)) {
          p2 |= 8;
          const r3 = De(e2, t2, n2, 1, i2, e2.tokenStart);
          p2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0, f2 = e2.finishNode({ type: "AssignmentPattern", left: e2.options.uniqueKeyInPattern ? Object.assign({}, k2) : k2, right: r3 }, l3);
        } else p2 |= (209006 === g3 ? 128 : 0) | (-2147483528 === g3 ? 16 : 0), f2 = e2.options.uniqueKeyInPattern ? Object.assign({}, k2) : k2;
        else if (U(e2, 32 | t2, 21)) {
          const { tokenStart: l4 } = e2;
          if ("__proto__" === o3 && d2++, 143360 & e2.getToken()) {
            const o4 = e2.getToken(), u3 = e2.tokenValue;
            f2 = Je(e2, t2, n2, s2, 0, 1, i2, 1, l4);
            const d3 = e2.getToken();
            f2 = Fe(e2, t2, n2, f2, i2, 0, l4), 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === d3 || 1074790415 === d3 || 18 === d3 ? (p2 |= 128 & e2.destructible ? 128 : 0, 2 & e2.assignable ? p2 |= 16 : 143360 & ~o4 || r2?.addVarOrBlock(t2, u3, s2, c2)) : p2 |= 1 & e2.assignable ? 32 : 16 : 4194304 & ~e2.getToken() ? (p2 |= 16, 8388608 & ~e2.getToken() || (f2 = Oe(e2, t2, n2, 1, l4, 4, d3, f2)), U(e2, 32 | t2, 22) && (f2 = Ue(e2, t2, n2, f2, l4))) : (2 & e2.assignable ? p2 |= 16 : 1077936155 !== d3 ? p2 |= 32 : r2?.addVarOrBlock(t2, u3, s2, c2), f2 = Re(e2, t2, n2, i2, a2, l4, f2));
          } else 2097152 & ~e2.getToken() ? (f2 = je(e2, t2, n2, 1, i2, 1), p2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : (f2 = Fe(e2, t2, n2, f2, i2, 0, l4), p2 = 2 & e2.assignable ? 16 : 0, 18 !== e2.getToken() && 1074790415 !== g3 && (1077936155 !== e2.getToken() && (p2 |= 16), f2 = Re(e2, t2, n2, i2, a2, l4, f2)))) : (f2 = 69271571 === e2.getToken() ? at(e2, t2, r2, n2, 0, i2, a2, s2, c2) : ut(e2, t2, r2, n2, 0, i2, a2, s2, c2), p2 = e2.destructible, e2.assignable = 16 & p2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : 8 & e2.destructible ? e2.report(71) : (f2 = Fe(e2, t2, n2, f2, i2, 0, l4), p2 = 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (f2 = Oe(e2, t2, n2, 1, l4, 4, g3, f2)), U(e2, 32 | t2, 22) && (f2 = Ue(e2, t2, n2, f2, l4)), p2 |= 2 & e2.assignable ? 16 : 32) : f2 = Be(e2, t2, n2, i2, a2, l4, f2)));
        } else 69271571 === e2.getToken() ? (p2 |= 16, 209005 === g3 && (h2 |= 16), h2 |= 2 | (209008 === g3 ? 256 : 209009 === g3 ? 512 : 1), k2 = pt(e2, t2, n2, i2), p2 |= e2.assignable, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart)) : 143360 & e2.getToken() ? (p2 |= 16, -2147483528 === g3 && e2.report(95), 209005 === g3 ? (1 & e2.flags && e2.report(132), h2 |= 17) : 209008 === g3 ? h2 |= 256 : 209009 === g3 ? h2 |= 512 : e2.report(0), k2 = rt(e2, t2), f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart)) : 67174411 === e2.getToken() ? (p2 |= 16, h2 |= 1, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart)) : 8391476 === e2.getToken() ? (p2 |= 16, 209008 === g3 ? e2.report(42) : 209009 === g3 ? e2.report(43) : 209005 !== g3 && e2.report(30, D[52]), ee(e2, t2), h2 |= 9 | (209005 === g3 ? 16 : 0), 143360 & e2.getToken() ? k2 = rt(e2, t2) : 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (h2 |= 2, k2 = pt(e2, t2, n2, i2), p2 |= e2.assignable) : e2.report(30, D[255 & e2.getToken()]) : k2 = nt(e2, t2), f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart)) : 134217728 & ~e2.getToken() ? e2.report(133) : (209005 === g3 && (h2 |= 16), h2 |= 209008 === g3 ? 256 : 209009 === g3 ? 512 : 1, p2 |= 16, k2 = nt(e2, t2), f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart));
        else if (134217728 & ~e2.getToken()) if (69271571 === e2.getToken()) if (k2 = pt(e2, t2, n2, i2), p2 |= 256 & e2.destructible ? 256 : 0, h2 |= 2, 21 === e2.getToken()) {
          ee(e2, 32 | t2);
          const { tokenStart: o4, tokenValue: l4 } = e2, u3 = e2.getToken();
          if (143360 & e2.getToken()) {
            f2 = Je(e2, t2, n2, s2, 0, 1, i2, 1, o4);
            const d3 = e2.getToken();
            f2 = Fe(e2, t2, n2, f2, i2, 0, o4), 4194304 & ~e2.getToken() ? 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === d3 || 1074790415 === d3 || 18 === d3 ? 2 & e2.assignable ? p2 |= 16 : 143360 & ~u3 || r2?.addVarOrBlock(t2, l4, s2, c2) : p2 |= 1 & e2.assignable ? 32 : 16 : (p2 |= 16, f2 = Re(e2, t2, n2, i2, a2, o4, f2)) : (p2 |= 2 & e2.assignable ? 16 : 1077936155 === d3 ? 0 : 32, f2 = Be(e2, t2, n2, i2, a2, o4, f2));
          } else 2097152 & ~e2.getToken() ? (f2 = je(e2, t2, n2, 1, 0, 1), p2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : (f2 = Fe(e2, t2, n2, f2, i2, 0, o4), p2 = 1 & e2.assignable ? 0 : 16, 18 !== e2.getToken() && 1074790415 !== e2.getToken() && (1077936155 !== e2.getToken() && (p2 |= 16), f2 = Re(e2, t2, n2, i2, a2, o4, f2)))) : (f2 = 69271571 === e2.getToken() ? at(e2, t2, r2, n2, 0, i2, a2, s2, c2) : ut(e2, t2, r2, n2, 0, i2, a2, s2, c2), p2 = e2.destructible, e2.assignable = 16 & p2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : 8 & p2 ? e2.report(62) : (f2 = Fe(e2, t2, n2, f2, i2, 0, o4), p2 = 2 & e2.assignable ? 16 | p2 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (f2 = Oe(e2, t2, n2, 1, o4, 4, g3, f2)), U(e2, 32 | t2, 22) && (f2 = Ue(e2, t2, n2, f2, o4)), p2 |= 2 & e2.assignable ? 16 : 32) : (1077936155 !== e2.getToken() && (p2 |= 16), f2 = Be(e2, t2, n2, i2, a2, o4, f2))));
        } else 67174411 === e2.getToken() ? (h2 |= 1, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart), p2 = 16) : e2.report(44);
        else if (8391476 === g3) if (O(e2, 32 | t2, 8391476), h2 |= 8, 143360 & e2.getToken()) {
          const r3 = e2.getToken();
          if (k2 = rt(e2, t2), h2 |= 1, 67174411 !== e2.getToken()) throw new L(e2.tokenStart, e2.currentLocation, 209005 === r3 ? 46 : 209008 === r3 || 209009 === e2.getToken() ? 45 : 47, D[255 & r3]);
          p2 |= 16, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart);
        } else 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (p2 |= 16, h2 |= 3, k2 = pt(e2, t2, n2, i2), f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart)) : e2.report(126) : (p2 |= 16, k2 = nt(e2, t2), h2 |= 1, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart));
        else e2.report(30, D[255 & g3]);
        else if (k2 = nt(e2, t2), 21 === e2.getToken()) {
          O(e2, 32 | t2, 21);
          const { tokenStart: l4 } = e2;
          if ("__proto__" === o3 && d2++, 143360 & e2.getToken()) {
            f2 = Je(e2, t2, n2, s2, 0, 1, i2, 1, l4);
            const { tokenValue: o4 } = e2, u3 = e2.getToken();
            f2 = Fe(e2, t2, n2, f2, i2, 0, l4), 18 === e2.getToken() || 1074790415 === e2.getToken() ? 1077936155 === u3 || 1074790415 === u3 || 18 === u3 ? 2 & e2.assignable ? p2 |= 16 : r2?.addVarOrBlock(t2, o4, s2, c2) : p2 |= 1 & e2.assignable ? 32 : 16 : 1077936155 === e2.getToken() ? (2 & e2.assignable && (p2 |= 16), f2 = Re(e2, t2, n2, i2, a2, l4, f2)) : (p2 |= 16, f2 = Re(e2, t2, n2, i2, a2, l4, f2));
          } else 2097152 & ~e2.getToken() ? (f2 = je(e2, t2, n2, 1, 0, 1), p2 |= 1 & e2.assignable ? 32 : 16, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : (f2 = Fe(e2, t2, n2, f2, i2, 0, l4), p2 = 1 & e2.assignable ? 0 : 16, 18 !== e2.getToken() && 1074790415 !== e2.getToken() && (1077936155 !== e2.getToken() && (p2 |= 16), f2 = Re(e2, t2, n2, i2, a2, l4, f2)))) : (f2 = 69271571 === e2.getToken() ? at(e2, t2, r2, n2, 0, i2, a2, s2, c2) : ut(e2, t2, r2, n2, 0, i2, a2, s2, c2), p2 = e2.destructible, e2.assignable = 16 & p2 ? 2 : 1, 18 === e2.getToken() || 1074790415 === e2.getToken() ? 2 & e2.assignable && (p2 |= 16) : 8 & ~e2.destructible && (f2 = Fe(e2, t2, n2, f2, i2, 0, l4), p2 = 2 & e2.assignable ? 16 : 0, 4194304 & ~e2.getToken() ? (8388608 & ~e2.getToken() || (f2 = Oe(e2, t2, n2, 1, l4, 4, g3, f2)), U(e2, 32 | t2, 22) && (f2 = Ue(e2, t2, n2, f2, l4)), p2 |= 2 & e2.assignable ? 16 : 32) : f2 = Be(e2, t2, n2, i2, a2, l4, f2)));
        } else 67174411 === e2.getToken() ? (h2 |= 1, f2 = lt(e2, t2, n2, h2, i2, e2.tokenStart), p2 = 16 | e2.assignable) : e2.report(134);
        p2 |= 128 & e2.destructible ? 128 : 0, e2.destructible = p2, u2.push(e2.finishNode({ type: "Property", key: k2, value: f2, kind: 768 & h2 ? 512 & h2 ? "set" : "get" : "init", computed: (2 & h2) > 0, method: (1 & h2) > 0, shorthand: (4 & h2) > 0 }, l3));
      }
      if (p2 |= e2.destructible, 18 !== e2.getToken()) break;
      ee(e2, t2);
    }
    O(e2, t2, 1074790415), d2 > 1 && (p2 |= 64);
    const g2 = e2.finishNode({ type: a2 ? "ObjectPattern" : "ObjectExpression", properties: u2 }, l2);
    return !o2 && 4194304 & e2.getToken() ? st(e2, t2, n2, p2, i2, a2, l2, g2) : (e2.destructible = p2, g2);
  }
  function pt(e2, t2, r2, n2) {
    ee(e2, 32 | t2);
    const o2 = De(e2, 131072 ^ (131072 | t2), r2, 1, n2, e2.tokenStart);
    return O(e2, t2, 20), o2;
  }
  function dt(e2, t2, r2) {
    const { tokenStart: n2 } = e2, { tokenValue: o2 } = e2;
    let i2 = 0, a2 = 0;
    537079808 & ~e2.getToken() ? 36864 & ~e2.getToken() || (a2 = 1) : i2 = 1;
    const s2 = rt(e2, t2);
    if (e2.assignable = 1, 10 === e2.getToken()) {
      const c2 = e2.options.lexical ? le(e2, t2, o2) : void 0;
      return i2 && (e2.flags |= 128), a2 && (e2.flags |= 256), ht(e2, t2, c2, r2, [s2], 0, n2);
    }
    return s2;
  }
  function gt(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    a2 || e2.report(57), i2 && e2.report(51), e2.flags &= -129;
    return ht(e2, t2, e2.options.lexical ? le(e2, t2, n2) : void 0, r2, [o2], s2, c2);
  }
  function ft(e2, t2, r2, n2, o2, i2, a2, s2) {
    i2 || e2.report(57);
    for (let t3 = 0; t3 < o2.length; ++t3) M(e2, o2[t3]);
    return ht(e2, t2, r2, n2, o2, a2, s2);
  }
  function ht(e2, t2, r2, n2, o2, i2, a2) {
    1 & e2.flags && e2.report(48), O(e2, 32 | t2, 10);
    const s2 = 535552;
    t2 = (t2 | s2) ^ s2 | (i2 ? 2048 : 0);
    const c2 = 2162700 !== e2.getToken();
    let l2;
    if (r2?.reportScopeError(), c2) e2.flags = 4928 ^ (4928 | e2.flags), l2 = De(e2, t2, n2, 1, 0, e2.tokenStart);
    else {
      r2 = r2?.createChildScope(64);
      const o3 = 131084;
      switch (l2 = Me(e2, (t2 | o3) ^ o3 | 4096, r2, n2, 16, void 0, void 0), e2.getToken()) {
        case 69271571:
          1 & e2.flags || e2.report(116);
          break;
        case 67108877:
        case 67174409:
        case 22:
          e2.report(117);
        case 67174411:
          1 & e2.flags || e2.report(116), e2.flags |= 1024;
      }
      8388608 & ~e2.getToken() || 1 & e2.flags || e2.report(30, D[255 & e2.getToken()]), 33619968 & ~e2.getToken() || e2.report(125);
    }
    return e2.assignable = 2, e2.finishNode({ type: "ArrowFunctionExpression", params: o2, body: l2, async: 1 === i2, expression: c2, generator: false }, a2);
  }
  function kt(e2, t2, r2, n2, o2, i2) {
    O(e2, t2, 67174411), e2.flags = 128 ^ (128 | e2.flags);
    const a2 = [];
    if (U(e2, t2, 16)) return a2;
    t2 = 131072 ^ (131072 | t2);
    let s2 = 0;
    for (; 18 !== e2.getToken(); ) {
      let c2;
      const { tokenStart: l2 } = e2, u2 = e2.getToken();
      if (143360 & u2 ? (1 & t2 || (36864 & ~u2 || (e2.flags |= 256), 537079808 & ~u2 || (e2.flags |= 512)), c2 = Nt(e2, t2, r2, 1 | i2, 0)) : (2162700 === u2 ? c2 = ut(e2, t2, r2, n2, 1, o2, 1, i2, 0) : 69271571 === u2 ? c2 = at(e2, t2, r2, n2, 1, o2, 1, i2, 0) : 14 === u2 ? c2 = ct(e2, t2, r2, n2, 16, i2, 0, 0, o2, 1) : e2.report(30, D[255 & u2]), s2 = 1, 48 & e2.destructible && e2.report(50)), 1077936155 === e2.getToken()) {
        ee(e2, 32 | t2), s2 = 1;
        const r3 = De(e2, t2, n2, 1, o2, e2.tokenStart);
        c2 = e2.finishNode({ type: "AssignmentPattern", left: c2, right: r3 }, l2);
      }
      if (a2.push(c2), !U(e2, t2, 18)) break;
      if (16 === e2.getToken()) break;
    }
    return s2 && (e2.flags |= 128), (s2 || 1 & t2) && r2?.reportScopeError(), O(e2, t2, 16), a2;
  }
  function mt(e2, t2, r2, n2, o2, i2) {
    const a2 = e2.getToken();
    if (67108864 & a2) {
      if (67108877 === a2) {
        ee(e2, 262144 | t2), e2.assignable = 1;
        const o3 = Ge(e2, t2, r2);
        return mt(e2, t2, r2, e2.finishNode({ type: "MemberExpression", object: n2, computed: false, property: o3, optional: false }, i2), 0, i2);
      }
      if (69271571 === a2) {
        ee(e2, 32 | t2);
        const { tokenStart: a3 } = e2, s2 = Pe(e2, t2, r2, o2, 1, a3);
        return O(e2, t2, 20), e2.assignable = 1, mt(e2, t2, r2, e2.finishNode({ type: "MemberExpression", object: n2, computed: true, property: s2, optional: false }, i2), 0, i2);
      }
      if (67174408 === a2 || 67174409 === a2) return e2.assignable = 2, mt(e2, t2, r2, e2.finishNode({ type: "TaggedTemplateExpression", tag: n2, quasi: 67174408 === e2.getToken() ? Ke(e2, 64 | t2, r2) : Ze(e2, 64 | t2) }, i2), 0, i2);
    }
    return n2;
  }
  function bt(e2, t2, r2, n2, o2) {
    return 209006 === e2.getToken() && e2.report(31), 1025 & t2 && 241771 === e2.getToken() && e2.report(32), X(e2, t2, e2.getToken()), 36864 & ~e2.getToken() || (e2.flags |= 256), gt(e2, -524289 & t2 | 2048, r2, e2.tokenValue, rt(e2, t2), 0, n2, 1, o2);
  }
  function wt(e2, t2, r2, n2, o2, i2, a2, s2, c2) {
    ee(e2, 32 | t2);
    const l2 = e2.createScopeIfLexical()?.createChildScope(512);
    if (U(e2, t2 = 131072 ^ (131072 | t2), 16)) return 10 === e2.getToken() ? (1 & s2 && e2.report(48), ft(e2, t2, l2, r2, [], o2, 1, c2)) : e2.finishNode({ type: "CallExpression", callee: n2, arguments: [], optional: false }, c2);
    let u2 = 0, p2 = null, d2 = 0;
    e2.destructible = 384 ^ (384 | e2.destructible);
    const g2 = [];
    for (; 16 !== e2.getToken(); ) {
      const { tokenStart: o3 } = e2, s3 = e2.getToken();
      if (143360 & s3) l2?.addBlockName(t2, e2.tokenValue, i2, 0), 537079808 & ~s3 ? 36864 & ~s3 || (e2.flags |= 256) : e2.flags |= 512, p2 = Je(e2, t2, r2, i2, 0, 1, 1, 1, o3), 16 === e2.getToken() || 18 === e2.getToken() ? 2 & e2.assignable && (u2 |= 16, d2 = 1) : (1077936155 === e2.getToken() ? d2 = 1 : u2 |= 16, p2 = Fe(e2, t2, r2, p2, 1, 0, o3), 16 !== e2.getToken() && 18 !== e2.getToken() && (p2 = Re(e2, t2, r2, 1, 0, o3, p2)));
      else if (2097152 & s3) p2 = 2162700 === s3 ? ut(e2, t2, l2, r2, 0, 1, 0, i2, a2) : at(e2, t2, l2, r2, 0, 1, 0, i2, a2), u2 |= e2.destructible, d2 = 1, 16 !== e2.getToken() && 18 !== e2.getToken() && (8 & u2 && e2.report(122), p2 = Fe(e2, t2, r2, p2, 0, 0, o3), u2 |= 16, 8388608 & ~e2.getToken() || (p2 = Oe(e2, t2, r2, 1, c2, 4, s3, p2)), U(e2, 32 | t2, 22) && (p2 = Ue(e2, t2, r2, p2, c2)));
      else {
        if (14 !== s3) {
          for (p2 = De(e2, t2, r2, 1, 0, o3), u2 = e2.assignable, g2.push(p2); U(e2, 32 | t2, 18); ) g2.push(De(e2, t2, r2, 1, 0, o3));
          return u2 |= e2.assignable, O(e2, t2, 16), e2.destructible = 16 | u2, e2.assignable = 2, e2.finishNode({ type: "CallExpression", callee: n2, arguments: g2, optional: false }, c2);
        }
        p2 = ct(e2, t2, l2, r2, 16, i2, a2, 1, 1, 0), u2 |= (16 === e2.getToken() ? 0 : 16) | e2.destructible, d2 = 1;
      }
      if (g2.push(p2), !U(e2, 32 | t2, 18)) break;
    }
    return O(e2, t2, 16), u2 |= 256 & e2.destructible ? 256 : 128 & e2.destructible ? 128 : 0, 10 === e2.getToken() ? (48 & u2 && e2.report(27), (1 & e2.flags || 1 & s2) && e2.report(48), 128 & u2 && e2.report(31), 1025 & t2 && 256 & u2 && e2.report(32), d2 && (e2.flags |= 128), ft(e2, 2048 | t2, l2, r2, g2, o2, 1, c2)) : (64 & u2 && e2.report(63), 8 & u2 && e2.report(62), e2.assignable = 2, e2.finishNode({ type: "CallExpression", callee: n2, arguments: g2, optional: false }, c2));
  }
  function yt(e2, t2, r2, n2, o2) {
    let i2, a2;
    e2.leadingDecorators.decorators.length ? (132 === e2.getToken() && e2.report(30, "@"), i2 = e2.leadingDecorators.start, a2 = [...e2.leadingDecorators.decorators], e2.leadingDecorators.decorators.length = 0) : (i2 = e2.tokenStart, a2 = Tt(e2, t2, n2)), ee(e2, t2 = 16384 ^ (16385 | t2));
    let s2 = null, c2 = null;
    const { tokenValue: l2 } = e2;
    4096 & e2.getToken() && 20565 !== e2.getToken() ? (G(e2, t2, e2.getToken()) && e2.report(118), 537079808 & ~e2.getToken() || e2.report(119), r2 && (r2.addBlockName(t2, l2, 32, 0), o2 && 2 & o2 && e2.declareUnboundVariable(l2)), s2 = rt(e2, t2)) : 1 & o2 || e2.report(39, "Class");
    let u2 = t2;
    U(e2, 32 | t2, 20565) ? (c2 = je(e2, t2, n2, 0, 0, 0), u2 |= 512) : u2 = 512 ^ (512 | u2);
    const p2 = St(e2, u2, t2, r2, n2, 2, 8, 0);
    return e2.finishNode({ type: "ClassDeclaration", id: s2, superClass: c2, body: p2, ...e2.options.next ? { decorators: a2 } : null }, i2);
  }
  function Tt(e2, t2, r2) {
    const n2 = [];
    if (e2.options.next) for (; 132 === e2.getToken(); ) n2.push(xt(e2, t2, r2));
    return n2;
  }
  function xt(e2, t2, r2) {
    const n2 = e2.tokenStart;
    ee(e2, 32 | t2);
    let o2 = Je(e2, t2, r2, 2, 0, 1, 0, 1, n2);
    return o2 = Fe(e2, t2, r2, o2, 0, 0, e2.tokenStart), e2.finishNode({ type: "Decorator", expression: o2 }, n2);
  }
  function St(e2, t2, r2, n2, o2, i2, a2, s2) {
    const { tokenStart: c2 } = e2, l2 = e2.createPrivateScopeIfLexical(o2);
    O(e2, 32 | t2, 2162700);
    const u2 = 655360;
    t2 = (t2 | u2) ^ u2;
    const p2 = 32 & e2.flags;
    e2.flags = 32 ^ (32 | e2.flags);
    const d2 = [];
    for (; 1074790415 !== e2.getToken(); ) {
      const o3 = e2.tokenStart, a3 = Tt(e2, t2, l2);
      a3.length > 0 && "constructor" === e2.tokenValue && e2.report(109), 1074790415 === e2.getToken() && e2.report(108), U(e2, t2, 1074790417) ? a3.length > 0 && e2.report(120) : d2.push(vt(e2, t2, n2, l2, r2, i2, a3, 0, s2, a3.length > 0 ? o3 : e2.tokenStart));
    }
    return O(e2, 8 & a2 ? 32 | t2 : t2, 1074790415), l2?.validatePrivateIdentifierRefs(), e2.flags = -33 & e2.flags | p2, e2.finishNode({ type: "ClassBody", body: d2 }, c2);
  }
  function vt(e2, t2, r2, n2, o2, i2, a2, s2, c2, l2) {
    let u2 = s2 ? 32 : 0, p2 = null;
    const d2 = e2.getToken();
    if (176128 & d2 || -2147483528 === d2) switch (p2 = rt(e2, t2), d2) {
      case 36970:
        if (!s2 && 67174411 !== e2.getToken() && 1048576 & ~e2.getToken() && 1077936155 !== e2.getToken()) return vt(e2, t2, r2, n2, o2, i2, a2, 1, c2, l2);
        break;
      case 209005:
        if (67174411 !== e2.getToken() && !(1 & e2.flags)) {
          if (!(1073741824 & ~e2.getToken())) return Et(e2, t2, n2, p2, u2, a2, l2);
          u2 |= 16 | (B(e2, t2, 8391476) ? 8 : 0);
        }
        break;
      case 209008:
        if (67174411 !== e2.getToken()) {
          if (!(1073741824 & ~e2.getToken())) return Et(e2, t2, n2, p2, u2, a2, l2);
          u2 |= 256;
        }
        break;
      case 209009:
        if (67174411 !== e2.getToken()) {
          if (!(1073741824 & ~e2.getToken())) return Et(e2, t2, n2, p2, u2, a2, l2);
          u2 |= 512;
        }
        break;
      case 12402:
        if (67174411 !== e2.getToken() && !(1 & e2.flags)) {
          if (!(1073741824 & ~e2.getToken())) return Et(e2, t2, n2, p2, u2, a2, l2);
          e2.options.next && (u2 |= 1024);
        }
    }
    else if (69271571 === d2) u2 |= 2, p2 = pt(e2, o2, n2, c2);
    else if (134217728 & ~d2) if (8391476 === d2) u2 |= 8, ee(e2, t2);
    else if (130 === e2.getToken()) u2 |= 8192, p2 = Ct(e2, 16 | t2, n2, 768);
    else if (1073741824 & ~e2.getToken()) {
      if (s2 && 2162700 === d2) return (function(e3, t3, r3, n3, o3) {
        return r3 = r3?.createChildScope(), ke(e3, t3 = 592128 | 5764 ^ (5764 | t3), r3, n3, {}, o3, "StaticBlock");
      })(e2, 16 | t2, r2, n2, l2);
      -2147483527 === d2 ? (p2 = rt(e2, t2), 67174411 !== e2.getToken() && e2.report(30, D[255 & e2.getToken()])) : e2.report(30, D[255 & e2.getToken()]);
    } else u2 |= 128;
    else p2 = nt(e2, t2);
    if (1816 & u2 && (143360 & e2.getToken() || -2147483528 === e2.getToken() || -2147483527 === e2.getToken() ? p2 = rt(e2, t2) : 134217728 & ~e2.getToken() ? 69271571 === e2.getToken() ? (u2 |= 2, p2 = pt(e2, t2, n2, 0)) : 130 === e2.getToken() ? (u2 |= 8192, p2 = Ct(e2, t2, n2, u2)) : e2.report(135) : p2 = nt(e2, t2)), 2 & u2 || ("constructor" === e2.tokenValue ? (1073741824 & ~e2.getToken() ? 32 & u2 || 67174411 !== e2.getToken() || (920 & u2 ? e2.report(53, "accessor") : 512 & t2 || (32 & e2.flags ? e2.report(54) : e2.flags |= 32)) : e2.report(129), u2 |= 64) : !(8192 & u2) && 32 & u2 && "prototype" === e2.tokenValue && e2.report(52)), 1024 & u2 || 67174411 !== e2.getToken() && !(768 & u2)) return Et(e2, t2, n2, p2, u2, a2, l2);
    const g2 = lt(e2, 16 | t2, n2, u2, c2, e2.tokenStart);
    return e2.finishNode({ type: "MethodDefinition", kind: !(32 & u2) && 64 & u2 ? "constructor" : 256 & u2 ? "get" : 512 & u2 ? "set" : "method", static: (32 & u2) > 0, computed: (2 & u2) > 0, key: p2, value: g2, ...e2.options.next ? { decorators: a2 } : null }, l2);
  }
  function Ct(e2, t2, r2, n2) {
    const { tokenStart: o2 } = e2;
    ee(e2, t2);
    const { tokenValue: i2 } = e2;
    return "constructor" === i2 && e2.report(128), e2.options.lexical && (r2 || e2.report(4, i2), n2 ? r2.addPrivateIdentifier(i2, n2) : r2.addPrivateIdentifierRef(i2)), ee(e2, t2), e2.finishNode({ type: "PrivateIdentifier", name: i2 }, o2);
  }
  function Et(e2, t2, r2, n2, o2, i2, a2) {
    let s2 = null;
    if (8 & o2 && e2.report(0), 1077936155 === e2.getToken()) {
      ee(e2, 32 | t2);
      const { tokenStart: n3 } = e2;
      537079927 === e2.getToken() && e2.report(119);
      const i3 = 11264 | (64 & o2 ? 0 : 16896);
      s2 = Je(e2, 16 | (t2 = 65792 | ((t2 | i3) ^ i3 | (8 & o2 ? 1024 : 0) | (16 & o2 ? 2048 : 0) | (64 & o2 ? 16384 : 0))), r2, 2, 0, 1, 0, 1, n3), !(1073741824 & ~e2.getToken()) && 4194304 & ~e2.getToken() || (s2 = Fe(e2, 16 | t2, r2, s2, 0, 0, n3), s2 = Re(e2, 16 | t2, r2, 0, 0, n3, s2));
    }
    return P(e2, t2), e2.finishNode({ type: 1024 & o2 ? "AccessorProperty" : "PropertyDefinition", key: n2, value: s2, static: (32 & o2) > 0, computed: (2 & o2) > 0, ...e2.options.next ? { decorators: i2 } : null }, a2);
  }
  function qt(e2, t2, r2, n2, o2, i2) {
    if (143360 & e2.getToken() || !(1 & t2) && -2147483527 === e2.getToken()) return Nt(e2, t2, r2, o2, i2);
    2097152 & ~e2.getToken() && e2.report(30, D[255 & e2.getToken()]);
    const a2 = 69271571 === e2.getToken() ? at(e2, t2, r2, n2, 1, 0, 1, o2, i2) : ut(e2, t2, r2, n2, 1, 0, 1, o2, i2);
    return 16 & e2.destructible && e2.report(50), 32 & e2.destructible && e2.report(50), a2;
  }
  function Nt(e2, t2, r2, n2, o2) {
    const i2 = e2.getToken();
    1 & t2 && (537079808 & ~i2 ? 36864 & ~i2 && -2147483527 !== i2 || e2.report(118) : e2.report(119)), 20480 & ~i2 || e2.report(102), 241771 === i2 && (1024 & t2 && e2.report(32), 2 & t2 && e2.report(111)), 73 == (255 & i2) && 24 & n2 && e2.report(100), 209006 === i2 && (2048 & t2 && e2.report(176), 2 & t2 && e2.report(110));
    const { tokenValue: a2, tokenStart: s2 } = e2;
    return ee(e2, t2), r2?.addVarOrBlock(t2, a2, n2, o2), e2.finishNode({ type: "Identifier", name: a2 }, s2);
  }
  function Lt(e2, t2, r2, n2, o2) {
    if (n2 || O(e2, t2, 8456256), 8390721 === e2.getToken()) {
      const i3 = (function(e3, t3) {
        return ae(e3), e3.finishNode({ type: "JSXOpeningFragment" }, t3);
      })(e2, o2), [a3, s3] = (function(e3, t3, r3, n3) {
        const o3 = [];
        for (; ; ) {
          const i4 = It(e3, t3, r3, n3);
          if ("JSXClosingFragment" === i4.type) return [o3, i4];
          o3.push(i4);
        }
      })(e2, t2, r2, n2);
      return e2.finishNode({ type: "JSXFragment", openingFragment: i3, children: a3, closingFragment: s3 }, o2);
    }
    8457014 === e2.getToken() && e2.report(30, D[255 & e2.getToken()]);
    let i2 = null, a2 = [];
    const s2 = (function(e3, t3, r3, n3, o3) {
      143360 & ~e3.getToken() && 4096 & ~e3.getToken() && e3.report(0);
      const i3 = Vt(e3, t3), a3 = (function(e4, t4, r4) {
        const n4 = [];
        for (; 8457014 !== e4.getToken() && 8390721 !== e4.getToken() && 1048576 !== e4.getToken(); ) n4.push(Rt(e4, t4, r4));
        return n4;
      })(e3, t3, r3), s3 = 8457014 === e3.getToken();
      s3 && O(e3, t3, 8457014);
      8390721 !== e3.getToken() && e3.report(25, D[65]);
      n3 || !s3 ? ae(e3) : ee(e3, t3);
      return e3.finishNode({ type: "JSXOpeningElement", name: i3, attributes: a3, selfClosing: s3 }, o3);
    })(e2, t2, r2, n2, o2);
    if (!s2.selfClosing) {
      [a2, i2] = (function(e3, t3, r3, n3) {
        const o4 = [];
        for (; ; ) {
          const i3 = At(e3, t3, r3, n3);
          if ("JSXClosingElement" === i3.type) return [o4, i3];
          o4.push(i3);
        }
      })(e2, t2, r2, n2);
      const o3 = z(i2.name);
      z(s2.name) !== o3 && e2.report(155, o3);
    }
    return e2.finishNode({ type: "JSXElement", children: a2, openingElement: s2, closingElement: i2 }, o2);
  }
  function At(e2, t2, r2, n2) {
    if (137 === e2.getToken()) return Dt(e2, t2);
    if (2162700 === e2.getToken()) return Ut(e2, t2, r2, 1, 0);
    if (8456256 === e2.getToken()) {
      const { tokenStart: o2 } = e2;
      return ee(e2, t2), 8457014 === e2.getToken() ? (function(e3, t3, r3, n3) {
        O(e3, t3, 8457014);
        const o3 = Vt(e3, t3);
        return 8390721 !== e3.getToken() && e3.report(25, D[65]), r3 ? ae(e3) : ee(e3, t3), e3.finishNode({ type: "JSXClosingElement", name: o3 }, n3);
      })(e2, t2, n2, o2) : Lt(e2, t2, r2, 1, o2);
    }
    e2.report(0);
  }
  function It(e2, t2, r2, n2) {
    if (137 === e2.getToken()) return Dt(e2, t2);
    if (2162700 === e2.getToken()) return Ut(e2, t2, r2, 1, 0);
    if (8456256 === e2.getToken()) {
      const { tokenStart: o2 } = e2;
      return ee(e2, t2), 8457014 === e2.getToken() ? (function(e3, t3, r3, n3) {
        return O(e3, t3, 8457014), 8390721 !== e3.getToken() && e3.report(25, D[65]), r3 ? ae(e3) : ee(e3, t3), e3.finishNode({ type: "JSXClosingFragment" }, n3);
      })(e2, t2, n2, o2) : Lt(e2, t2, r2, 1, o2);
    }
    e2.report(0);
  }
  function Dt(e2, t2) {
    const r2 = e2.tokenStart;
    ee(e2, t2);
    const n2 = { type: "JSXText", value: e2.tokenValue };
    return e2.options.raw && (n2.raw = e2.tokenRaw), e2.finishNode(n2, r2);
  }
  function Vt(e2, t2) {
    const { tokenStart: r2 } = e2;
    se(e2);
    let n2 = Ot(e2, t2);
    if (21 === e2.getToken()) return Bt(e2, t2, n2, r2);
    for (; U(e2, t2, 67108877); ) se(e2), n2 = Pt(e2, t2, n2, r2);
    return n2;
  }
  function Pt(e2, t2, r2, n2) {
    const o2 = Ot(e2, t2);
    return e2.finishNode({ type: "JSXMemberExpression", object: r2, property: o2 }, n2);
  }
  function Rt(e2, t2, r2) {
    const { tokenStart: n2 } = e2;
    if (2162700 === e2.getToken()) return (function(e3, t3, r3) {
      const n3 = e3.tokenStart;
      ee(e3, t3), O(e3, t3, 14);
      const o3 = De(e3, t3, r3, 1, 0, e3.tokenStart);
      return O(e3, t3, 1074790415), e3.finishNode({ type: "JSXSpreadAttribute", argument: o3 }, n3);
    })(e2, t2, r2);
    se(e2);
    let o2 = null, i2 = Ot(e2, t2);
    if (21 === e2.getToken() && (i2 = Bt(e2, t2, i2, n2)), 1077936155 === e2.getToken()) {
      switch (ie(e2, t2)) {
        case 134283267:
          o2 = nt(e2, t2);
          break;
        case 8456256:
          o2 = Lt(e2, t2, r2, 0, e2.tokenStart);
          break;
        case 2162700:
          o2 = Ut(e2, t2, r2, 0, 1);
          break;
        default:
          e2.report(154);
      }
    }
    return e2.finishNode({ type: "JSXAttribute", value: o2, name: i2 }, n2);
  }
  function Bt(e2, t2, r2, n2) {
    O(e2, t2, 21);
    const o2 = Ot(e2, t2);
    return e2.finishNode({ type: "JSXNamespacedName", namespace: r2, name: o2 }, n2);
  }
  function Ut(e2, t2, r2, n2, o2) {
    const { tokenStart: i2 } = e2;
    ee(e2, 32 | t2);
    const { tokenStart: a2 } = e2;
    if (14 === e2.getToken()) return (function(e3, t3, r3, n3) {
      O(e3, t3, 14);
      const o3 = De(e3, t3, r3, 1, 0, e3.tokenStart);
      return O(e3, t3, 1074790415), e3.finishNode({ type: "JSXSpreadChild", expression: o3 }, n3);
    })(e2, t2, r2, i2);
    let s2 = null;
    return 1074790415 === e2.getToken() ? (o2 && e2.report(157), s2 = (function(e3, t3) {
      return e3.finishNode({ type: "JSXEmptyExpression" }, t3, e3.tokenStart);
    })(e2, { index: e2.startIndex, line: e2.startLine, column: e2.startColumn })) : s2 = De(e2, t2, r2, 1, 0, a2), 1074790415 !== e2.getToken() && e2.report(25, D[15]), n2 ? ae(e2) : ee(e2, t2), e2.finishNode({ type: "JSXExpressionContainer", expression: s2 }, i2);
  }
  function Ot(e2, t2) {
    const r2 = e2.tokenStart;
    143360 & e2.getToken() || e2.report(30, D[255 & e2.getToken()]);
    const { tokenValue: n2 } = e2;
    return ee(e2, t2), e2.finishNode({ type: "JSXIdentifier", name: n2 }, r2);
  }
  const { stringify: Mt } = JSON;
  if (!String.prototype.repeat) throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");
  if (!String.prototype.endsWith) throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");
  const jt = { "||": 2, "??": 3, "&&": 4, "|": 5, "^": 6, "&": 7, "==": 8, "!=": 8, "===": 8, "!==": 8, "<": 9, ">": 9, "<=": 9, ">=": 9, in: 9, instanceof: 9, "<<": 10, ">>": 10, ">>>": 10, "+": 11, "-": 11, "*": 12, "%": 12, "/": 12, "**": 13 }, Ft = 17, Gt = { ArrayExpression: 20, TaggedTemplateExpression: 20, ThisExpression: 20, Identifier: 20, PrivateIdentifier: 20, Literal: 18, TemplateLiteral: 20, Super: 20, SequenceExpression: 20, MemberExpression: 19, ChainExpression: 19, CallExpression: 19, NewExpression: 19, ArrowFunctionExpression: Ft, ClassExpression: Ft, FunctionExpression: Ft, ObjectExpression: Ft, UpdateExpression: 16, UnaryExpression: 15, AwaitExpression: 15, BinaryExpression: 14, LogicalExpression: 13, ConditionalExpression: 4, AssignmentExpression: 3, YieldExpression: 2, RestElement: 1 };
  function Jt(e2, t2) {
    const { generator: r2 } = e2;
    if (e2.write("("), null != t2 && t2.length > 0) {
      r2[t2[0].type](t2[0], e2);
      const { length: n2 } = t2;
      for (let o2 = 1; o2 < n2; o2++) {
        const n3 = t2[o2];
        e2.write(", "), r2[n3.type](n3, e2);
      }
    }
    e2.write(")");
  }
  function zt(e2, t2, r2, n2) {
    const o2 = e2.expressionsPrecedence[t2.type];
    if (o2 === Ft) return true;
    const i2 = e2.expressionsPrecedence[r2.type];
    return o2 !== i2 ? !n2 && 15 === o2 && 14 === i2 && "**" === r2.operator || o2 < i2 : (13 === o2 || 14 === o2) && ("**" === t2.operator && "**" === r2.operator ? !n2 : 13 === o2 && 13 === i2 && ("??" === t2.operator || "??" === r2.operator) || (n2 ? jt[t2.operator] <= jt[r2.operator] : jt[t2.operator] < jt[r2.operator]));
  }
  function Ht(e2, t2, r2, n2) {
    const { generator: o2 } = e2;
    zt(e2, t2, r2, n2) ? (e2.write("("), o2[t2.type](t2, e2), e2.write(")")) : o2[t2.type](t2, e2);
  }
  function Xt(e2, t2, r2, n2) {
    const o2 = t2.split("\n"), i2 = o2.length - 1;
    if (e2.write(o2[0].trim()), i2 > 0) {
      e2.write(n2);
      for (let t3 = 1; t3 < i2; t3++) e2.write(r2 + o2[t3].trim() + n2);
      e2.write(r2 + o2[i2].trim());
    }
  }
  function $t(e2, t2, r2, n2) {
    const { length: o2 } = t2;
    for (let i2 = 0; i2 < o2; i2++) {
      const o3 = t2[i2];
      e2.write(r2), "L" === o3.type[0] ? e2.write("// " + o3.value.trim() + "\n", o3) : (e2.write("/*"), Xt(e2, o3.value, r2, n2), e2.write("*/" + n2));
    }
  }
  function Wt(e2, t2) {
    const { generator: r2 } = e2, { declarations: n2 } = t2;
    e2.write(t2.kind + " ");
    const { length: o2 } = n2;
    if (o2 > 0) {
      r2.VariableDeclarator(n2[0], e2);
      for (let t3 = 1; t3 < o2; t3++) e2.write(", "), r2.VariableDeclarator(n2[t3], e2);
    }
  }
  let _t, Yt, Zt, Kt, Qt, er;
  const tr = { Program(e2, t2) {
    const r2 = t2.indent.repeat(t2.indentLevel), { lineEnd: n2, writeComments: o2 } = t2;
    o2 && null != e2.comments && $t(t2, e2.comments, r2, n2);
    const i2 = e2.body, { length: a2 } = i2;
    for (let e3 = 0; e3 < a2; e3++) {
      const a3 = i2[e3];
      o2 && null != a3.comments && $t(t2, a3.comments, r2, n2), t2.write(r2), this[a3.type](a3, t2), t2.write(n2);
    }
    o2 && null != e2.trailingComments && $t(t2, e2.trailingComments, r2, n2);
  }, BlockStatement: er = function(e2, t2) {
    const r2 = t2.indent.repeat(t2.indentLevel++), { lineEnd: n2, writeComments: o2 } = t2, i2 = r2 + t2.indent;
    t2.write("{");
    const a2 = e2.body;
    if (null != a2 && a2.length > 0) {
      t2.write(n2), o2 && null != e2.comments && $t(t2, e2.comments, i2, n2);
      const { length: s2 } = a2;
      for (let e3 = 0; e3 < s2; e3++) {
        const r3 = a2[e3];
        o2 && null != r3.comments && $t(t2, r3.comments, i2, n2), t2.write(i2), this[r3.type](r3, t2), t2.write(n2);
      }
      t2.write(r2);
    } else o2 && null != e2.comments && (t2.write(n2), $t(t2, e2.comments, i2, n2), t2.write(r2));
    o2 && null != e2.trailingComments && $t(t2, e2.trailingComments, i2, n2), t2.write("}"), t2.indentLevel--;
  }, ClassBody: er, StaticBlock(e2, t2) {
    t2.write("static "), this.BlockStatement(e2, t2);
  }, EmptyStatement(e2, t2) {
    t2.write(";");
  }, ExpressionStatement(e2, t2) {
    const r2 = t2.expressionsPrecedence[e2.expression.type];
    r2 === Ft || 3 === r2 && "O" === e2.expression.left.type[0] ? (t2.write("("), this[e2.expression.type](e2.expression, t2), t2.write(")")) : this[e2.expression.type](e2.expression, t2), t2.write(";");
  }, IfStatement(e2, t2) {
    t2.write("if ("), this[e2.test.type](e2.test, t2), t2.write(") "), this[e2.consequent.type](e2.consequent, t2), null != e2.alternate && (t2.write(" else "), this[e2.alternate.type](e2.alternate, t2));
  }, LabeledStatement(e2, t2) {
    this[e2.label.type](e2.label, t2), t2.write(": "), this[e2.body.type](e2.body, t2);
  }, BreakStatement(e2, t2) {
    t2.write("break"), null != e2.label && (t2.write(" "), this[e2.label.type](e2.label, t2)), t2.write(";");
  }, ContinueStatement(e2, t2) {
    t2.write("continue"), null != e2.label && (t2.write(" "), this[e2.label.type](e2.label, t2)), t2.write(";");
  }, WithStatement(e2, t2) {
    t2.write("with ("), this[e2.object.type](e2.object, t2), t2.write(") "), this[e2.body.type](e2.body, t2);
  }, SwitchStatement(e2, t2) {
    const r2 = t2.indent.repeat(t2.indentLevel++), { lineEnd: n2, writeComments: o2 } = t2;
    t2.indentLevel++;
    const i2 = r2 + t2.indent, a2 = i2 + t2.indent;
    t2.write("switch ("), this[e2.discriminant.type](e2.discriminant, t2), t2.write(") {" + n2);
    const { cases: s2 } = e2, { length: c2 } = s2;
    for (let e3 = 0; e3 < c2; e3++) {
      const r3 = s2[e3];
      o2 && null != r3.comments && $t(t2, r3.comments, i2, n2), r3.test ? (t2.write(i2 + "case "), this[r3.test.type](r3.test, t2), t2.write(":" + n2)) : t2.write(i2 + "default:" + n2);
      const { consequent: c3 } = r3, { length: l2 } = c3;
      for (let e4 = 0; e4 < l2; e4++) {
        const r4 = c3[e4];
        o2 && null != r4.comments && $t(t2, r4.comments, a2, n2), t2.write(a2), this[r4.type](r4, t2), t2.write(n2);
      }
    }
    t2.indentLevel -= 2, t2.write(r2 + "}");
  }, ReturnStatement(e2, t2) {
    t2.write("return"), e2.argument && (t2.write(" "), this[e2.argument.type](e2.argument, t2)), t2.write(";");
  }, ThrowStatement(e2, t2) {
    t2.write("throw "), this[e2.argument.type](e2.argument, t2), t2.write(";");
  }, TryStatement(e2, t2) {
    if (t2.write("try "), this[e2.block.type](e2.block, t2), e2.handler) {
      const { handler: r2 } = e2;
      null == r2.param ? t2.write(" catch ") : (t2.write(" catch ("), this[r2.param.type](r2.param, t2), t2.write(") ")), this[r2.body.type](r2.body, t2);
    }
    e2.finalizer && (t2.write(" finally "), this[e2.finalizer.type](e2.finalizer, t2));
  }, WhileStatement(e2, t2) {
    t2.write("while ("), this[e2.test.type](e2.test, t2), t2.write(") "), this[e2.body.type](e2.body, t2);
  }, DoWhileStatement(e2, t2) {
    t2.write("do "), this[e2.body.type](e2.body, t2), t2.write(" while ("), this[e2.test.type](e2.test, t2), t2.write(");");
  }, ForStatement(e2, t2) {
    if (t2.write("for ("), null != e2.init) {
      const { init: r2 } = e2;
      "V" === r2.type[0] ? Wt(t2, r2) : this[r2.type](r2, t2);
    }
    t2.write("; "), e2.test && this[e2.test.type](e2.test, t2), t2.write("; "), e2.update && this[e2.update.type](e2.update, t2), t2.write(") "), this[e2.body.type](e2.body, t2);
  }, ForInStatement: _t = function(e2, t2) {
    t2.write(`for ${e2.await ? "await " : ""}(`);
    const { left: r2 } = e2;
    "V" === r2.type[0] ? Wt(t2, r2) : this[r2.type](r2, t2), t2.write("I" === e2.type[3] ? " in " : " of "), this[e2.right.type](e2.right, t2), t2.write(") "), this[e2.body.type](e2.body, t2);
  }, ForOfStatement: _t, DebuggerStatement(e2, t2) {
    t2.write("debugger;", e2);
  }, FunctionDeclaration: Yt = function(e2, t2) {
    t2.write((e2.async ? "async " : "") + (e2.generator ? "function* " : "function ") + (e2.id ? e2.id.name : ""), e2), Jt(t2, e2.params), t2.write(" "), this[e2.body.type](e2.body, t2);
  }, FunctionExpression: Yt, VariableDeclaration(e2, t2) {
    Wt(t2, e2), t2.write(";");
  }, VariableDeclarator(e2, t2) {
    this[e2.id.type](e2.id, t2), null != e2.init && (t2.write(" = "), this[e2.init.type](e2.init, t2));
  }, ClassDeclaration(e2, t2) {
    if (t2.write("class " + (e2.id ? `${e2.id.name} ` : ""), e2), e2.superClass) {
      t2.write("extends ");
      const { superClass: r2 } = e2, { type: n2 } = r2, o2 = t2.expressionsPrecedence[n2];
      "C" === n2[0] && "l" === n2[1] && "E" === n2[5] || !(o2 === Ft || o2 < t2.expressionsPrecedence.ClassExpression) ? this[r2.type](r2, t2) : (t2.write("("), this[e2.superClass.type](r2, t2), t2.write(")")), t2.write(" ");
    }
    this.ClassBody(e2.body, t2);
  }, ImportDeclaration(e2, t2) {
    t2.write("import ");
    const { specifiers: r2, attributes: n2 } = e2, { length: o2 } = r2;
    let i2 = 0;
    if (o2 > 0) {
      for (; i2 < o2; ) {
        i2 > 0 && t2.write(", ");
        const e3 = r2[i2], n3 = e3.type[6];
        if ("D" === n3) t2.write(e3.local.name, e3), i2++;
        else {
          if ("N" !== n3) break;
          t2.write("* as " + e3.local.name, e3), i2++;
        }
      }
      if (i2 < o2) {
        for (t2.write("{"); ; ) {
          const e3 = r2[i2], { name: n3 } = e3.imported;
          if (t2.write(n3, e3), n3 !== e3.local.name && t2.write(" as " + e3.local.name), !(++i2 < o2)) break;
          t2.write(", ");
        }
        t2.write("}");
      }
      t2.write(" from ");
    }
    if (this.Literal(e2.source, t2), n2 && n2.length > 0) {
      t2.write(" with { ");
      for (let e3 = 0; e3 < n2.length; e3++) this.ImportAttribute(n2[e3], t2), e3 < n2.length - 1 && t2.write(", ");
      t2.write(" }");
    }
    t2.write(";");
  }, ImportAttribute(e2, t2) {
    this.Identifier(e2.key, t2), t2.write(": "), this.Literal(e2.value, t2);
  }, ImportExpression(e2, t2) {
    t2.write("import("), this[e2.source.type](e2.source, t2), t2.write(")");
  }, ExportDefaultDeclaration(e2, t2) {
    t2.write("export default "), this[e2.declaration.type](e2.declaration, t2), null != t2.expressionsPrecedence[e2.declaration.type] && "F" !== e2.declaration.type[0] && t2.write(";");
  }, ExportNamedDeclaration(e2, t2) {
    if (t2.write("export "), e2.declaration) this[e2.declaration.type](e2.declaration, t2);
    else {
      t2.write("{");
      const { specifiers: r2 } = e2, { length: n2 } = r2;
      if (n2 > 0) for (let e3 = 0; ; ) {
        const o2 = r2[e3], { name: i2 } = o2.local;
        if (t2.write(i2, o2), i2 !== o2.exported.name && t2.write(" as " + o2.exported.name), !(++e3 < n2)) break;
        t2.write(", ");
      }
      if (t2.write("}"), e2.source && (t2.write(" from "), this.Literal(e2.source, t2)), e2.attributes && e2.attributes.length > 0) {
        t2.write(" with { ");
        for (let r3 = 0; r3 < e2.attributes.length; r3++) this.ImportAttribute(e2.attributes[r3], t2), r3 < e2.attributes.length - 1 && t2.write(", ");
        t2.write(" }");
      }
      t2.write(";");
    }
  }, ExportAllDeclaration(e2, t2) {
    if (null != e2.exported ? t2.write("export * as " + e2.exported.name + " from ") : t2.write("export * from "), this.Literal(e2.source, t2), e2.attributes && e2.attributes.length > 0) {
      t2.write(" with { ");
      for (let r2 = 0; r2 < e2.attributes.length; r2++) this.ImportAttribute(e2.attributes[r2], t2), r2 < e2.attributes.length - 1 && t2.write(", ");
      t2.write(" }");
    }
    t2.write(";");
  }, MethodDefinition(e2, t2) {
    e2.static && t2.write("static ");
    const r2 = e2.kind[0];
    "g" !== r2 && "s" !== r2 || t2.write(e2.kind + " "), e2.value.async && t2.write("async "), e2.value.generator && t2.write("*"), e2.computed ? (t2.write("["), this[e2.key.type](e2.key, t2), t2.write("]")) : this[e2.key.type](e2.key, t2), Jt(t2, e2.value.params), t2.write(" "), this[e2.value.body.type](e2.value.body, t2);
  }, ClassExpression(e2, t2) {
    this.ClassDeclaration(e2, t2);
  }, ArrowFunctionExpression(e2, t2) {
    t2.write(e2.async ? "async " : "", e2);
    const { params: r2 } = e2;
    null != r2 && (1 === r2.length && "I" === r2[0].type[0] ? t2.write(r2[0].name, r2[0]) : Jt(t2, e2.params)), t2.write(" => "), "O" === e2.body.type[0] ? (t2.write("("), this.ObjectExpression(e2.body, t2), t2.write(")")) : this[e2.body.type](e2.body, t2);
  }, ThisExpression(e2, t2) {
    t2.write("this", e2);
  }, Super(e2, t2) {
    t2.write("super", e2);
  }, RestElement: Zt = function(e2, t2) {
    t2.write("..."), this[e2.argument.type](e2.argument, t2);
  }, SpreadElement: Zt, YieldExpression(e2, t2) {
    t2.write(e2.delegate ? "yield*" : "yield"), e2.argument && (t2.write(" "), this[e2.argument.type](e2.argument, t2));
  }, AwaitExpression(e2, t2) {
    t2.write("await ", e2), Ht(t2, e2.argument, e2);
  }, TemplateLiteral(e2, t2) {
    const { quasis: r2, expressions: n2 } = e2;
    t2.write("`");
    const { length: o2 } = n2;
    for (let e3 = 0; e3 < o2; e3++) {
      const o3 = n2[e3], i3 = r2[e3];
      t2.write(i3.value.raw, i3), t2.write("${"), this[o3.type](o3, t2), t2.write("}");
    }
    const i2 = r2[r2.length - 1];
    t2.write(i2.value.raw, i2), t2.write("`");
  }, TemplateElement(e2, t2) {
    t2.write(e2.value.raw, e2);
  }, TaggedTemplateExpression(e2, t2) {
    Ht(t2, e2.tag, e2), this[e2.quasi.type](e2.quasi, t2);
  }, ArrayExpression: Qt = function(e2, t2) {
    if (t2.write("["), e2.elements.length > 0) {
      const { elements: r2 } = e2, { length: n2 } = r2;
      for (let e3 = 0; ; ) {
        const o2 = r2[e3];
        if (null != o2 && this[o2.type](o2, t2), !(++e3 < n2)) {
          null == o2 && t2.write(", ");
          break;
        }
        t2.write(", ");
      }
    }
    t2.write("]");
  }, ArrayPattern: Qt, ObjectExpression(e2, t2) {
    const r2 = t2.indent.repeat(t2.indentLevel++), { lineEnd: n2, writeComments: o2 } = t2, i2 = r2 + t2.indent;
    if (t2.write("{"), e2.properties.length > 0) {
      t2.write(n2), o2 && null != e2.comments && $t(t2, e2.comments, i2, n2);
      const a2 = "," + n2, { properties: s2 } = e2, { length: c2 } = s2;
      for (let e3 = 0; ; ) {
        const r3 = s2[e3];
        if (o2 && null != r3.comments && $t(t2, r3.comments, i2, n2), t2.write(i2), this[r3.type](r3, t2), !(++e3 < c2)) break;
        t2.write(a2);
      }
      t2.write(n2), o2 && null != e2.trailingComments && $t(t2, e2.trailingComments, i2, n2), t2.write(r2 + "}");
    } else o2 ? null != e2.comments ? (t2.write(n2), $t(t2, e2.comments, i2, n2), null != e2.trailingComments && $t(t2, e2.trailingComments, i2, n2), t2.write(r2 + "}")) : null != e2.trailingComments ? (t2.write(n2), $t(t2, e2.trailingComments, i2, n2), t2.write(r2 + "}")) : t2.write("}") : t2.write("}");
    t2.indentLevel--;
  }, Property(e2, t2) {
    e2.method || "i" !== e2.kind[0] ? this.MethodDefinition(e2, t2) : (e2.shorthand || (e2.computed ? (t2.write("["), this[e2.key.type](e2.key, t2), t2.write("]")) : this[e2.key.type](e2.key, t2), t2.write(": ")), this[e2.value.type](e2.value, t2));
  }, PropertyDefinition(e2, t2) {
    e2.static && t2.write("static "), e2.computed && t2.write("["), this[e2.key.type](e2.key, t2), e2.computed && t2.write("]"), null != e2.value ? (t2.write(" = "), this[e2.value.type](e2.value, t2), t2.write(";")) : "F" !== e2.key.type[0] && t2.write(";");
  }, ObjectPattern(e2, t2) {
    if (t2.write("{"), e2.properties.length > 0) {
      const { properties: r2 } = e2, { length: n2 } = r2;
      for (let e3 = 0; this[r2[e3].type](r2[e3], t2), ++e3 < n2; ) t2.write(", ");
    }
    t2.write("}");
  }, SequenceExpression(e2, t2) {
    Jt(t2, e2.expressions);
  }, UnaryExpression(e2, t2) {
    if (e2.prefix) {
      const { operator: r2, argument: n2, argument: { type: o2 } } = e2;
      t2.write(r2);
      const i2 = zt(t2, n2, e2);
      i2 || !(r2.length > 1) && ("U" !== o2[0] || "n" !== o2[1] && "p" !== o2[1] || !n2.prefix || n2.operator[0] !== r2 || "+" !== r2 && "-" !== r2) || t2.write(" "), i2 ? (t2.write(r2.length > 1 ? " (" : "("), this[o2](n2, t2), t2.write(")")) : this[o2](n2, t2);
    } else this[e2.argument.type](e2.argument, t2), t2.write(e2.operator);
  }, UpdateExpression(e2, t2) {
    e2.prefix ? (t2.write(e2.operator), this[e2.argument.type](e2.argument, t2)) : (this[e2.argument.type](e2.argument, t2), t2.write(e2.operator));
  }, AssignmentExpression(e2, t2) {
    this[e2.left.type](e2.left, t2), t2.write(" " + e2.operator + " "), this[e2.right.type](e2.right, t2);
  }, AssignmentPattern(e2, t2) {
    this[e2.left.type](e2.left, t2), t2.write(" = "), this[e2.right.type](e2.right, t2);
  }, BinaryExpression: Kt = function(e2, t2) {
    const r2 = "in" === e2.operator;
    r2 && t2.write("("), Ht(t2, e2.left, e2, false), t2.write(" " + e2.operator + " "), Ht(t2, e2.right, e2, true), r2 && t2.write(")");
  }, LogicalExpression: Kt, ConditionalExpression(e2, t2) {
    const { test: r2 } = e2, n2 = t2.expressionsPrecedence[r2.type];
    n2 === Ft || n2 <= t2.expressionsPrecedence.ConditionalExpression ? (t2.write("("), this[r2.type](r2, t2), t2.write(")")) : this[r2.type](r2, t2), t2.write(" ? "), this[e2.consequent.type](e2.consequent, t2), t2.write(" : "), this[e2.alternate.type](e2.alternate, t2);
  }, NewExpression(e2, t2) {
    t2.write("new ");
    const r2 = t2.expressionsPrecedence[e2.callee.type];
    r2 === Ft || r2 < t2.expressionsPrecedence.CallExpression || (function(e3) {
      let t3 = e3;
      for (; null != t3; ) {
        const { type: e4 } = t3;
        if ("C" === e4[0] && "a" === e4[1]) return true;
        if ("M" !== e4[0] || "e" !== e4[1] || "m" !== e4[2]) return false;
        t3 = t3.object;
      }
    })(e2.callee) ? (t2.write("("), this[e2.callee.type](e2.callee, t2), t2.write(")")) : this[e2.callee.type](e2.callee, t2), Jt(t2, e2.arguments);
  }, CallExpression(e2, t2) {
    const r2 = t2.expressionsPrecedence[e2.callee.type];
    r2 === Ft || r2 < t2.expressionsPrecedence.CallExpression ? (t2.write("("), this[e2.callee.type](e2.callee, t2), t2.write(")")) : this[e2.callee.type](e2.callee, t2), e2.optional && t2.write("?."), Jt(t2, e2.arguments);
  }, ChainExpression(e2, t2) {
    this[e2.expression.type](e2.expression, t2);
  }, MemberExpression(e2, t2) {
    const r2 = t2.expressionsPrecedence[e2.object.type];
    r2 === Ft || r2 < t2.expressionsPrecedence.MemberExpression ? (t2.write("("), this[e2.object.type](e2.object, t2), t2.write(")")) : this[e2.object.type](e2.object, t2), e2.computed ? (e2.optional && t2.write("?."), t2.write("["), this[e2.property.type](e2.property, t2), t2.write("]")) : (e2.optional ? t2.write("?.") : t2.write("."), this[e2.property.type](e2.property, t2));
  }, MetaProperty(e2, t2) {
    t2.write(e2.meta.name + "." + e2.property.name, e2);
  }, Identifier(e2, t2) {
    t2.write(e2.name, e2);
  }, PrivateIdentifier(e2, t2) {
    t2.write(`#${e2.name}`, e2);
  }, Literal(e2, t2) {
    null != e2.raw ? t2.write(e2.raw, e2) : null != e2.regex ? this.RegExpLiteral(e2, t2) : null != e2.bigint ? t2.write(e2.bigint + "n", e2) : t2.write(Mt(e2.value), e2);
  }, RegExpLiteral(e2, t2) {
    const { regex: r2 } = e2;
    t2.write(`/${r2.pattern}/${r2.flags}`, e2);
  } }, rr = {};
  class nr {
    constructor(e2) {
      const t2 = null == e2 ? rr : e2;
      this.output = "", null != t2.output ? (this.output = t2.output, this.write = this.writeToStream) : this.output = "", this.generator = null != t2.generator ? t2.generator : tr, this.expressionsPrecedence = null != t2.expressionsPrecedence ? t2.expressionsPrecedence : Gt, this.indent = null != t2.indent ? t2.indent : "  ", this.lineEnd = null != t2.lineEnd ? t2.lineEnd : "\n", this.indentLevel = null != t2.startingIndentLevel ? t2.startingIndentLevel : 0, this.writeComments = !!t2.comments && t2.comments, null != t2.sourceMap && (this.write = null == t2.output ? this.writeAndMap : this.writeToStreamAndMap, this.sourceMap = t2.sourceMap, this.line = 1, this.column = 0, this.lineEndSize = this.lineEnd.split("\n").length - 1, this.mapping = { original: null, generated: this, name: void 0, source: t2.sourceMap.file || t2.sourceMap._file });
    }
    write(e2) {
      this.output += e2;
    }
    writeToStream(e2) {
      this.output.write(e2);
    }
    writeAndMap(e2, t2) {
      this.output += e2, this.map(e2, t2);
    }
    writeToStreamAndMap(e2, t2) {
      this.output.write(e2), this.map(e2, t2);
    }
    map(e2, t2) {
      if (null != t2) {
        const { type: r3 } = t2;
        if ("L" === r3[0] && "n" === r3[2]) return this.column = 0, void this.line++;
        if (null != t2.loc) {
          const { mapping: e3 } = this;
          e3.original = t2.loc.start, e3.name = t2.name, this.sourceMap.addMapping(e3);
        }
        if ("T" === r3[0] && "E" === r3[8] || "L" === r3[0] && "i" === r3[1] && "string" == typeof t2.value) {
          const { length: t3 } = e2;
          let { column: r4, line: n3 } = this;
          for (let o2 = 0; o2 < t3; o2++) "\n" === e2[o2] ? (r4 = 0, n3++) : r4++;
          return this.column = r4, void (this.line = n3);
        }
      }
      const { length: r2 } = e2, { lineEnd: n2 } = this;
      r2 > 0 && (this.lineEndSize > 0 && (1 === n2.length ? e2[r2 - 1] === n2 : e2.endsWith(n2)) ? (this.line += this.lineEndSize, this.column = 0) : this.column += r2);
    }
    toString() {
      return this.output;
    }
  }
  const or2 = { parse: function(e2, t2) {
    return de(e2, t2);
  } }, ir = { generate: function(e2, t2) {
    const r2 = new nr(t2);
    return r2.generator[e2.type](e2, r2), r2.output;
  } };
  return e.astring = ir, e.meriyah = or2, e;
})({});
var lib_default = lib;

// sources/youtube/vendor/core.js
var { meriyah, astring } = lib_default;
/*!
 * SPDX-License-Identifier: Unlicense
 * This file was automatically generated by https://github.com/yt-dlp/ejs
 */
var jsc = (function(e, n) {
  "use strict";
  function t(e2, n2) {
    if (Array.isArray(n2)) return !!Array.isArray(e2) && (n2.length === e2.length && n2.every((n3, o2) => t(e2[o2], n3)));
    if ("object" == typeof n2) {
      if (!e2) return !n2;
      if ("or" in n2) return n2.or.some((n3) => t(e2, n3));
      if ("anykey" in n2 && Array.isArray(n2.anykey)) {
        const o2 = Array.isArray(e2) ? e2 : Object.values(e2);
        return n2.anykey.every((e3) => o2.some((n3) => t(n3, e3)));
      }
      for (const [o2, s2] of Object.entries(n2)) if (!t(e2[o2], s2)) return false;
      return true;
    }
    return n2 === e2;
  }
  function o(n2) {
    return e.parse(n2).body[0].expression;
  }
  function s(e2) {
    let n2, t2 = e2[0], o2 = 1;
    for (; o2 < e2.length; ) {
      const s2 = e2[o2], r2 = e2[o2 + 1];
      if (o2 += 2, ("optionalAccess" === s2 || "optionalCall" === s2) && null == t2) return;
      "access" === s2 || "optionalAccess" === s2 ? (n2 = t2, t2 = r2(t2)) : "call" !== s2 && "optionalCall" !== s2 || (t2 = r2((...e3) => t2.call(n2, ...e3)), n2 = void 0);
    }
    return t2;
  }
  const r = { or: [{ type: "ExpressionStatement", expression: { type: "AssignmentExpression", operator: "=", left: { or: [{ type: "Identifier" }, { type: "MemberExpression" }] }, right: { type: "FunctionExpression", async: false } } }, { type: "FunctionDeclaration", async: false, id: { type: "Identifier" } }, { type: "VariableDeclaration", declarations: { anykey: [{ type: "VariableDeclarator", init: { type: "FunctionExpression", async: false } }] } }] }, i = { type: "ExpressionStatement", expression: { type: "CallExpression", callee: { type: "MemberExpression", object: { type: "Identifier" }, property: {}, optional: false }, arguments: [{ type: "Literal", value: "alr" }, { type: "Literal", value: "yes" }], optional: false } };
  function p(e2) {
    if (!t(e2, r)) return null;
    const n2 = [];
    if ("FunctionDeclaration" === e2.type) e2.id && s([e2, "access", (e3) => e3.body, "optionalAccess", (e3) => e3.body]) && n2.push({ name: e2.id, statements: s([e2, "access", (e3) => e3.body, "optionalAccess", (e3) => e3.body]) });
    else if ("ExpressionStatement" === e2.type) {
      if ("AssignmentExpression" !== e2.expression.type) return null;
      const t2 = e2.expression.left, o2 = s([e2.expression.right, "optionalAccess", (e3) => e3.body, "optionalAccess", (e3) => e3.body]);
      t2 && o2 && n2.push({ name: t2, statements: o2 });
    } else if ("VariableDeclaration" === e2.type) for (const t2 of e2.declarations) {
      const e3 = t2.id, o2 = s([t2.init, "optionalAccess", (e4) => e4.body, "optionalAccess", (e4) => e4.body]);
      e3 && o2 && n2.push({ name: e3, statements: o2 });
    }
    for (const { name: e3, statements: o2 } of n2) if (t(o2, { anykey: [i] })) return a(e3);
    return null;
  }
  function a(e2) {
    return o(`
({sig, n}) => {
  const url = (${n.generate(e2)})("https://youtube.com/watch?v=yt-dlp-wins", "s", sig ? encodeURIComponent(sig) : undefined);
  url.set("n", n);
  const proto = Object.getPrototypeOf(url);
  const keys = Object.keys(proto).concat(Object.getOwnPropertyNames(proto));
  for (const key of keys) {
    if (!["constructor", "set", "get", "clone"].includes(key)) {
      url[key]();
      break;
    }
  }
  const s = url.get("s");
  return {
    sig: s ? decodeURIComponent(s) : null,
    n: url.get("n") ?? null,
  };
}
`);
  }
  const l = e.parse('\nif (typeof globalThis.XMLHttpRequest === "undefined") {\n    globalThis.XMLHttpRequest = { prototype: {} };\n}\nif (typeof URL === "undefined") {\n    globalThis.location = {\n        hash: "",\n        host: "www.youtube.com",\n        hostname: "www.youtube.com",\n        href: "https://www.youtube.com/watch?v=yt-dlp-wins",\n        origin: "https://www.youtube.com",\n        password: "",\n        pathname: "/watch",\n        port: "",\n        protocol: "https:",\n        search: "?v=yt-dlp-wins",\n        username: "",\n    };\n} else {\n    globalThis.location = new URL("https://www.youtube.com/watch?v=yt-dlp-wins");\n}\nif (typeof globalThis.document === "undefined") {\n    globalThis.document = Object.create(null);\n}\nif (typeof globalThis.navigator === "undefined") {\n    globalThis.navigator = Object.create(null);\n}\nif (typeof globalThis.self === "undefined") {\n    globalThis.self = globalThis;\n}\nif (typeof globalThis.window === "undefined") {\n    globalThis.window = globalThis;\n}\n').body;
  function c(e2) {
    let n2, t2 = e2[0], o2 = 1;
    for (; o2 < e2.length; ) {
      const s2 = e2[o2], r2 = e2[o2 + 1];
      if (o2 += 2, ("optionalAccess" === s2 || "optionalCall" === s2) && null == t2) return;
      "access" === s2 || "optionalAccess" === s2 ? (n2 = t2, t2 = r2(t2)) : "call" !== s2 && "optionalCall" !== s2 || (t2 = r2((...e3) => t2.call(n2, ...e3)), n2 = void 0);
    }
    return t2;
  }
  function u(t2) {
    const o2 = e.parse(t2), s2 = (function(e2) {
      const n2 = e2.body, t3 = (() => {
        switch (n2.length) {
          case 1: {
            const e3 = n2[0];
            if ("ExpressionStatement" === c([e3, "optionalAccess", (e4) => e4.type]) && "CallExpression" === e3.expression.type && "MemberExpression" === e3.expression.callee.type && "FunctionExpression" === e3.expression.callee.object.type) return e3.expression.callee.object.body;
            break;
          }
          case 2: {
            const e3 = n2[1];
            if ("ExpressionStatement" === c([e3, "optionalAccess", (e4) => e4.type]) && "CallExpression" === e3.expression.type && "FunctionExpression" === e3.expression.callee.type) {
              const n3 = e3.expression.callee.body;
              return n3.body.splice(0, 1), n3;
            }
            break;
          }
        }
        throw "unexpected structure";
      })();
      return t3.body = t3.body.filter((e3) => "ExpressionStatement" !== e3.type || ("AssignmentExpression" === e3.expression.type || "Literal" === e3.expression.type)), t3.body;
    })(o2), r2 = (function(e2) {
      const n2 = { n: [], sig: [] };
      for (const t3 of e2) {
        const e3 = p(t3);
        e3 && (n2.n.push(y(e3, { type: "Identifier", name: "n" })), n2.sig.push(y(e3, { type: "Identifier", name: "sig" })));
      }
      return n2;
    })(s2);
    for (const [e2, n2] of Object.entries(r2)) s2.push({ type: "ExpressionStatement", expression: { type: "AssignmentExpression", operator: "=", left: { type: "MemberExpression", computed: false, object: { type: "Identifier", name: "_result" }, property: { type: "Identifier", name: e2 }, optional: false }, right: f(n2) } });
    return o2.body.splice(0, 0, ...l), n.generate(o2);
  }
  function y(e2, n2) {
    return { type: "ArrowFunctionExpression", params: [n2], body: { type: "MemberExpression", object: { type: "CallExpression", callee: e2, arguments: [{ type: "ObjectExpression", properties: [{ type: "Property", key: n2, value: n2, kind: "init", computed: false, method: false, shorthand: true }] }], optional: false }, computed: false, property: n2, optional: false }, async: false, expression: true, generator: false };
  }
  function f(e2) {
    return o(`
(_input) => {
  const _results = new Set();
  const errors = [];
  for (const _generator of ${n.generate({ type: "ArrayExpression", elements: e2 })}) {
    try {
      _results.add(_generator(_input));
    } catch (e) {
      errors.push(e);
    }
  }
  if (!_results.size) {
    throw \`no solutions: \${errors.join(", ")}\`;
  }
  if (_results.size !== 1) {
    throw \`invalid solutions: \${[..._results].map(x => JSON.stringify(x)).join(", ")}\`;
  }
  return _results.values().next().value;
}
`);
  }
  return function(e2) {
    const n2 = "player" === e2.type ? u(e2.player) : e2.preprocessed_player, t2 = (function(e3) {
      const n3 = { n: null, sig: null };
      return Function("_result", e3)(n3), n3;
    })(n2), o2 = { type: "result", responses: e2.requests.map((e3) => {
      if (!(function(e4, ...n4) {
        return n4.includes(e4);
      })(e3.type, "n", "sig")) return { type: "error", error: `Unknown request type: ${e3.type}` };
      const n3 = t2[e3.type];
      if (!n3) return { type: "error", error: `Failed to extract ${e3.type} function` };
      try {
        return { type: "result", data: Object.fromEntries(e3.challenges.map((e4) => [e4, n3(e4)])) };
      } catch (e4) {
        return { type: "error", error: e4 instanceof Error ? `${e4.message}
${e4.stack}` : `${e4}` };
      }
    }) };
    return "player" === e2.type && e2.output_preprocessed && (o2.preprocessed_player = n2), o2;
  };
})(meriyah, astring);
var core_default = jsc;

// sources/youtube/src/challenge.js
function solvePlayer(player, signatures, nChallenges, prepared) {
  const requests = [];
  if (signatures.length) requests.push({ type: "sig", challenges: signatures });
  if (nChallenges.length) requests.push({ type: "n", challenges: nChallenges });
  const r = core_default({ ...prepared ? { type: "preprocessed", preprocessed_player: prepared } : { type: "player", player }, requests, output_preprocessed: true });
  if (r.type !== "result" || r.responses?.length !== requests.length) fail("YouTube challenge failed");
  const sig = {}, n = {};
  r.responses.forEach((response, i) => {
    if (response.type !== "result" || !response.data) return;
    const target = requests[i].type === "sig" ? sig : n;
    for (const [key, value] of Object.entries(response.data)) if (typeof value === "string" && value) target[key] = value;
  });
  return { sig, n, prepared: r.preprocessed_player };
}

// tool/source_probe.js
async function resolve(input) {
  return input;
}
async function parse3(input) {
  if (input.operation === "challenge") return solvePlayer(input.player ?? "", input.signatures ?? [], input.nChallenges ?? [], input.prepared);
  if (input.operation === "data") return { data: readData(input.text) };
  return {
    douyin: await aBogus("aweme_id=123&aid=6383", { startTime: 17e11, endTime: 1700000000006, randomValues: [1234, 5678, 9012] }),
    xiaoheihe: (await sign("/bbs/app/link/tree", { time: 17e8, nonce: "0123456789ABCDEF0123456789ABCDEF" })).hkey,
    zhihu: await sign2("/api/v4/answers/123?include=data[*].content", "fixture-d_c0", { iv: Array.from({ length: 16 }, (_, i) => i) }),
    wbi: (await signWbi({ foo: "114", bar: "514", zab: "1919810" }, "https://i.example/7cd084941338484aae1ad9425b84077c.png", "https://i.example/4932caff0ff746eab6f01bf08b70ac45.png", 1702204169)).w_rid,
    threads: postId("___________")
  };
}
export {
  parse3 as parse,
  resolve
};
