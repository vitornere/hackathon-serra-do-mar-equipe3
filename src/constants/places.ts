export interface Place {
    id: number,
    img: string,
    title: string,
    description: string
}

const places: Place[] = [
    {
      id: 0,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2017/12/FEA/galeria/56178_w840h525_1513688412galinhos.jpg',
      title: 'GALINHOS, RIO GRANDE DO NORTE',
      description: 'A charmosa cidade de Galinhos e sua vizinha Galos ficam a apenas 160 km de Natal em um território ainda desconhecido por grande parte dos turistas. Os vilarejos rústicos guardam todo charme e calmaria que só o Nordeste pode te proporcionar. Carros não circulam por lá, fazendo com que o local se torne ainda mais incrível e isolado - o trajeto é feito através de balsa. O farol desativado é um dos charmes de lá, além do pôr do sol irresistível.'
    },
    {
      id: 1,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2019/07/FEA/galeria/56178_w840h525_1562004415shutterstock-1317775376.jpg',
      title: 'CONDE, PARAÍBA',
      description: 'Parece o Caribe, mas na verdade o lugar da foto é Conde, no litoral da Paraíba. A região é conhecida por abrigar praias de águas cristalinas, sendo o lugar certo para quem quer curtir um cenário paradisíaco sem gastar pequenas fortunas. Com uma paisagem paradisíaca, a Praia de Coqueirinho é a mais famosa da cidade. O cenário é formado por coqueiros e falésias, onde surfistas e banhistas dividem o mesmo espaço'
    },
    {
      id: 2,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2017/12/FEA/galeria/56178_w840h525_1513688403icarai-de-amontada.jpg',
      title: 'ICARAI DE AMONTADA, CEARÁ',
      description: 'A apenas 220 km da badalada Fortaleza está um paraíso de águas cristalinas. Estamos falando de Icaraí de Amontada, pequeno povoado simpático que acolhe muito bem os turistas que procuram sossego e paisagens novas em meio ao litoral cearense. Por lá é possível encontrar de tudo um pouco: desde esportes aquáticos impulsionados pela força do vendo a até mesmo piscinas naturais refrescantes durante a maré baixa. O estilo rústico molda as hospedagens e os poucos restaurantes de lá, sendo um destino perfeito para descansar e curtir a paisagem.'
    },
    {
      id: 3,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2017/12/FEA/galeria/56178_w840h525_1513688390pouso-do-cajaiba.jpg',
      title: 'POUSO DO CAJAIBA, RIO DE JANEIRO',
      description: 'Se você quer conhecer lugares quase desconhecidos, precisa visitar Pouso da Cajaíba, no litoral sul de Paraty. A Enseada do Pouso, a cerca de 2 horas de barco de Paraty, possui belas praias e uma região totalmente preservada por uma Reserva Ecológica. Dentre essas praias destaca-se a Praia do Pouso da Cajaíba, que possui mais infraestrutura, apesar de ser uma das menores, com pouco mais de 300 metros de extensão.'
    },
    {
      id: 4,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2017/12/FEA/galeria/56178_w840h525_1513688396aiuruoca.jpg',
      title: 'AIURUOCA, MINAS GERAIS',
      description: 'Aiuruoca está localizada no Sul do Estado de Minas Gerais em meio a Serra da Mantiqueira e o Parque Estadual Serra do Papagaio, sendo considerado um destino incrível de ecoturismo no Brasil. Dentre as atrações imperdíveis de lá estão visitas a cachoeiras, grutas, trilhas e paisagens de tirar o fôlego. Agências de turismo no local realizam tours guiados pelos principais pontos turísticos da região! Além disso, a cidade conta com pousadas e hotéis charmosos no melhor estilo mineiro.'
    },
    {
      id: 5,
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2017/12/FEA/galeria/56178_w840h525_1513688368alter-do-chao.jpg',
      title: 'ALTER DO CHÃO, PARÁ',
      description: 'Alter do Chão, em Santarém, fica bem próxima a Amazônia e é um dos destinos mais conhecidos da região. Parte de sua popularidade se explica por suas águas doces, que formam a maior praia de água doce do mundo! O local, que recebe águas do rio Tapajós, foi apelidado de Caribe Amazônico. A praia aparece no período de vazante do rio, entre os meses de agosto e janeiro. Por isso, durante o verão, o local se torna um verdadeiro point, atraindo pessoas do mundo inteiro e de diferentes idades.'
    },
  ]
export default places;