<template>
  <div class="  bg-gray-500">
    <!-- Footer section with social media icons and newsletter sign-up -->
    <footer class="  text-center text-white">
      <div class=" pt-6">


        <!-- Copyright information -->
        <div class="mb-6 px-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.
          </p>
        </div>

        <!-- Links section -->
        <div class="grid grid-cols-1 md:grid-cols-3 align-center">

          <div>
            <ul class="text-lg items-center text-center sm:mt-2 ">
              <li class="mt-4 md:mx-3 my-2 sm:mb-2">
                <nuxt-link to="/"
                  class=" text-gray-100 font-bold text-xl mr-4  p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">Home</nuxt-link>
              </li>
              <li class="mt-4 md:mx-3 my-2 sm:mb-2">
                <nuxt-link to="/aboutus"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">About</nuxt-link>
              </li>
              <li class="mt-4 md:mx-3 my-2 sm:mb-2">
                <nuxt-link to="/medicines"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">Medicines</nuxt-link>
              </li>
              <li class="mt-4 md:mx-3 my-2 sm:mb-2">
                <nuxt-link to="/contactus"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">Contact
                  Us</nuxt-link>
              </li>

            </ul>
          </div>

          <!-- Social media icons container -->

          <div class="flex align-center justify-center gap-16 sm:my-8  ">
            <div >
              <a href="#!" >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-8 hover:scale-110  " fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
            </div>
            <div>
              <a href="#!" >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-8 hover:scale-110" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#!" >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-8 hover:scale-110" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
             </a>
            </div>
          </div>



          <div>
            <ul class="text-lg items-center text-center sm:mt-2">
              <li v-for="link in links" :key="link.id" class=" mt-4 md:mx-3 my-2 sm:mb-2">
                <NuxtLink :to="link.link"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">{{
                    link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <!-- Copyright section -->
      <div class="p-4 text-center bg-clr">
        © 2023 Copyright <strong> | </strong>
        <a class="text-white hover:underline" href="/"> Wahab Online Pharmacy</a>
      </div>
    </footer>
  </div>
  <!-- <div>
    <div class=" bg-gray-600">
      <div class="
                            container
                            lg:flex flex-col flex-wrap
                            px-4
                            py-16
                            mx-auto
                            justify-around
                            md:items-center
    
                            md:justify-center
                          md:flex-row md:flex-nowrap
                        ">
        <div class="flex-shrink-0 w-64 mx-auto  md:mx-auto md:items-center lg:justify-start">
          <a href="http://localhost:3000/" class="logo
                              flex
                              items-center
                              justify-center
                              text-4xl
                              font-bold
                              text-blue-700
                              md:justify-start
                            ">
            <img class="logo" src="~/assets/images/logo.png" alt="footer-logo">
          </a>
          <p class="mt-6 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam, laborum praesentium obcaecati, a
            nemo corrupti deserunt numquam, eligendi quibusdam quod eum necessitatibus illo porro. Sit non harum alias
            culpa.
          </p>
        </div>
        <div class=" text-center ">
          <div class="w-full px-4 mt-8 mb-8 ">
            <h2 class="mb-2 font-bold text-2xl text-gray-900 mt-4 ">
              Follow Us
            </h2>
            <ul class="flex text-sm list-none gap-4 justify-center">

              <li class="hover:scale-110">
                <a href="https://www.facebook.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#f1eded" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,8.38077 -6.03282,15.30637 -14,16.7207v-11.7207h3.625c0.504,0 0.93019,-0.37695 0.99219,-0.87695l0.375,-3c0.036,-0.284 -0.05414,-0.56916 -0.24414,-0.78516c-0.189,-0.215 -0.46105,-0.33789 -0.74805,-0.33789h-4v-3.5c0,-1.103 0.897,-2 2,-2h2c0.552,0 1,-0.447 1,-1v-3.375c0,-0.518 -0.39516,-0.95009 -0.91016,-0.99609c-0.059,-0.005 -1.46986,-0.12891 -3.25586,-0.12891c-4.407,0 -6.83398,2.61619 -6.83398,7.36719v3.63281h-4c-0.552,0 -1,0.447 -1,1v3c0,0.553 0.448,1 1,1h4v11.7207c-7.96718,-1.41433 -14,-8.33993 -14,-16.7207c0,-9.40661 7.59339,-17 17,-17z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li class="hover:scale-110">
                <a href="https://www.instagram.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#edecec" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li class="hover:scale-110">
                <a href="https://www.twitter.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#efebeb" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M32,6c-5.43142,0 -9.83936,4.38873 -9.95703,9.79297c-4.80224,-0.57597 -7.92938,-2.37146 -9.84766,-4.14062c-2.12733,-1.96197 -2.80078,-3.70508 -2.80078,-3.70508c-0.20019,-0.50441 -0.65719,-0.86137 -1.19506,-0.93346c-0.53787,-0.07209 -1.07274,0.15192 -1.39869,0.58581c0,0 -1.80078,2.40039 -1.80078,5.90039c0,2.00099 0.6318,3.48155 1.38477,4.73633c-0.02774,-0.01299 -0.21484,-0.07812 -0.21484,-0.07812c-0.48683,-0.24307 -1.06711,-0.20346 -1.51639,0.1035c-0.44929,0.30696 -0.69713,0.83314 -0.64767,1.37502c0,0 0.57734,4.22012 4.54492,7.30469l-0.41406,0.10352c-0.45564,0.11375 -0.83172,0.4343 -1.0162,0.86617c-0.18448,0.43187 -0.15608,0.92521 0.07675,1.33305c0,0 0.67279,1.13808 2.08203,2.33594c0.83555,0.71022 2.06297,1.44309 3.50977,2.12109c-1.77679,0.64927 -4.42624,1.29883 -8.28906,1.29883c-0.58872,-0.00007 -1.12306,0.34423 -1.3663,0.88035c-0.24323,0.53612 -0.15039,1.16496 0.23739,1.60793c0,0 1.14623,1.26272 3.41211,2.36133c2.26588,1.09861 5.75627,2.15039 10.7168,2.15039c8.7197,0 14.98466,-4.18285 18.89453,-9.48437c3.90988,-5.30153 5.60547,-11.65451 5.60547,-16.51562c0,-0.30845 -0.01926,-0.61256 -0.04687,-0.91406c2.11125,-2.03434 2.9035,-3.5637 2.94141,-3.63867c0.19,-0.381 0.11922,-0.83858 -0.17578,-1.14258c-0.294,-0.305 -0.74972,-0.39089 -1.13672,-0.21289l-0.16211,0.07422c-0.139,0.064 -0.27797,0.12841 -0.41797,0.19141c0.407,-0.649 0.72817,-1.34255 0.95117,-2.06055c0.124,-0.396 -0.00989,-0.82994 -0.33789,-1.08594c-0.328,-0.256 -0.77976,-0.28341 -1.13477,-0.06641c-1.22225,0.74283 -2.39382,1.26286 -3.61328,1.61133c-1.79461,-1.70239 -4.21032,-2.75586 -6.86719,-2.75586zM32,9c3.88318,0 7,3.11682 7,7c0,4.13889 -1.55441,10.0359 -5.01953,14.73438c-3.46513,4.69847 -8.70017,8.26563 -16.48047,8.26563c-3.7652,0 -6.26981,-0.68106 -8.14648,-1.41797c1.96583,-0.30528 3.65843,-0.71266 4.875,-1.18359c2.10967,-0.81665 3.24805,-1.75977 3.24805,-1.75977c0.42567,-0.36534 0.61195,-0.93765 0.48287,-1.48355c-0.12908,-0.5459 -0.55194,-0.97418 -1.09615,-1.1102c-2.72273,-0.68068 -4.46895,-1.78161 -5.56445,-2.69922l1.56445,-0.39062c0.63491,-0.15846 1.09386,-0.71018 1.13407,-1.36333c0.04021,-0.65315 -0.3476,-1.257 -0.95828,-1.49214c-3.24512,-1.24812 -4.60783,-3.01324 -5.30469,-4.49219c0.84798,0.17554 1.63752,0.39258 2.76563,0.39258c0.69545,-0.00057 1.29933,-0.47904 1.45891,-1.15594c0.15957,-0.6769 -0.16701,-1.37472 -0.78898,-1.68586c0,0 -3.16992,-1.4582 -3.16992,-5.6582c0,-0.75405 0.20884,-1.23165 0.36133,-1.80273c0.52318,0.70309 0.95435,1.38132 1.79883,2.16016c2.57467,2.37453 6.83021,4.79573 13.25977,5.14063c0.41116,0.02194 0.81326,-0.12608 1.11206,-0.40937c0.2988,-0.28329 0.46803,-0.67693 0.46802,-1.08868v-1.5c0,-3.88318 3.11682,-7 7,-7z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class=" w-full px-4 ">
            <ul class="text-lg items-center text-center font-bold sm:mt-2">
              <li v-for="link in links" :key="link.id" class=" mt-4 md:mx-3 my-2 sm:mb-2">
                <NuxtLink :to="link.link"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">{{
                    link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="flex justify-center mb-2  p-3">
        <p class="text-base text-gray-100 underline">
          All rights reserved | Wahab Online Pharmacy
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },

};
</script>
<style scoped>
.logo {
  width: 10rem;
  height: 2.5rem;
}
.bg-clr{
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
