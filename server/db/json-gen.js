[
    '{{repeat(5, 500)}}',
    {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      guid: '{{guid()}}',
      isActive: '{{bool()}}',
      price: '{{floating(0, 200, 2, "$0,0.00")}}',
      picture: 'http://placehold.it/32x32',
      availability: '{{integer(0, 50)}}',
      name: '{{lorem(1, "words")}}',
      manufacture: '{{company()}}',
      about: '{{lorem(1, "paragraphs")}}',
      registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
    }
  ]