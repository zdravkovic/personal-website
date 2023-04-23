// Make textarea auto resize when typing
const textAreaAutoScale = $("textarea").each(function() {
   this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
 }).on("input", function() {
   this.style.height = '5rem';
   this.style.height = (this.scrollHeight) + "px";
});

 export default textAreaAutoScale;