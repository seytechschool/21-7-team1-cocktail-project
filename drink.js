// let coctailName = "";
export function setCoctailName() {
  //   coctailName = str;
  //   console.log(coctailName);

  const divHtml = `<section class="single-drink">
      <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" class="drink-img" alt="">
      <article class="drink-info">
        <h2 class="drink-name">ABC</h2>
        <p class="drink-desc">Layered in a shot glass.</p>
        <ul class="drink-ingredients"><li><i class="far fa-check-square"></i>Amaretto</li><li><i class="far fa-check-square"></i>Baileys irish cream</li><li><i class="far fa-check-square"></i>Cognac</li></ul>
        <a href="index.html" class="btn">all cocktails</a>
      </article>
    </section>`;

  document.body.innerHTML = divHtml;
}
