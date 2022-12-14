import * as React from "react";

const SvgShipping = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      d="M12.947 24.985c1.912-.271 3.587-2.267 4.642-5.213a22.693 22.693 0 0 0-4.642-.547v5.76zm3.054-.468a7.664 7.664 0 0 0 .617-.198c.11-.038.22-.077.33-.118l.276-.11.318-.135a13.226 13.226 0 0 0 1.149-.58 11.16 11.16 0 0 0 .552-.332 10.468 10.468 0 0 0 .535-.362l.247-.179c.09-.069.181-.14.27-.212.08-.063.16-.126.238-.192.09-.074.175-.15.261-.227.076-.068.153-.135.227-.204.085-.08.168-.162.252-.244.072-.07.144-.14.215-.214l.039-.042a15.02 15.02 0 0 0-3.062-1.178 11.087 11.087 0 0 1-2.855 4.637c.036-.01.072-.017.109-.026.095-.027.189-.057.282-.084zM25 12.957h-5.357a23.17 23.17 0 0 1-.902 6.181c1.18.315 2.317.768 3.39 1.35A12.483 12.483 0 0 0 25 12.958zm-12.053-.894h5.802a22.352 22.352 0 0 0-.88-5.961 23.533 23.533 0 0 1-4.922.587v5.374zm0-12.028v5.76a22.707 22.707 0 0 0 4.642-.546C16.534 2.302 14.859.307 12.947.035zm0 18.296a23.65 23.65 0 0 1 4.923.588c.56-1.939.857-3.944.88-5.962h-5.803v5.374zm9.185-13.798a15.538 15.538 0 0 1-3.391 1.35c.578 2.01.881 4.089.902 6.18H25a12.486 12.486 0 0 0-2.868-7.53zm-.604-.678-.038-.042c-.071-.072-.144-.143-.216-.214-.083-.081-.166-.164-.252-.243-.073-.07-.15-.135-.226-.203-.087-.077-.173-.155-.262-.229-.078-.065-.157-.127-.235-.19a9.596 9.596 0 0 0-.518-.392 10.877 10.877 0 0 0-1.088-.698c-.1-.057-.2-.112-.3-.166-.09-.045-.18-.094-.269-.138a9.765 9.765 0 0 0-.313-.151 9.622 9.622 0 0 0-.272-.125c-.106-.047-.213-.089-.32-.134a12.526 12.526 0 0 0-.884-.324 12.044 12.044 0 0 0-.338-.102c-.093-.027-.187-.055-.28-.08l-.11-.027a11.088 11.088 0 0 1 2.856 4.637c1.061-.28 2.09-.675 3.065-1.18zM0 12.063h5.357a23.18 23.18 0 0 1 .902-6.18 15.52 15.52 0 0 1-3.39-1.35A12.483 12.483 0 0 0 0 12.063zm12.053 12.922v-5.76a22.707 22.707 0 0 0-4.642.547c1.055 2.946 2.73 4.942 4.642 5.213zm0-12.028H6.251c.023 2.018.318 4.023.88 5.962a23.517 23.517 0 0 1 4.922-.588v-5.374zm0-12.922C10.142.307 8.466 2.302 7.411 5.25c1.525.342 3.08.525 4.642.546V.035zm0 6.655a23.533 23.533 0 0 1-4.922-.588 22.342 22.342 0 0 0-.88 5.961h5.802V6.69zM9.389.397c-.036.01-.073.017-.109.026-.095.026-.188.054-.282.081-.112.033-.224.066-.336.101-.095.031-.188.064-.282.096-.109.039-.219.077-.327.118a12.69 12.69 0 0 0-.278.111l-.317.134a12.945 12.945 0 0 0-1.412.733c-.097.059-.193.12-.289.18a11.702 11.702 0 0 0-.782.541c-.092.069-.179.14-.271.212-.08.063-.16.126-.237.192-.09.074-.174.15-.26.227-.077.068-.154.134-.229.204-.084.08-.167.162-.25.243-.072.071-.145.142-.216.215l-.039.042A15 15 0 0 0 6.535 5.03 11.083 11.083 0 0 1 9.389.397zM3.726 21.421c.083.082.166.165.251.244.075.069.15.134.227.203.087.077.173.154.262.228.077.065.156.128.235.19.09.073.179.145.274.214.08.061.162.12.244.18a12.365 12.365 0 0 0 .536.363 11.074 11.074 0 0 0 .853.5c.089.046.178.094.268.139a10.414 10.414 0 0 0 .585.275c.106.047.212.09.32.134a11.997 11.997 0 0 0 .604.229c.093.032.186.065.28.095.112.036.224.07.338.102a9.8 9.8 0 0 0 .28.08l.11.027a11.09 11.09 0 0 1-2.856-4.637c-1.06.28-2.087.675-3.061 1.179l.038.041c.067.073.14.143.212.214zm-.858-.933a15.54 15.54 0 0 1 3.391-1.35 23.18 23.18 0 0 1-.902-6.18H0a12.485 12.485 0 0 0 2.868 7.53z"
      fill={props.fill ? props.fill : "#000"}
    />
  </svg>
);

export default SvgShipping;
