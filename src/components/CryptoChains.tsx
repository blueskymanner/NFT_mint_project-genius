const cryptoChains = {
  1: {
    name: "Ethereum",
    symbol: "ETH",
    explorerBaseURL: "https://etherscan.io",
    colorIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9919 0L31.5625 1.45847V43.7763L31.9919 44.2046L51.6349 32.5935L31.9919 0Z"
              fill="#343434"
            />
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 44.2046V23.6647V0Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.992 47.9177L31.75 48.2128V63.287L31.992 63.9934L51.6471 36.3125L31.992 47.9177Z"
              fill="#3C3C3B"
            />
            <path
              d="M31.9951 63.9934V47.9177L12.3516 36.3125L31.9951 63.9934Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="#141414"
            />
            <path
              d="M12.3516 32.6162L31.9951 44.2274V23.6875L12.3516 32.6162Z"
              fill="#393939"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    monoIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 23.6898V0Z"
              fill="white"
            />
            <path
              d="M31.9951 63.9935V47.9178L12.3516 36.3126L31.9951 63.9935Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="white"
            />
            <g opacity="0.7">
              <path
                d="M31.9918 0L32 1.36898L32 23.6912L51.6349 32.5935L31.9918 0Z"
                fill="white"
              />
              <path
                d="M31.992 47.9178L31.75 48.2129V63.2871L31.992 63.9935L51.647 36.3126L31.992 47.9178Z"
                fill="white"
              />
              <path
                d="M12.3516 32.6158L31.9951 44.227V23.6871L12.3516 32.6158Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  4: {
    name: "Rinkeby",
    symbol: "ETH",
    explorerBaseURL: "https://rinkeby.etherscan.io",
    colorIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9919 0L31.5625 1.45847V43.7763L31.9919 44.2046L51.6349 32.5935L31.9919 0Z"
              fill="#343434"
            />
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 44.2046V23.6647V0Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.992 47.9177L31.75 48.2128V63.287L31.992 63.9934L51.6471 36.3125L31.992 47.9177Z"
              fill="#3C3C3B"
            />
            <path
              d="M31.9951 63.9934V47.9177L12.3516 36.3125L31.9951 63.9934Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="#141414"
            />
            <path
              d="M12.3516 32.6162L31.9951 44.2274V23.6875L12.3516 32.6162Z"
              fill="#393939"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    monoIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 23.6898V0Z"
              fill="white"
            />
            <path
              d="M31.9951 63.9935V47.9178L12.3516 36.3126L31.9951 63.9935Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="white"
            />
            <g opacity="0.7">
              <path
                d="M31.9918 0L32 1.36898L32 23.6912L51.6349 32.5935L31.9918 0Z"
                fill="white"
              />
              <path
                d="M31.992 47.9178L31.75 48.2129V63.2871L31.992 63.9935L51.647 36.3126L31.992 47.9178Z"
                fill="white"
              />
              <path
                d="M12.3516 32.6158L31.9951 44.227V23.6871L12.3516 32.6158Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  56: {
    name: "Binance Smart Chain",
    symbol: "BSC",
    explorerBaseURL: "https://bscscan.com",
    colorIcon: function BinanceSmartChain(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M19.5706 26.8933L31.9999 14.464L44.435 26.8987L51.667 19.6667L31.9999 0L12.3392 19.6608L19.5706 26.8933ZM0 32L7.23223 24.7667L14.4639 31.9985L7.23171 39.2307L0 32ZM19.5706 37.1075L31.9999 49.536L44.4348 37.1016L51.6706 44.3297L51.667 44.3336L31.9999 64L12.3289 44.329L19.5714 37.1067L19.5706 37.1075ZM49.5358 32.0031L56.768 24.7708L63.9997 32.0026L56.7678 39.2348L49.5358 32.0031Z"
            fill="#F3BA2F"
          />
          <path
            d="M39.3348 31.9959H39.3378L31.9999 24.6574L24.6678 31.9884L24.6576 31.9984L24.6678 32.0089L31.9999 39.342L39.3383 32.0035L39.3419 31.9994L39.3348 31.9959Z"
            fill="#F3BA2F"
          />
        </svg>
      );
    },
    monoIcon: function BinanceSmartChain(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M19.5706 26.8933L31.9999 14.464L44.435 26.8987L51.667 19.6667L31.9999 0L12.3392 19.6608L19.5706 26.8933ZM0 32L7.23223 24.7667L14.4639 31.9985L7.23171 39.2307L0 32ZM19.5706 37.1075L31.9999 49.536L44.4348 37.1016L51.6706 44.3297L51.667 44.3336L31.9999 64L12.3289 44.329L19.5714 37.1067L19.5706 37.1075ZM49.5358 32.0031L56.768 24.7708L63.9997 32.0026L56.7678 39.2348L49.5358 32.0031Z"
            fill="white"
          />
          <path
            d="M39.3348 31.9959H39.3379L31.9999 24.6574L24.6679 31.9884L24.6576 31.9984L24.6679 32.0089L31.9999 39.342L39.3384 32.0035L39.342 31.9994L39.3348 31.9959Z"
            fill="white"
          />
        </svg>
      );
    },
  },
  137: {
    name: "Polygon",
    symbol: "MATIC",
    explorerBaseURL: "https://polygonscan.com",
    colorIcon: function Polygon(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M48.3333 19.8327C47.1667 19.166 45.6667 19.166 44.3333 19.8327L35 25.3327L28.6667 28.8327L19.5 34.3327C18.3333 34.9994 16.8333 34.9994 15.5 34.3327L8.33333 29.9993C7.16667 29.3327 6.33333 27.9993 6.33333 26.4993V18.166C6.33333 16.8327 7 15.4993 8.33333 14.666L15.5 10.4993C16.6667 9.83268 18.1667 9.83268 19.5 10.4993L26.6667 14.8327C27.8333 15.4993 28.6667 16.8327 28.6667 18.3327V23.8327L35 20.166V14.4993C35 13.166 34.3333 11.8327 33 10.9993L19.6667 3.16602C18.5 2.49935 17 2.49935 15.6667 3.16602L2 11.166C0.666667 11.8327 0 13.166 0 14.4993V30.166C0 31.4993 0.666667 32.8327 2 33.666L15.5 41.4994C16.6667 42.166 18.1667 42.166 19.5 41.4994L28.6667 36.166L35 32.4993L44.1667 27.166C45.3333 26.4994 46.8333 26.4994 48.1667 27.166L55.3333 31.3327C56.5 31.9994 57.3333 33.3327 57.3333 34.8327V43.166C57.3333 44.4994 56.6667 45.8327 55.3333 46.666L48.3333 50.8327C47.1667 51.4994 45.6667 51.4994 44.3333 50.8327L37.1667 46.666C36 45.9994 35.1667 44.666 35.1667 43.166V37.8327L28.8333 41.4994V46.9994C28.8333 48.3327 29.5 49.666 30.8333 50.4994L44.3333 58.3327C45.5 58.9993 47 58.9993 48.3333 58.3327L61.8333 50.4994C63 49.8327 63.8333 48.4994 63.8333 46.9994V31.166C63.8333 29.8327 63.1667 28.4993 61.8333 27.666L48.3333 19.8327Z"
            fill="#8247E5"
          />
        </svg>
      );
    },
    monoIcon: function Polygon(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M48.3333 19.8327C47.1667 19.166 45.6667 19.166 44.3333 19.8327L35 25.3327L28.6667 28.8327L19.5 34.3327C18.3333 34.9994 16.8333 34.9994 15.5 34.3327L8.33333 29.9993C7.16667 29.3327 6.33333 27.9993 6.33333 26.4993V18.166C6.33333 16.8327 7 15.4993 8.33333 14.666L15.5 10.4993C16.6667 9.83268 18.1667 9.83268 19.5 10.4993L26.6667 14.8327C27.8333 15.4993 28.6667 16.8327 28.6667 18.3327V23.8327L35 20.166V14.4993C35 13.166 34.3333 11.8327 33 10.9993L19.6667 3.16602C18.5 2.49935 17 2.49935 15.6667 3.16602L2 11.166C0.666667 11.8327 0 13.166 0 14.4993V30.166C0 31.4993 0.666667 32.8327 2 33.666L15.5 41.4994C16.6667 42.166 18.1667 42.166 19.5 41.4994L28.6667 36.166L35 32.4993L44.1667 27.166C45.3333 26.4994 46.8333 26.4994 48.1667 27.166L55.3333 31.3327C56.5 31.9994 57.3333 33.3327 57.3333 34.8327V43.166C57.3333 44.4994 56.6667 45.8327 55.3333 46.666L48.3333 50.8327C47.1667 51.4994 45.6667 51.4994 44.3333 50.8327L37.1667 46.666C36 45.9994 35.1667 44.666 35.1667 43.166V37.8327L28.8333 41.4994V46.9994C28.8333 48.3327 29.5 49.666 30.8333 50.4994L44.3333 58.3327C45.5 58.9993 47 58.9993 48.3333 58.3327L61.8333 50.4994C63 49.8327 63.8333 48.4994 63.8333 46.9994V31.166C63.8333 29.8327 63.1667 28.4993 61.8333 27.666L48.3333 19.8327Z"
            fill="white"
          />
        </svg>
      );
    },
  },
  250: {
    name: "Fantom Opera",
    symbol: "FTM",
    explorerBaseURL: "https://ftmscan.com",
    colorIcon: function Fantom(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M29.4656 0.613047C30.3218 0.209348 31.2567 0 32.2033 0C33.1499 0 34.0848 0.209348 34.941 0.613047V0.613047L50.8104 8.95401C51.2103 9.13284 51.5602 9.40719 51.8293 9.75294C52.0984 10.0987 52.2784 10.5053 52.3535 10.9369H52.3686V52.864C52.3313 53.3351 52.1665 53.7872 51.8921 54.172C51.6176 54.5568 51.2437 54.8597 50.8104 55.0484V55.0484L34.9442 63.387C34.088 63.7907 33.1531 64 32.2065 64C31.2599 64 30.325 63.7907 29.4688 63.387V63.387L13.6027 55.0484C13.1743 54.8574 12.806 54.5534 12.5374 54.169C12.2687 53.7846 12.1099 53.3342 12.0779 52.8663C12.0779 52.7946 12.0779 52.7341 12.0779 52.6815V10.9369C12.1426 10.504 12.3165 10.0948 12.5833 9.74784C12.8501 9.4009 13.2009 9.12768 13.6027 8.95401L29.4656 0.613047ZM49.8703 34.3282L34.9442 42.1753C34.088 42.579 33.1531 42.7883 32.2065 42.7883C31.2599 42.7883 30.325 42.579 29.4688 42.1753L14.5714 34.3457V52.7811L29.4688 60.57C30.2067 61.0168 31.0181 61.3292 31.8652 61.4925L32.2069 61.514C33.1371 61.4221 34.0352 61.1241 34.8359 60.6417V60.6417L49.8711 52.7118L49.8703 34.3282ZM9.49751 51.9526C9.4232 53.1154 9.61388 54.2799 10.0552 55.3583C10.4339 56.0482 10.9928 56.6223 11.6724 57.0193L11.721 57.052C11.9066 57.1762 12.1113 57.3069 12.3583 57.4606L12.6515 57.6399L13.5525 58.1808L12.2643 60.3063L11.2557 59.7008L11.086 59.5973C10.7945 59.418 10.5523 59.2643 10.3268 59.1129C7.91695 57.4957 7.01832 55.7319 7 52.0641V51.9526H9.49751ZM30.9546 23.0914C30.845 23.1287 30.7385 23.1742 30.6359 23.2276L14.769 31.5686L14.7212 31.5949L14.7076 31.6029L14.7323 31.6172L14.7682 31.6371L30.6343 39.9781C30.7369 40.0315 30.8434 40.0771 30.953 40.1143L30.9546 23.0914ZM33.4585 23.0914V40.1127C33.568 40.0755 33.6745 40.0299 33.7771 39.9765V39.9765L49.6433 31.6355L49.6911 31.6092L49.7046 31.6013L49.6799 31.5869L49.6441 31.567L33.7779 23.2269C33.675 23.1736 33.5682 23.1284 33.4585 23.0914V23.0914ZM49.8695 13.9124L35.6389 21.3938L49.8711 28.8751L49.8695 13.9124ZM14.573 13.9299V28.8576L28.7717 21.3938L14.573 13.9299ZM33.7779 2.81101C33.2818 2.59645 32.747 2.48576 32.2065 2.48576C31.666 2.48576 31.1312 2.59645 30.6351 2.81101V2.81101L14.769 11.1528L14.7212 11.1791L14.7076 11.187L14.7323 11.2014L14.7682 11.2213L30.6343 19.5622C31.1304 19.7768 31.6652 19.8875 32.2057 19.8875C32.7462 19.8875 33.281 19.7768 33.7771 19.5622L49.6433 11.2213L49.6911 11.195L49.7046 11.187L49.6799 11.1727L49.6441 11.1528L33.7779 2.81101ZM52.2157 3.72557L53.2242 4.33183L53.3939 4.43539C53.6855 4.61464 53.9277 4.76839 54.1531 4.91976C56.563 6.53696 57.4624 8.30075 57.48 11.9685V12.0801H54.9824C55.0568 10.9173 54.8661 9.75277 54.4248 8.67438C54.0466 7.98329 53.4876 7.40804 52.8076 7.01017L52.759 6.97751C52.5734 6.85323 52.3686 6.72258 52.1217 6.56883L51.8285 6.38958L50.9275 5.84865L52.2157 3.72557Z"
            fill="#1969FF"
          />
        </svg>
      );
    },
    monoIcon: function Fantom(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <path
            d="M29.4656 0.613047C30.3218 0.209348 31.2567 0 32.2033 0C33.1499 0 34.0848 0.209348 34.941 0.613047V0.613047L50.8104 8.95401C51.2103 9.13284 51.5602 9.40719 51.8293 9.75294C52.0984 10.0987 52.2784 10.5053 52.3535 10.9369H52.3686V52.864C52.3313 53.3351 52.1665 53.7872 51.8921 54.172C51.6176 54.5568 51.2437 54.8597 50.8104 55.0484V55.0484L34.9442 63.387C34.088 63.7907 33.1531 64 32.2065 64C31.2599 64 30.325 63.7907 29.4688 63.387V63.387L13.6027 55.0484C13.1743 54.8574 12.806 54.5534 12.5374 54.169C12.2687 53.7846 12.1099 53.3342 12.0779 52.8663C12.0779 52.7946 12.0779 52.7341 12.0779 52.6815V10.9369C12.1426 10.504 12.3165 10.0948 12.5833 9.74784C12.8501 9.4009 13.2009 9.12768 13.6027 8.95401L29.4656 0.613047ZM49.8703 34.3282L34.9442 42.1753C34.088 42.579 33.1531 42.7883 32.2065 42.7883C31.2599 42.7883 30.325 42.579 29.4688 42.1753L14.5714 34.3457V52.7811L29.4688 60.57C30.2067 61.0168 31.0181 61.3292 31.8652 61.4925L32.2069 61.514C33.1371 61.4221 34.0352 61.1241 34.8359 60.6417V60.6417L49.8711 52.7118L49.8703 34.3282ZM9.49751 51.9526C9.4232 53.1154 9.61388 54.2799 10.0552 55.3583C10.4339 56.0482 10.9928 56.6223 11.6724 57.0193L11.721 57.052C11.9066 57.1762 12.1113 57.3069 12.3583 57.4606L12.6515 57.6399L13.5525 58.1808L12.2643 60.3063L11.2557 59.7008L11.086 59.5973C10.7945 59.418 10.5523 59.2643 10.3268 59.1129C7.91695 57.4957 7.01832 55.7319 7 52.0641V51.9526H9.49751ZM30.9546 23.0914C30.845 23.1287 30.7385 23.1742 30.6359 23.2276L14.769 31.5686L14.7212 31.5949L14.7076 31.6029L14.7323 31.6172L14.7682 31.6371L30.6343 39.9781C30.7369 40.0315 30.8434 40.0771 30.953 40.1143L30.9546 23.0914ZM33.4585 23.0914V40.1127C33.568 40.0755 33.6745 40.0299 33.7771 39.9765V39.9765L49.6433 31.6355L49.6911 31.6092L49.7046 31.6013L49.6799 31.5869L49.6441 31.567L33.7779 23.2269C33.675 23.1736 33.5682 23.1284 33.4585 23.0914V23.0914ZM49.8695 13.9124L35.6389 21.3938L49.8711 28.8751L49.8695 13.9124ZM14.573 13.9299V28.8576L28.7717 21.3938L14.573 13.9299ZM33.7779 2.81101C33.2818 2.59645 32.747 2.48576 32.2065 2.48576C31.666 2.48576 31.1312 2.59645 30.6351 2.81101V2.81101L14.769 11.1528L14.7212 11.1791L14.7076 11.187L14.7323 11.2014L14.7682 11.2213L30.6343 19.5622C31.1304 19.7768 31.6652 19.8875 32.2057 19.8875C32.7462 19.8875 33.281 19.7768 33.7771 19.5622L49.6433 11.2213L49.6911 11.195L49.7046 11.187L49.6799 11.1727L49.6441 11.1528L33.7779 2.81101ZM52.2157 3.72557L53.2242 4.33183L53.3939 4.43539C53.6855 4.61464 53.9277 4.76839 54.1531 4.91976C56.563 6.53696 57.4624 8.30075 57.48 11.9685V12.0801H54.9824C55.0568 10.9173 54.8661 9.75277 54.4248 8.67438C54.0466 7.98329 53.4876 7.40804 52.8076 7.01017L52.759 6.97751C52.5734 6.85323 52.3686 6.72258 52.1217 6.56883L51.8285 6.38958L50.9275 5.84865L52.2157 3.72557Z"
            fill="white"
          />
        </svg>
      );
    },
  },
  1337: {
    name: "Test Ethereum",
    symbol: "ETH",
    explorerBaseURL: "https://etherscan.io",
    colorIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9919 0L31.5625 1.45847V43.7763L31.9919 44.2046L51.6349 32.5935L31.9919 0Z"
              fill="#343434"
            />
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 44.2046V23.6647V0Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.992 47.9177L31.75 48.2128V63.287L31.992 63.9934L51.6471 36.3125L31.992 47.9177Z"
              fill="#3C3C3B"
            />
            <path
              d="M31.9951 63.9934V47.9177L12.3516 36.3125L31.9951 63.9934Z"
              fill="#8C8C8C"
            />
            <path
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="#141414"
            />
            <path
              d="M12.3516 32.6162L31.9951 44.2274V23.6875L12.3516 32.6162Z"
              fill="#393939"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    monoIcon: function Ethereum(props: any) {
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
          <g clipPath="url(#clip0)">
            <path
              d="M31.9951 0L12.3516 32.5935L31.9951 23.6898V0Z"
              fill="white"
            />
            <path
              d="M31.9951 63.9935V47.9178L12.3516 36.3126L31.9951 63.9935Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M31.9922 44.2274L51.6352 32.6162L31.9922 23.6875V44.2274Z"
              fill="white"
            />
            <g opacity="0.7">
              <path
                d="M31.9918 0L32 1.36898L32 23.6912L51.6349 32.5935L31.9918 0Z"
                fill="white"
              />
              <path
                d="M31.992 47.9178L31.75 48.2129V63.2871L31.992 63.9935L51.647 36.3126L31.992 47.9178Z"
                fill="white"
              />
              <path
                d="M12.3516 32.6158L31.9951 44.227V23.6871L12.3516 32.6158Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
};

export default cryptoChains;