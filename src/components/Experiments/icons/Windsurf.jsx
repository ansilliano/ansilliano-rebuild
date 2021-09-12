/* eslint-disable max-len */
import React from 'react';

const Windsurf = ({ color = '#343434' }) => (
  <svg width={114} height={113} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M39.212 82.957c-1.985-5.285-4.168-10.893-6.352-16.502-.298.108-.496.216-.794.324 1.29 4.422 2.78 8.736 3.87 13.266.993 4.314 4.269 8.412 1.39 14.667-1.39-2.373-2.382-3.883-3.076-5.5l-14.59-34.62c-.596-1.402-1.39-2.804-2.879-3.883.497 1.726.993 3.56 1.588 5.285 3.573 8.951 7.146 17.795 10.72 26.639.496 1.186 1.19 2.48 1.19 3.775 0 1.294-.595 2.48-.992 3.774-.893-.755-2.183-1.186-2.68-2.264-3.077-7.01-6.054-14.021-9.032-21.031-.397-.863-.893-1.726-1.985-2.265 1.886 5.069 3.673 10.138 5.558 15.207.497 1.294 1.092 2.48 1.29 3.775.2 1.725.1 3.45.2 5.069-1.49-.216-2.88-.432-5.162-.755.695 1.402.993 2.911 1.787 3.882 9.428 10.246 20.445 16.393 34.043 16.393 3.474 0 6.948.648 11.216 1.079-4.566 3.883-16.476 4.206-20.546 1.618-1.786-1.079-3.97-1.295-6.054-1.834-1.191-.323-2.58-.108-3.573-.647-18.262-9.49-29.875-24.698-32.952-46.591-1.886-13.481 2.084-25.56 10.918-35.16C26.905 10.913 44.175.99 65.018.452c35.036-.863 58.856 39.365 43.075 73.338-5.558 11.972-13.597 22.649-25.805 28.257-4.963 2.265-9.628 5.069-14.69 7.765-.496-1.725-.893-3.02-1.29-4.206 5.062-2.804 10.025-5.285 14.789-8.197.992-.539 1.985-2.049 2.084-3.235.496-5.824-4.963-43.032-8.04-49.935v7.765c0 14.02.1 28.041 0 42.17 0 1.51 0 3.128-.496 4.422-.297.755-2.183 1.617-2.481 1.402-2.084-2.05-4.963-4.099-5.757-6.687-3.473-10.785-6.352-21.894-9.925-32.786 1.092 10.353 4.268 20.599.794 31.815-5.36-16.393-10.52-32.031-15.582-47.777-.497.108-1.092.323-1.589.431 2.184 10.246 4.467 20.492 6.452 30.09-2.382 2.805-4.764 5.177-7.345 7.874zM64.224 71.2c.298 0 .496-.108.794-.108 0-1.079.1-2.265-.1-3.343-2.382-16.502-4.863-33.003-7.344-49.504-.199-1.294-.596-2.696-.496-3.99.099-.863.794-2.05 1.39-2.265.595-.108 1.786.647 2.083 1.402.596 1.294.894 2.804 1.191 4.206 2.581 12.08 5.062 24.159 7.544 36.238.198 1.186.595 2.265.992 3.451.695-1.618.695-3.128.695-4.53-.397-9.383-.794-18.766-.993-28.256 0-1.295 1.191-2.697 1.787-3.99.993.97 2.184 1.725 2.978 2.911.694 1.079.992 2.48 1.29 3.775 2.481 11.648 4.863 23.295 7.344 34.943.397 2.05.894 4.206 1.29 6.256.795-1.51.894-3.02.894-4.422 0-12.295 0-24.482.1-36.777 0-2.589-1.291-6.579 2.282-7.01 1.191-.216 3.672 3.667 4.268 6.04 3.077 11.431 5.856 22.971 8.635 34.511.992 4.422 1.687 8.844 2.58 13.482.596-.54.894-.648.993-.863 9.131-22.54 4.268-51.553-20.843-64.063-19.156-9.599-36.723-2.589-53.695 7.98-.794.432-1.49 2.373-1.191 3.344 1.687 5.716 3.672 11.324 5.458 16.932.794-1.294.596-2.372.894-3.235.496-1.726 1.29-3.236 1.886-4.853 1.29 1.078 3.175 1.941 3.87 3.343 1.787 3.667 3.176 7.657 4.665 11.432 1.489 3.775 2.878 7.658 4.268 11.432.496-1.833.298-3.45 0-5.069-1.39-9.706-2.978-19.413-4.268-29.227-.198-1.294.893-2.804 1.29-4.206.993 1.078 2.482 1.941 2.879 3.235 1.985 6.363 3.771 12.727 5.657 19.198 3.176 10.569 6.055 21.138 8.933 31.6zM88.54 93.418c5.756-4.961 11.215-10.246 10.322-17.688-1.588-12.942-4.963-25.668-7.543-38.502-.1-.324-.497-.54-.794-.863-.695 18.874-1.29 37.532-1.985 57.053zm-68.484-68.27c4.665 10.894 9.13 21.247 13.498 31.493l.893-.324c-3.275-11.432-6.55-22.972-10.024-34.943-2.184 1.833-3.673 3.128-4.367 3.775zM7.55 48.229H6.16c-1.786 7.874-.992 15.531 1.29 23.08.398 0 .695 0 1.092-.107-.297-7.658-.694-15.315-.992-22.972zm13.697.324c.297-.108.496-.215.794-.323-1.688-6.471-3.276-12.942-4.963-19.413-.397-.108-.695-.216-1.092-.324-.595 1.941-2.084 4.422-1.489 5.932 1.886 4.853 4.467 9.383 6.75 14.128z'
      fill={color}
    />
  </svg>
);

export default Windsurf;
