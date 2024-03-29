const projects = (req, resp) => {
  resp.status(200).json({
    projects: [
      {
        id: 1,
        color: '#C9CCE5',
        title: 'Daily UI',
        route: 'dailyUI',
        hoverColor: '#6B73BC',
        Children: 'dailyui',
      },
      {
        id: 2,
        color: '#D8ECED',
        title: 'Pika',
        route: 'pika',
        Children: 'pika',
        hoverColor: '#5CC1C8',
      },
      {
        id: 3,
        title: 'Rocket Froz',
        color: '#E3F4E5',
        route: 'rocket',
        Children: 'rocketFroz',
        hoverColor: '#2BCB6B',
      },
    ],
    experiments: [
      {
        id: 1,
        title: 'Illustration',
        color: '#FFFBD8',
        route: 'illustration',
        Children: 'illustration',
        hoverColor: '#DED052',
      },
      {
        id: 2,
        title: 'Branding',
        color: '#FFF4F6',
        route: 'branding',
        Children: 'branding',
        hoverColor: '#DE5269',
      },
      {
        id: 3,
        title: 'Windsurf',
        color: '#D8ECED',
        route: 'windsurf',
        Children: 'windsurf',
        hoverColor: '#5CC1C8',
      },
      {
        id: 4,
        title: 'Sketching',
        color: '#FBE0C8',
        route: 'sketching',
        Children: 'sketching',
        hoverColor: '#DE9552',
      },
    ],
    dailyUI: {
      mobile: [
        {
          uid: 'bb3cc9b2-db96-4dd1-b35d-119213acb9ff',
          filename: '001',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/001',
          title: 'Sign Up',
          tag: 'mobile',
        },
        {
          uid: '57c58cc1-6402-462d-ae2a-769e346e7e91',
          filename: '004',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/004',
          title: 'Calculator',
          tag: 'mobile',
        },
        {
          uid: 'f9417415-737f-4ab4-b40d-e014b9b357a6',
          filename: '020',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/020',
          title: 'Location Tracker',
          tag: 'mobile',
        },
        {
          uid: '85a3d6f1-bd59-45ee-b2ac-d509233a6fcc',
          filename: '033',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/033',
          title: 'Customize Product',
          tag: 'mobile',
        },
        {
          uid: 'c593fdf6-2172-437a-a3ab-d7a302effdc1',
          filename: '040',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/040',
          title: 'Recipe',
          tag: 'mobile',
        },
        {
          uid: '8f026aec-11b3-4e1d-9431-619d80295523',
          filename: '054',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/054',
          title: 'Confirm Reservation',
          tag: 'mobile',
        },
        {
          uid: 'f453d0dc-0cdb-4aa9-981c-157d6ad38845',
          filename: '070',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/070',
          title: 'Event Listing',
          tag: 'mobile',
        },
        {
          uid: '8b3bba87-1926-4795-926c-5bee58d9f465',
          filename: '079',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/079',
          title: 'Itinerary',
          tag: 'mobile',
        },
        {
          uid: 'cf164b33-8a85-40dc-80ca-4fd99b325ed3',
          filename: '096',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/096',
          title: 'In Stock',
          tag: 'mobile',
        },
        {
          uid: '89b9e27e-e8da-4021-97bb-90248ea379d1',
          filename: '099',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/mobile/099',
          title: '099',
          tag: 'mobile',
        },
      ],
      desktop: [
        {
          uid: '1d7c551e-1f47-4a6e-b30e-7c2a56ec633f',
          filename: '009',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/009',
          title: 'Music Player',
          tag: 'desktop',
        },
        {
          uid: '6eaacc62-39ee-43ea-b423-5bdd8236b076',
          filename: '012',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/012',
          title: 'Single Product',
          tag: 'desktop',
        },
        {
          uid: '3f1d2e23-78fb-44ad-a63b-991ee7e70816',
          filename: '035',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/035',
          title: 'Blog Post',
          tag: 'desktop',
        },
        {
          uid: 'bc3cdcea-33f2-47f0-a4a3-ff0385a66290',
          filename: '038',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/038',
          title: 'Calendar',
          tag: 'desktop',
        },
        {
          uid: '668c141d-8909-4f7b-a65c-19c9d7c9cc26',
          filename: '045',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/045',
          title: 'Info Card',
          tag: 'desktop',
        },
        {
          uid: '75827b91-4320-482b-8286-93ea13bc09a3',
          filename: '048',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/048',
          title: 'Coming Soon',
          tag: 'desktop',
        },
        {
          uid: '50d48ec1-4a6c-4969-b1ae-5aef6334b149',
          filename: '050',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/050',
          title: 'Job Listing',
          tag: 'desktop',
        },
        {
          uid: 'e1b643d8-6ff7-4b1f-b267-700808f17784',
          filename: '057',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/057',
          title: 'Video Player',
          tag: 'desktop',
        },
        {
          uid: '3476fe5f-6bd3-4101-8bd4-a3fe8ee27048',
          filename: '065',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/065',
          title: 'Notes Widget',
          tag: 'desktop',
        },
        {
          uid: '77dfa5e6-9237-41ed-9ca5-ba3652248a9b',
          filename: '082',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/082',
          title: 'Form',
          tag: 'desktop',
        },
        {
          uid: '06510bf4-9704-41ac-9586-fdf31b49c8ff',
          filename: '097',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/097',
          title: 'Giveaway',
          tag: 'desktop',
        },
        {
          uid: '52c86f05-3383-4f7a-a9b5-3f422a61e4e1',
          filename: '100',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/desktop/100',
          title: '100',
          tag: 'desktop',
        },
      ],
      gif: [
        {
          uid: 'b3849a71-6ded-4a1d-a959-a1ace29d0d6e',
          filename: '010',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/010',
          title: 'Social Share',
          tag: 'gif',
        },
        {
          uid: '7f86fc07-6665-41e9-afba-a76d0edcbc23',
          filename: '014',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/014',
          title: 'Countdown Timer',
          tag: 'gif',
        },
        {
          uid: 'b27def50-77ba-4e4d-8eff-c98ab29c80e3',
          filename: '015',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/015',
          title: 'On Off Switch',
          tag: 'gif',
        },
        {
          uid: '55515d64-1aef-4605-91b6-6f4fe2b63c5a',
          filename: '022',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/022',
          title: 'Search',
          tag: 'gif',
        },
        {
          uid: 'bb259a74-645d-41c1-9e2c-8b05614bbb6f',
          filename: '076',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/076',
          title: 'Loading',
          tag: 'gif',
        },
        {
          uid: 'bb9a37b8-a580-4e50-bc8b-4412da43c565',
          filename: '083',
          filepath: 'https://storage.googleapis.com/assets-portafolio/gif/083',
          title: 'Button',
          tag: 'gif',
        },
      ],
      others: [
        {
          uid: '013ece1f-f3d8-47e7-896c-f49fdd74e508',
          filename: '005',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/005',
          title: 'App Icon',
          tag: 'others',
        },
        {
          uid: '2ed97e10-6942-4071-b257-e39c39b66d0c',
          filename: '024',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/024',
          title: 'Boarding Pass',
          tag: 'others',
        },
        {
          uid: '667e8092-4869-4fb0-ab0d-0cdfe23abcac',
          filename: '032',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/032',
          title: 'Crowdfunding Campaign',
          tag: 'others',
        },
        {
          uid: '4431b923-3cc4-40f3-80ca-01cfb451e3de',
          filename: '036',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/036',
          title: 'Special Offer',
          tag: 'others',
        },
        {
          uid: 'e3b36615-8749-4ada-9fee-40d6715b8a60',
          filename: '037',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/037',
          title: 'Weather',
          tag: 'others',
        },
        {
          uid: '35edd78b-0383-4ed6-b2e2-22db7f19f54f',
          filename: '039',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/039',
          title: 'Testimonials',
          tag: 'others',
        },
        {
          uid: '9bbc2d4a-3d62-4624-9e55-dcaa0825731b',
          filename: '046',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/046',
          title: 'Invoice',
          tag: 'others',
        },
        {
          uid: 'aff0c0d8-1a7f-4c09-ba29-0a5825168207',
          filename: '055',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/055',
          title: 'Icon Set',
          tag: 'others',
        },
        {
          uid: 'ddf50780-30f2-489b-88e7-1a253eb86e5f',
          filename: '061',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/061',
          title: 'Redeem Coupon',
          tag: 'others',
        },
        {
          uid: '5c1b4231-19b8-4d3c-955c-1d3fcf529c6d',
          filename: '073',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/others/073',
          title: 'Virtual Reality',
          tag: 'others',
        },
      ],
    },
    illustrations: {
      tesis: [
        {
          uid: '43e971a3-8e5c-4340-abac-2698db6297d5',
          title: 'Sports Bridge',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_c_1.jpg',
          gridColumn: '1/4',
          tag: 'tesis',
        },
        {
          uid: 'd13e3252-7803-4895-8a3e-6d8ae2f54f9c',
          title: 'Commercial Bridge',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_b_1.jpg',
          gridColumn: '4/-1',
          tag: 'tesis',
        },
        {
          uid: 'd6682f37-9640-4998-8a31-98f3a4597607',
          title: 'Cultural Chunk',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_f.png',
          gridColumn: '1/3',
          tag: 'tesis',
        },
        {
          uid: '7a9733a2-be44-4029-b446-be823328b0b2',
          title: 'Academic Chunk',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_e.png',
          gridColumn: '3/5',
          tag: 'tesis',
        },
        {
          uid: '4e24f653-94e0-46e3-aef9-b9af4a459d01',
          title: 'Sports Chunk',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_c.png',
          gridColumn: '5/-1',
          tag: 'tesis',
        },
        {
          uid: '2cb491c3-aa4f-4b1f-91c6-983d50cb3aa5',
          title: 'Academic Bridge',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_e_1.jpg',
          gridColumn: '1/4',
          tag: 'tesis',
        },
        {
          uid: 'c235b985-4f73-4de7-86e7-59b9a0adcbf7',
          title: 'Cultural Bridge',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_f_1.jpg',
          gridColumn: '4/-1',
          tag: 'tesis',
        },
        {
          uid: '77a89161-b909-4f7a-bff7-292f119e458d',
          title: 'Commercial Chunk',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_b.png',
          gridColumn: '1/4',
          tag: 'tesis',
        },
        {
          uid: '4be96864-a4a3-488e-bb42-dd20c0bd3440',
          title: 'Practical chunk',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_a.png',
          gridColumn: '4/-1',
          tag: 'tesis',
        },
        {
          uid: '4ef4eb6b-9908-4473-b5f5-2d2e942ad73d',
          title: 'Practical Bridge',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/tesis/esquema_a_1.jpg',
          gridColumn: '1/-1',
          tag: 'tesis',
        },
      ],
      miscellaneous: [
        {
          uid: 'f90b261c-6515-485e-a2aa-2266a96df9f5',
          title: 'Plan and Eleveation',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/04_sistema_corte.jpg',
          gridColumn: '1/6',
          fitObject: 'fill',
          tag: 'miscellaneous',
        },
        {
          uid: '10bc15ff-adf1-4fda-844f-cccaff4e1e79',
          title: 'Venezuela',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/07_vzla.jpg',
          gridColumn: '6/-1',
          fitObject: 'fill',
          tag: 'miscellaneous',
        },
        {
          uid: '7449046d-ae47-4516-a80d-53b819c02143',
          title: 'Criticism Poster',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/06_urss.jpg',
          gridColumn: '1/6',
          fitObject: 'cover',
          tag: 'miscellaneous',
        },
        {
          uid: '54016361-e14f-4a58-9bf3-c7f8fb19869e',
          title: 'Chicuelo #01',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/05_jharold.jpg',
          gridColumn: '6/-1',
          fitObject: 'cover',
          tag: 'miscellaneous',
        },
        {
          uid: '97008251-cec7-4562-a6d7-7cce29c06c97',
          title: 'Low Poly - Self Portrait',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/02_retrato.png',
          gridColumn: '1/4',
          fitObject: 'cover',
          tag: 'miscellaneous',
        },
        {
          uid: '96311873-0fc7-4550-ac8e-ce16af5a0479',
          title: 'Melodioso',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/03_jordis.jpg',
          gridColumn: '4/8',
          fitObject: 'contain',
          tag: 'miscellaneous',
        },
        {
          uid: '838dd825-8fcf-410f-a49f-104a4f7b2462',
          title: 'Crazy Teacher',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/01_face.png',
          gridColumn: '8/-1',
          fitObject: 'contain',
          tag: 'miscellaneous',
        },
        {
          uid: '466282ca-e1fb-473a-a185-f503e581ee61',
          title: 'La Palomera - Baruta',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/illustration/miscellaneous/08_topografia.jpg',
          gridColumn: '1/-1',
          fitObject: 'fill',
          tag: 'miscellaneous',
        },
      ],
    },
    sketching: {
      hand: [
        {
          uid: '141aa0ec-c09c-4d99-828c-f7193eacebe9',
          tag: 'hand',
          gridColumn: '1/4',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/Diapositiva34.PNG',
        },
        {
          uid: '175edc5f-80ba-4e6a-9998-7347100afb81',
          tag: 'hand',
          gridColumn: '4/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/Diapositiva30.PNG',
        },
        {
          uid: 'bf5e0925-091b-49d8-9a47-a3f1e24f52b6',
          tag: 'hand',
          gridColumn: '1/4',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/Diapositiva27.PNG',
        },
        {
          uid: '005d9493-4e50-4521-92e1-f60e44217908',
          tag: 'hand',
          gridColumn: '4/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/Diapositiva29.PNG',
        },
        {
          uid: '53aa1d0a-17f8-4143-b219-a4dd1e8f312c',
          tag: 'hand',
          gridColumn: '1/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/poster.png',
        },
      ],
      digital: [
        {
          uid: '4f98f97a-c9cd-45ca-9f09-ea2da0ba9880',
          tag: 'digital',
          gridColumn: '1/4',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/14_valentía.jpg',
        },
        {
          uid: '0038f251-5f5d-4a18-b401-4db893e11c9d',
          tag: 'digital',
          gridColumn: '4/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/11_estudiante.jpg',
        },
        {
          uid: 'cf06b7f0-1fad-45d1-8b21-793273bd5b4f',
          tag: 'digital',
          gridColumn: '1/4',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/001_face_copied.jpg',
        },
        {
          uid: 'dfbc9940-7f47-4b47-bcb3-0aaa07c31de7',
          tag: 'digital',
          gridColumn: '4/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/002_dog_illustration.jpg',
        },
        {
          uid: 'a803bcf6-00eb-4b0a-8cc1-cb43ee0164b6',
          tag: 'digital',
          gridColumn: '1/4',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/09_futuro.jpg',
        },
        {
          uid: 'b9876090-d76c-46aa-8a63-a55c4a5d6121',
          tag: 'digital',
          gridColumn: '4/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/07_internet.jpg',
        },
        {
          uid: 'c252ad2b-6980-4d08-9db3-1af447618f20',
          tag: 'digital',
          gridColumn: '1/-1',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/sketching/08_comunidad.jpg',
        },
      ],
    },
    windsurf: {
      basic: [
        {
          uid: '3569cbf0-2a9d-486f-967a-41dba9ebfb0a',
          filename: 1,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/1.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '0a7a4b74-779c-4b1f-9a6f-7bea411c7a8e',
          filename: 2,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/2.JPG',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: '0cee35e2-3c49-4c1d-9cba-41edd2456651',
          filename: 3,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/3.JPG',
          tag: 'basic',
          gridColumn: '1/-1',
        },
        {
          uid: 'dbbfe438-910c-480c-b7d9-945731e4f93e',
          filename: 4,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/4.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '80869608-4442-4bcb-a97d-80e428e8193b',
          filename: 6,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/6.JPG',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: '4a35499d-c5d6-48f6-b274-d81259bd5349',
          filename: 12,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/12.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '422879ea-202d-4e4d-995e-71a70c50341b',
          filename: 10,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/10.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: '17a46e27-8d54-48f1-8e0d-382314f78988',
          filename: 9,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/9.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '3479dabe-3989-408d-8896-0557acff2340',
          filename: 11,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/11.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: '7a9130e4-a6dc-4d72-bef7-9bdd53e58c11',
          filename: 8,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/8.JPG',
          tag: 'basic',
          gridColumn: '1/-1',
        },
        {
          uid: 'e4fc935b-a2c2-40a2-865b-60e6998609d2',
          filename: 13,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/13.jpg',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '25bd377e-da64-4b3b-9fec-d588c4726729',
          filename: 15,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/15.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: 'f2ab6d52-3faa-4b4c-885b-d52af316511d',
          filename: 14,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/14.jpg',
          tag: 'basic',
          gridColumn: '1/-1',
        },
        {
          uid: '5134ea7c-1b4f-4e39-830f-a5fc2937f75e',
          filename: 21,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/21.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '780748c5-1468-4120-831d-a95f187cf09b',
          filename: 20,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/20.JPG',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: 'f350ebe6-ea16-4500-9275-061113a1c4f0',
          filename: 25,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/25.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: 'b0cfea21-a916-45a2-ad58-52e84e4faa6e',
          filename: 26,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/26.JPG',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: 'c2558201-ce7a-46e8-8509-db5355fcdc23',
          filename: 18,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/18.jpg',
          tag: 'basic',
          gridColumn: '1/-1',
        },
        {
          uid: '553b9058-d340-431f-8dfc-7499f61f4780',
          filename: 23,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/23.JPG',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: '0a0cd880-c568-4c7c-9b70-515676a9e683',
          filename: 17,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/17.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },

        {
          uid: '772e1c94-61f5-4757-9744-3ac7e14e6a84',
          filename: 29,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/29.jpg',
          tag: 'basic',
          gridColumn: '1/4',
        },

        {
          uid: 'e5ff18aa-51ca-4870-8847-e5578e0c0a60',
          filename: 16,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/16.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: 'e96cf6cc-6e4d-4258-854b-15f41d33a1e0',
          filename: 30,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/30.jpg',
          tag: 'basic',
          gridColumn: '1/4',
        },
        {
          uid: 'dd28be73-cfbe-44db-948d-0d1949396a17',
          filename: 31,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/31.JPG',
          tag: 'basic',
          gridColumn: '4/-1',
        },
        {
          uid: '4e7ccc52-3936-4993-8731-6e8ef133038d',
          filename: 28,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/28.JPG',
          tag: 'basic',
          gridColumn: '1/-4',
        },
        {
          uid: '0f83b146-5fbc-4de5-bcfa-2628699f34fb',
          filename: 27,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/27.jpg',
          tag: 'basic',
          gridColumn: '4/-1',
        },
      ],
      miscellaneous: [
        {
          uid: '437d7de7-28dc-4585-958e-ec9dd4231e6a',
          filename: 32,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/32.jpg',
          tag: 'wissib',
          gridColumn: '1/4',
        },
        {
          uid: 'cb52cfb1-2c63-41e7-9a34-f7d1a075288c',
          filename: 37,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/37.JPG',
          tag: 'miscellaneous',
          gridColumn: '4/-1',
        },
        {
          uid: '451fa9fe-8b11-4b9e-ab6a-6388a22a7ef1',
          filename: 36,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/36.jpg',
          tag: 'miscellaneous',
          gridColumn: '1/-1',
        },
        {
          uid: 'aeb5ddf9-c288-4993-9a29-f7098750556c',
          filename: 35,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/35.jpg',
          tag: 'miscellaneous',
          gridColumn: '1/4',
        },
        {
          uid: '2a4efccd-ac6f-4561-970c-0d6fbac39d52',
          filename: 33,
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/33.jpg',
          tag: 'miscellaneous',
          gridColumn: '4/-1',
        },
      ],
      flyers: [
        {
          uid: '598ee143-3eec-4ae4-b051-6ac3456509bd',
          filename: '30 Sep - 01 Oct 2017',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/30SEP_01OCT_2017-01.jpg',
          tag: 'flyers',
          gridColumn: '1/3',
        },
        {
          uid: '1eb33713-63b5-462e-9a77-d6e2ce909f28',
          filename: '03 Feb - 04 Oct 2018',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/FEB03_04_2018-01.jpg',
          tag: 'flyers',
          gridColumn: '3/5',
        },
        {
          uid: 'f05e3167-03be-4404-9400-abfab99a4260',
          filename: '17 Sep - 18 Oct 2017',
          filepath:
            'https://storage.googleapis.com/assets-portafolio/wissib/TUCACAS_17_18_SEPTIEMBRE_2017.jpg',
          tag: 'flyers',
          gridColumn: '5/-1',
        },
      ],
    },
  });
};

export default projects;
