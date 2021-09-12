const projects = (req, resp) => {
  resp.status(200).json({
    mobile: [
      {
        uid: 'bb3cc9b2-db96-4dd1-b35d-119213acb9ff',
        filename: '001',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/001',
        title: 'Sign Up',
        tag: 'mobile',
      },
      {
        uid: '57c58cc1-6402-462d-ae2a-769e346e7e91',
        filename: '004',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/004',
        title: 'Calculator',
        tag: 'mobile',
      },
      {
        uid: 'f9417415-737f-4ab4-b40d-e014b9b357a6',
        filename: '020',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/020',
        title: 'Location Tracker',
        tag: 'mobile',
      },
      {
        uid: '85a3d6f1-bd59-45ee-b2ac-d509233a6fcc',
        filename: '033',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/033',
        title: 'Customize Product',
        tag: 'mobile',
      },
      {
        uid: 'c593fdf6-2172-437a-a3ab-d7a302effdc1',
        filename: '040',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/040',
        title: 'Recipe',
        tag: 'mobile',
      },
      {
        uid: '8f026aec-11b3-4e1d-9431-619d80295523',
        filename: '054',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/054',
        title: 'Confirm Reservation',
        tag: 'mobile',
      },
      {
        uid: 'f453d0dc-0cdb-4aa9-981c-157d6ad38845',
        filename: '070',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/070',
        title: 'Event Listing',
        tag: 'mobile',
      },
      {
        uid: '8b3bba87-1926-4795-926c-5bee58d9f465',
        filename: '079',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/079',
        title: 'Itinerary',
        tag: 'mobile',
      },
      {
        uid: 'cf164b33-8a85-40dc-80ca-4fd99b325ed3',
        filename: '096',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/096',
        title: 'In Stock',
        tag: 'mobile',
      },
      {
        uid: '89b9e27e-e8da-4021-97bb-90248ea379d1',
        filename: '099',
        filepath: 'https://storage.googleapis.com/assets-portafolio/mobile/099',
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
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/005',
        title: 'App Icon',
        tag: 'others',
      },
      {
        uid: '2ed97e10-6942-4071-b257-e39c39b66d0c',
        filename: '024',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/024',
        title: 'Boarding Pass',
        tag: 'others',
      },
      {
        uid: '667e8092-4869-4fb0-ab0d-0cdfe23abcac',
        filename: '032',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/032',
        title: 'Crowdfunding Campaign',
        tag: 'others',
      },
      {
        uid: '4431b923-3cc4-40f3-80ca-01cfb451e3de',
        filename: '036',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/036',
        title: 'Special Offer',
        tag: 'others',
      },
      {
        uid: 'e3b36615-8749-4ada-9fee-40d6715b8a60',
        filename: '037',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/037',
        title: 'Weather',
        tag: 'others',
      },
      {
        uid: '35edd78b-0383-4ed6-b2e2-22db7f19f54f',
        filename: '039',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/039',
        title: 'Testimonials',
        tag: 'others',
      },
      {
        uid: '9bbc2d4a-3d62-4624-9e55-dcaa0825731b',
        filename: '046',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/046',
        title: 'Invoice',
        tag: 'others',
      },
      {
        uid: 'aff0c0d8-1a7f-4c09-ba29-0a5825168207',
        filename: '055',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/055',
        title: 'Icon Set',
        tag: 'others',
      },
      {
        uid: 'ddf50780-30f2-489b-88e7-1a253eb86e5f',
        filename: '061',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/061',
        title: 'Redeem Coupon',
        tag: 'others',
      },
      {
        uid: '5c1b4231-19b8-4d3c-955c-1d3fcf529c6d',
        filename: '073',
        filepath: 'https://storage.googleapis.com/assets-portafolio/others/073',
        title: 'Virtual Reality',
        tag: 'others',
      },
    ],
  });
};

export default projects;
