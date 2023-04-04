import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonLoginPageGreenregbtnContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <div className={styles.sectionloginpageLoginBackgr}>
        <div className={styles.divrow}>
          <div className={styles.divh2d7a4e75b}>
            <img
              className={styles.palisadoesLogofb9446908771c9Icon}
              alt=""
              src="/palisadoes-logofb9446908771c996e6b6png@2x.png"
            />
            <div className={styles.anOpenSource}>
              An open source application by Palisadoes Foundation volunteers
            </div>
          </div>
          <div className={styles.divloginpageRightmainbgCi}>
            <div className={styles.divloginpageHomerightFx3gz}>
              <div className={styles.h1h2d74f1c206} />
              <div className={styles.formh2d3e36b038}>
                <div className={styles.divh2dCb5d9f80}>
                  <div className={styles.divh2d337cecd0}>
                    <b className={styles.firstName}>First Name</b>
                    <div className={styles.inputsignfirstname}>
                      <div className={styles.firstName1}>First Name</div>
                    </div>
                  </div>
                  <div className={styles.divh2d6289a60}>
                    <b className={styles.lastName}>Last Name</b>
                    <div className={styles.inputsignfirstname}>
                      <div className={styles.firstName1}>Last Name</div>
                    </div>
                  </div>
                </div>
                <b className={styles.email}>Email</b>
                <div className={styles.inputsignemail} />
                <div className={styles.divloginpagePasswordalertS}>
                  <b className={styles.password}>Password</b>
                  <div className={styles.inputsignpassword} />
                </div>
                <div className={styles.divloginpagePasswordalertS1}>
                  <b className={styles.confirmPassword}>Confirm Password</b>
                  <div className={styles.inputsignfirstname}>
                    <div className={styles.confirmPassword1}>
                      Confirm Password
                    </div>
                  </div>
                </div>
                <div
                  className={styles.buttonloginpageGreenregbtn}
                  onClick={onButtonLoginPageGreenregbtnContainerClick}
                >
                  <div className={styles.register1}>Register</div>
                </div>
              </div>
              <div className={styles.buttonloginpageNavloginbtn}>
                <div className={styles.register2}>Register</div>
              </div>
              <div className={styles.login} onClick={onLoginTextClick}>
                Login
              </div>
            </div>
            <div className={styles.div}></div>
            <div className={styles.div1}></div>
            <div className={styles.divloginpageRightmainbgCiChild} />
            <div className={styles.google}>Google</div>
            <div className={styles.divloginpageRightmainbgCiItem} />
            <div className={styles.divloginpageRightmainbgCiInner} />
            <div className={styles.or}>OR</div>
          </div>
        </div>
        <img className={styles.iconGoogle} alt="" src="/-icon-google.svg" />
        <div className={styles.navloginpageNavbarbgN7flc}>
          <div className={styles.aloginpageLogoCtozr}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <b className={styles.talawaAdminPortal}>Talawa Admin Portal</b>
          </div>
          <div className={styles.divmlAuto}>
            <div className={styles.div2}></div>
            <div className={styles.pseudo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
