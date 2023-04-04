import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Tags.module.css";

const Tags: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEventsTextClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  return (
    <div className={styles.tags}>
      <div className={styles.divlayout}>
        <div className={styles.divsidebar}>
          <div className={styles.divcol}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            <b className={styles.allTags}>All Tags</b>
          </div>
          <div className={styles.divcol1}>
            <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
            <div className={styles.childrensMinistries}>
              Children's Ministries
            </div>
          </div>
          <div className={styles.divcol1}>
            <img className={styles.frameIcon2} alt="" src="/frame3.svg" />
            <div className={styles.mensMinistries}>Men's Ministries</div>
          </div>
          <div className={styles.divcol1}>
            <img className={styles.frameIcon2} alt="" src="/frame4.svg" />
            <div className={styles.smallGroups}>Small Groups</div>
          </div>
          <div className={styles.divcol1}>
            <img className={styles.frameIcon5} alt="" src="/frame5.svg" />
            <img className={styles.frameIcon2} alt="" src="/frame6.svg" />
            <div className={styles.studentMinistries}>Student Ministries</div>
          </div>
          <div className={styles.divcol1}>
            <img className={styles.frameIcon2} alt="" src="/frame7.svg" />
            <div className={styles.womensMinistries}>Women's Ministries</div>
          </div>
        </div>
        <div className={styles.divcontentView}>
          <div className={styles.divcontentPad}>
            <div className={styles.divcontentHeader}>
              <div className={styles.h3sectionTitle}>
                <div className={styles.allTags1}>All Tags</div>
              </div>
              <div className={styles.buttonprimaryButton}>
                <img className={styles.frameIcon8} alt="" src="/frame8.svg" />
                <div className={styles.addTag}>Add Tag</div>
              </div>
              <div className={styles.buttonprimaryButtonToggle}>
                <div className={styles.pseudo} />
              </div>
            </div>
            <div className={styles.divinfiniteScrollComponent}>
              <div className={styles.divtableResponsive}>
                <div className={styles.trfolder2037047}>
                  <div className={styles.tdtagFolder}>
                    <img
                      className={styles.frameIcon9}
                      alt=""
                      src="/frame9.svg"
                    />
                    <b className={styles.childrensMinistries1}>
                      Children's Ministries
                    </b>
                  </div>
                  <div className={styles.tdh2dFc68356e} />
                </div>
                <div className={styles.tdtagFolder1}>
                  <img className={styles.frameIcon9} alt="" src="/frame9.svg" />
                  <b className={styles.childrensMinistries1}>
                    Men's Ministries
                  </b>
                </div>
                <div className={styles.tdh2dAc6a6ee2} />
                <div className={styles.trfolder2037046}>
                  <div className={styles.tdtagFolder2}>
                    <img
                      className={styles.frameIcon9}
                      alt=""
                      src="/frame9.svg"
                    />
                    <b className={styles.childrensMinistries1}>Small Groups</b>
                  </div>
                  <div className={styles.tdh2dFc68356e} />
                </div>
                <div className={styles.tdtagFolder3}>
                  <img className={styles.frameIcon9} alt="" src="/frame9.svg" />
                  <b className={styles.childrensMinistries1}>
                    Student Ministries
                  </b>
                </div>
                <div className={styles.tdh2d7ea61ad4} />
                <div className={styles.trfolder2037053}>
                  <div className={styles.tdtagFolder4}>
                    <img
                      className={styles.frameIcon9}
                      alt=""
                      src="/frame9.svg"
                    />
                    <b className={styles.childrensMinistries1}>
                      Women's Ministries
                    </b>
                  </div>
                  <div className={styles.tdh2d79fd908} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divnavigationBar}>
        <div className={styles.ulnavigationWrapper}>
          <div className={styles.svg} />
          <div className={styles.atertiary} />
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.people}>People</div>
          <div className={styles.tags1}>Tags</div>
          <div className={styles.events} onClick={onEventsTextClick}>
            Events
          </div>
          <div className={styles.anavigationMoreDropdownTo}>
            <div className={styles.more}>More</div>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
          </div>
          <img className={styles.logopngIcon} alt="" src="/logopng@2x.png" />
          <b className={styles.talawa}>Talawa</b>
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
            src="/anavmini--dropdownicon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Tags;
