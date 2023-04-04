import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./People.module.css";

const People: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProfileTextClick = useCallback(() => {
    navigate("/kate-austen");
  }, [navigate]);

  const onTagsTextClick = useCallback(() => {
    navigate("/tags");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.people}>
      <div className={styles.divwrapper}>
        <div className={styles.divrowFluid}>
          <div className={styles.divpeopleSearchNameSidebar}>
            <b className={styles.filterByName}>Filter by Name</b>
            <div className={styles.divpeopleSearchContainer}>
              <div className={styles.inputpeopleNameFilter}>
                <div className={styles.typePersonsName}>
                  Type person's name...
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divallPeopleContainer}>
            <div className={styles.divclearfix}>
              <img className={styles.frameIcon} alt="" src="/frame15.svg" />
              <div className={styles.peopleFound}>8 People Found</div>
              <div className={styles.abtn}>
                <img className={styles.frameIcon1} alt="" src="/frame16.svg" />
                <div className={styles.addPerson}>Add Person</div>
              </div>
              <img
                className={styles.buttonbtnIcon}
                alt=""
                src="/buttonbtn.svg"
              />
            </div>
            <div className={styles.hrh2d3b7d43a9} />
            <div className={styles.divallPeopleContainerChild} />
            <img
              className={styles.b743818d7771jpgIcon}
              alt=""
              src="/5b743818d7771jpg1@2x.png"
            />
            <div className={styles.austenKate}>Austen, Kate</div>
            <div className={styles.div}>+91 9018888888</div>
            <div className={styles.austenkategmailcom}>
              Austen.Kate@gmail.com
            </div>
            <div className={styles.divallPeopleContainerItem} />
            <div className={styles.profile} onClick={onProfileTextClick}>
              Profile
            </div>
            <div className={styles.divallPeopleContainerInner} />
            <div className={styles.message}>Message</div>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.b743818d7771jpgIcon1}
              alt=""
              src="/5b743818d7771jpg2@2x.png"
            />
            <div className={styles.austenKate1}>Austen, Kate</div>
            <div className={styles.div1}>+91 9018888888</div>
            <div className={styles.austenkategmailcom1}>
              Austen.Kate@gmail.com
            </div>
            <div className={styles.divallPeopleContainerChild1} />
            <div className={styles.profile1}>Profile</div>
            <div className={styles.divallPeopleContainerChild2} />
            <div className={styles.message1}>Message</div>
            <div className={styles.divallPeopleContainerChild3} />
            <img
              className={styles.b743818d7771jpgIcon2}
              alt=""
              src="/5b743818d7771jpg3@2x.png"
            />
            <div className={styles.austenKate2}>Austen, Kate</div>
            <div className={styles.div2}>+91 9018888888</div>
            <div className={styles.austenkategmailcom2}>
              Austen.Kate@gmail.com
            </div>
            <div className={styles.divallPeopleContainerChild4} />
            <div className={styles.profile2}>Profile</div>
            <div className={styles.divallPeopleContainerChild5} />
            <div className={styles.message2}>Message</div>
          </div>
        </div>
      </div>
      <div className={styles.divsmsPerson}>
        <div className={styles.divmodalFooter} />
      </div>
      <div className={styles.divnavigationBar}>
        <div className={styles.ulnavigationWrapper}>
          <div className={styles.svg} />
          <div className={styles.atertiary} />
          <div className={styles.people1}>People</div>
          <div className={styles.tags} onClick={onTagsTextClick}>
            Tags
          </div>
          <div className={styles.events} onClick={onEventsTextClick}>
            Events
          </div>
          <div className={styles.anavigationMoreDropdownTo}>
            <div className={styles.more}>More</div>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
          </div>
          <img className={styles.logopngIcon} alt="" src="/logopng@2x.png" />
          <b className={styles.talawa}>Talawa</b>
          <div className={styles.dashboard} onClick={onDashboardTextClick}>
            Dashboard
          </div>
        </div>
        <div className={styles.divnavigationWrapperRight}>
          <div className={styles.divnavSearchWrapper}>
            <div className={styles.divnavSearchInputGroup} />
            <img
              className={styles.svgh2dF44e3a62Icon}
              alt=""
              src="/svgh2df44e3a62.svg"
            />
          </div>
          <img
            className={styles.anavMiniDropdownIcon}
            alt=""
            src="/anavmini--dropdownicon2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default People;
