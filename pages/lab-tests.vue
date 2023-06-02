<template>
  <div>

    <div class="res">
      <div class="res-content">


        <div class="res-icons">

          <div class="res-iconItem">

            <img src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/trustlab_icon_1.png?v=1652272545" alt="">


            <p class="res-iconItem-heading">Trusted Labs </p>


            <p class="res-iconItem-desc">Every test booked via Wahab Pharmacy is conducted by <a
                href="https://www.hashmanis.com.pk/"
                style="text-decoration:none;color:#8897a2;font-weight:400"><u>Hashmanis</u> </a>Labs that are 100%
              verified and trustworthy.</p>

          </div>

          <div class="res-iconItem">

            <img src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/home_icon_2.png?v=1652272572" alt="">


            <p class="res-iconItem-heading">Home Visit </p>


            <p class="res-iconItem-desc">With Wahab Pharmacy, you get professional phlebotomists to pick-up the sample from
              your home or preferred location.</p>

          </div>

          <div class="res-iconItem">

            <img src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/time_icon_1.png?v=1652272590" alt="">


            <p class="res-iconItem-heading">Timely and Accurate Reports </p>


            <p class="res-iconItem-desc">Once collected, samples are sent to labs for processing. Detailed reports are
              shared within a stipulated timeline.</p>

          </div>

          <div class="res-iconItem">

            <img src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/upto30_icon_1.png?v=1652272606" alt="">


            <p class="res-iconItem-heading">Up to 30% OFF </p>


            <p class="res-iconItem-desc">At Wahab Pharmacy, you save at every step! On diagnostic tests, get up to 30% off!
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.res {
  margin: 2rem 0rem;
}

.res-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.res-iconItem {
  width: calc(98%/4);
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
}

.res-iconItem img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.res-iconItem-heading {
  /*   	margin-top:0.25rem; */
  font-weight: normal;
  font-weight: 16px;
  color: #4f585e;
}

.res-iconItem-desc {
  color: #8897a2;
  font-size: 16px;
  font-weight: 300;
}

.res-content {
  max-width: 1024px;
  margin: auto;
}

@media screen and (max-width:1023px) {
  .res-iconItem {
    width: calc(98%/2);
  }

  .res-icons {
    flex-wrap: wrap;
  }
}
</style>

