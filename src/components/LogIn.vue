<template>
  <div class="mx-lg-3 ms-sm-0">
    <div class="text-white">
      <a
        class="btn text-white border-0"
        data-bs-toggle="modal"
        data-bs-target="#modal1"
        >LOGIN</a
      >
      <div class="modal" id="modal1">
        <div class="modal-dialog" style="margin-top: 7vw">
          <div class="modal-content">
            <div class="modal-body bodyclr1">
              <div class="d-flex justify-content-end">
                <div class="btn btn-close" data-bs-dismiss="modal"></div>
              </div>
              <div class="ms-5 mt-5 mb-5">
                <h5>Login to continue</h5>
              </div>
              <div
                class="ms-5 me-5 mt-4 mx-auto border rounded-2 py-3 border-primary backgroundclr1 mb-2"
              >
                <a
                  class="btn text-center text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal2"
                  >Have a Facebook/Email Account</a
                >
              </div>
              <div class="text-center">or</div>
              <div class="ms-5 me-5 d-flex mt-3" style="margin-bottom: 5vw">
                <label class="mt-1 border-bottom border-primary">+91|</label>
                <input
                  class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary"
                  placeholder="Enter your mobile number"
                  type="text"
                  pattern="[0-9]*"
                  onclick="clickfunction()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="modal2">
        <div class="modal-dialog" style="margin-top: 7vw">
          <div class="modal-content">
            <div class="modal-body bodyclr1">
              <div class="d-flex justify-content-between">
                <div class="ms-3">
                  <a data-bs-toggle="modal" data-bs-target="#modal1"
                    ><i class="fa fa-arrow-left" style="color: #1f80e0"></i
                  ></a>
                </div>
                <div class="btn btn-close" data-bs-dismiss="modal"></div>
              </div>
              <div class="mt-4">
                <h5 class="ms-5">Have an Email or Facebook Account?</h5>
                <div class="ms-5 me-5">
                  <input
                    type="email"
                    class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="ms-5 mt-4 me-4">
                  <button
                    type="submit"
                    class="btn btn-primary text-white"
                    style="width: 27vw; height: 4vw"
                    data-bs-toggle="modal"
                    data-bs-target="#modal3"
                  >
                    CONTINUE <i class="fa fa-angle-right"></i>
                  </button>
                </div>
                <div class="text-center mt-3 me-4">
                  <small class="small">OR</small>
                </div>
                <div class="ms-5 me-4 mt-3 mb-4">
                  <a
                    href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1439455966343706&kid_directed_site=0&app_id=1439455966343706&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D1439455966343706%26cbt%3D1634615994955%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df36b4e60966d364%2526domain%253Dwww.hotstar.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.hotstar.com%25252Ff331e3f0404886%2526relation%253Dopener%26client_id%3D1439455966343706%26display%3Dpopup%26domain%3Dwww.hotstar.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.hotstar.com%252Fin%252Fsubscribe%252Fget-started%26locale%3Den_US%26logger_id%3Df3b954a9c8b919c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df809da249916f%2526domain%253Dwww.hotstar.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.hotstar.com%25252Ff331e3f0404886%2526relation%253Dopener%2526frame%253Df14008e5e11c69c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df809da249916f%26domain%3Dwww.hotstar.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.hotstar.com%252Ff331e3f0404886%26relation%3Dopener%26frame%3Df14008e5e11c69c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
                    ><button
                      type="submit"
                      class="btn text-white"
                      style="
                        width: 27vw;
                        height: 4vw;
                        background-color: #3f51b5;
                      "
                    >
                      <i class="mx-1"
                        ><img
                          src="../assets/facebook.svg"
                          width="24px"
                          height="24px" /></i
                      >LOGIN WITH FACEBOOK
                    </button></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="modal3">
        <div class="modal-dialog" style="margin-top: 7vw">
          <div class="modal-content">
            <div class="modal-body bodyclr1">
              <div class="d-flex justify-content-between">
                <div class="ms-3">
                  <a data-bs-toggle="modal" data-bs-target="#modal2"
                    ><i class="fa fa-arrow-left" style="color: #1f80e0"></i
                  ></a>
                </div>
                <div class="btn btn-close" data-bs-dismiss="modal"></div>
              </div>
              <div class="mt-4">
                <h5 class="ms-5">Log In!</h5>
                <div class="ms-5 me-5 mb-4">
                  <input
                    type="email"
                    class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="ms-5 me-5 mb-3">
                  <input
                    type="password"
                    class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="ms-5 mb-5">
                  <a href="#" class="link-primary text-decoration-none"
                    >Forgot?</a
                  >
                </div>
                <div class="ms-5 mt-4 me-4 mb-5">
                  <button
                    type="submit"
                    class="btn btn-primary text-white"
                    style="width: 27vw; height: 4vw"
                  >
                    CONTINUE <i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
