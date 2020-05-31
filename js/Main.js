let app;

function DefaultInit(vueModel) {
  let mvLoading = new LoadingComponent(vueModel);

  let responsiveTable = new ResponsiveTable();

  mvLoading.CallBack = () => {
    responsiveTable.Update();
  }

  responsiveTable.CallBack = (height) => {
    jQuery('#map-container').height(height);
  };

  return {
    mvLoading : mvLoading
  }
}

if(document.getElementById('station-rating-page')!=null) {

  let vueModel = {
    el: ".vue",
    computed: {},
    data: {},
    methods: {},
    created() {
      initObj.mvLoading.Hide();
    }
  };

  let initObj = DefaultInit(vueModel);

  window.onload = function () {
    let stationRatingComponent = new StationRatingComponent(vueModel);

    app = new Vue(vueModel);

    vueModel.el = ".vue2";
    let app2 = new Vue(vueModel);
  }
}
else {

  let vueModel = {
    el: "#app",
    computed: {},
    data: {},
    methods: {},
    created() {
      initObj.mvLoading.Hide();
    }
  };

  let initObj = DefaultInit(vueModel);

// Core //
  window.onload = function () {

    if (document.getElementById('stations-page') != null) {
      let stationsComponent = new StationsComponent(vueModel);
    }

    if (document.getElementById('scooters-page') != null) {
      let scootersComponent = new ScootersComponent(vueModel);
    }

    if (document.getElementById('billing-page') != null) {
      let billingComponent = new BillingComponent(vueModel);
    }

    if (document.getElementById('users-page') != null) {
      let usersComponent = new UsersComponent(vueModel);
    }

    if (document.getElementById('power-cost-page') != null) {
      let powerCostComponent = new PowerCostComponent(vueModel);
    }

    if (document.getElementById('messages-page') != null) {
      let responsiveMessages = new ResponsiveMessages();
    }


    app = new Vue(vueModel);

  };
}


