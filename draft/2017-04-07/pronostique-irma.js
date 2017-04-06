import React, {Component} from 'react';

import ComponentArticle from '../../../templates/ComponentArticle';

class Irma extends Component {
  static propTypes = {
    route: React.PropTypes.object,
  }

  render() {
    return (
      <ComponentArticle
        article={this.props.route.page}
      >

      </ComponentArticle>
    );
  }
}

export default Irma;

exports.data = {
  title: 'Notre experte vous dévoile ses prévisions sondagières',
  date: '6 avril 2017',
  type: 'pronostique',
  thumbnail: 'thumbnail.png',
  description: 'Notre estimable collègue Mme Irma vous dévoile en exclusivité ses prévisions pour la future élection présidentielle.',
};


// JLM
//
// Je vois... je vois... je vois des gens sur une place... beaucoup de gens... Je vois des poings levés...
// Je vois maintenant des champs, des petits champs, avec un ciel bien dégagé, un beau soleil...
// On dirait des champs de maïs ... non, ce n'est pas du maïs... on dirait plutôt du quinoa.
//
//
// Hamon
//
// Je vois... Je vois... des hommes. Plusieurs hommes... Ah, certains se retournent et marchent au loin...
// Je n'en vois plus qu'un... Il reste là... Il tient une rose, les pétales semblent flétris.
// Aïe, l'homme s'est piqué le doigt sur une épine.
//
// Macron
//
// Je vois... Je vois... une image floue... Je distingue mal les contours, ils ondulent de gauche à droite...
// On dirait un homme. Il hurle quelque chose mais je ne comprends pas quoi.
// L'image devient plus nette, l'homme semble finalement marcher vers la droite...
//
// Fillon
//
// Je vois... Je vois... je vois des gens dans les rues... Beaucoup de gens... Ils semblent mécontents...
// Je vois une femme qui travaille... ah... je ne la vois plus...
// J'entends un bruit qui se rapproche... on dirait... des bruits métalliques... c'est assourdissant...
//
// Le pen
// Je vois... Je vois... une femme... Je vois aussi un oeil au dessus d'elle... Un seul oeil, c'est vraiment étrange...
// On dirait qu'elle lui demande d'arrêter de la suivre mais l'oeil est toujours là, il grossit... Je ne vois plus que l'oeil.
