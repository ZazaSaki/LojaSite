export const brand = {
  name: 'Simple Pure',
  tagline: 'O seu ritual SPA',
  positioning: 'spa e cosmética natural em Castelo Branco, Portugal',
  motto: 'Trate por dentro o que se vê por fora',
};

export const services = {
  treatments: [
    'PURE RITUAL',
    'PURE MASSAGE',
    'PURE FACE',
    'PURE BOBY',
    'PURE EPIL',
    'PURE FOTOTERAPI',
    'PURE MANICURE',
    'PURE BELL',
    'PURE THERAPYS',
    'PURE MEDPEDICURE',
  ],
  groups: [
    'Serviço A  PURE BEM ESTAR',
    'Serviço B PURE ESTÉTICA',
    'Serviço C PURE EPIL',
    'Serviço D PURE PEDI/ MANI',
    'Outros Serviços',
  ],
};

export const promotion = {
  title: '1 Like = 5% de Desconto',
  terms: ['Válido para qualquer tratamento', 'após confirmação do like'],
  image: '/Promo.jpg',
};

export const location = {
  address: 'Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco',
  mapsUrl:
    'https://www.google.pt/maps/place/Simple+Pure+-+Spa/@39.8213652,-7.4945025,17z/data=!3m1!4b1!4m5!3m4!1s0xd3d5fcd85a13457:0x886599f94585994b!8m2!3d39.8213621!4d-7.4923087',
};

// Presentation helper: normalise only duplicated whitespace, keep text verbatim.
export function normalizeGroupName(s) {
  return s.trim().replace(/\s+/g, ' ');
}
