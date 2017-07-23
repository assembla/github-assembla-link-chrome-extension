// first visit
replaceToLink();
// change page
document.addEventListener('pjax:success', ()  => {
  replaceToLink();
});

function replaceToLink() {
  const markdownComments = document.body.querySelectorAll('.comment-body.markdown-body');
  markdownComments.forEach(elm => {
    replacedText = elm.innerHTML.replace(/re #\w+\/(\w+)\/(\d+)/g, (match, space, number) => {
      const url = `https://app.assembla.com/spaces/${space}/tickets/${number}/details`;
      return `<a href="${url}">${match}</a>`;
    });
    elm.innerHTML = replacedText;
  });
}
