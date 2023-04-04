import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onH1h2d74f1c206ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLoginPageGreenregbtnContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.login}>
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
              <div
                className={styles.h1h2d74f1c206}
                onClick={onH1h2d74f1c206ContainerClick}
              >
                <div className={styles.register}>Register</div>
              </div>
              <div className={styles.formh2d3e36b038}>
                <b className={styles.email}>Email</b>
                <div className={styles.inputsignemail} />
                <div className={styles.divloginpagePasswordalertS}>
                  <b className={styles.password}>Password</b>
                  <div className={styles.inputsignpassword}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div
                  className={styles.buttonloginpageGreenregbtn}
                  onClick={onButtonLoginPageGreenregbtnContainerClick}
                >
                  <div className={styles.register1}>Register</div>
                </div>
                <div className={styles.formh2d3e36b038Child} />
                <div className={styles.google}>Google</div>
                <img
                  className={styles.iconGoogle}
                  alt=""
                  src="/-icon-google1.svg"
                />
                <div className={styles.formh2d3e36b038Item} />
                <div className={styles.formh2d3e36b038Inner} />
                <div className={styles.or}>OR</div>
              </div>
              <div className={styles.buttonloginpageNavloginbtn}>
                <div className={styles.login1}>Login</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navloginpageNavbarbgN7flc}>
          <div className={styles.aloginpageLogoCtozr}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <b className={styles.talawaAdminPortal}>Talawa Admin Portal</b>
          </div>
          <div className={styles.divmlAuto}>
            <div className={styles.div1}></div>
            <div className={styles.pseudo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
