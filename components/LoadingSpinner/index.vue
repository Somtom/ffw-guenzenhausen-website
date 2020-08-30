<template>
  <div
    class="z-40 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-75"
  >
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"
    ></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
