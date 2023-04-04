import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDivwidgetContainer1Click = useCallback(() => {
    navigate("/people");
  }, [navigate]);

  const onDivwidgetContainer2Click = useCallback(() => {
    navigate("/people");
  }, [navigate]);

  const onDivwidgetContainer4Click = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  const onPeopleTextClick = useCallback(() => {
    navigate("/people");
  }, [navigate]);

  const onTagsTextClick = useCallback(() => {
    navigate("/tags");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.divdashboard}>
        <div className={styles.divcenter}>
          <div className={styles.buttonmainsail}>
            <div className={styles.customizeDashboard}>Customize Dashboard</div>
          </div>
          <div className={styles.divreactGridLayout} />
          <div className={styles.divreactGridLayout1}>
            <div className={styles.divreactGridItem}>
              <div className={styles.divwidget}>
                <div className={styles.divblue}>
                  <b className={styles.recentlyViewedTags}>
                    Recently Viewed Tags
                  </b>
                </div>
              </div>
              <div className={styles.divwidgetNoDataPh}>
                <img
                  className={styles.divwidgetNoDataPhIconCo}
                  alt=""
                  src="/divwidget--nodataphiconcontainer.svg"
                />
                <b className={styles.noRecentlyViewed}>
                  No Recently Viewed Tags
                </b>
                <div className={styles.awidgetNoDataPhButton}>
                  <b className={styles.recentlyViewedTags}>Learn More</b>
                </div>
              </div>
            </div>
            <div className={styles.divreactGridItem1}>
              <div
                className={styles.divwidget1}
                onClick={onDivwidgetContainer1Click}
              >
                <div className={styles.divblue1}>
                  <b className={styles.peopleAddedIn}>
                    People Added in the Last 7 Days
                  </b>
                </div>
                <div className={styles.divwidgetLinkContainer}>
                  <b className={styles.viewFullReport}>View Full Report</b>
                </div>
                <img
                  className={styles.divwidgetChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <img
                  className={styles.ellipse11}
                  alt=""
                  src="/ellipse-1-1.svg"
                />
              </div>
              <div className={styles.div}>25</div>
            </div>
            <div
              className={styles.divwidget2}
              onClick={onDivwidgetContainer2Click}
            >
              <div className={styles.divblue1}>
                <b className={styles.peopleAddedIn}>Best Member</b>
              </div>
              <div className={styles.divwidgetLinkContainer1}>
                <b className={styles.viewFullReport}>More</b>
              </div>
              <img
                className={styles.b743818d7771jpgIcon}
                alt=""
                src="/5b743818d7771jpg4@2x.png"
              />
              <div className={styles.austenKate}>Austen, Kate</div>
            </div>
            <div className={styles.divwidget3}>
              <div className={styles.divblue3}>
                <b className={styles.peopleAddedIn}>Notification / News feed</b>
              </div>
              <div className={styles.divwidgetLinkContainer1}>
                <b className={styles.viewFullReport}>More</b>
              </div>
              <div className={styles.divwidgetItem} />
              <b className={styles.nextTalawaEvent}>Next Talawa Event</b>
              <b className={styles.theEventWill}>
                The event will be started from..........................More
              </b>
            </div>
            <div
              className={styles.divwidget4}
              onClick={onDivwidgetContainer4Click}
            >
              <div className={styles.divblue4}>
                <b className={styles.peopleAddedIn}>Today Plans / Events</b>
              </div>
              <div className={styles.divwidgetLinkContainer3}>
                <b className={styles.moreEvents}>More Events</b>
              </div>
              <div className={styles.divwidgetInner} />
              <div className={styles.div1}>26</div>
              <b className={styles.sun}>sun</b>
              <div className={styles.divrbcAddonsDndRowBody}>
                <div className={styles.divrbcRow}>
                  <div className={styles.divrbcEvent}>
                    <div className={styles.divrbcEventContent}>
                      <div className={styles.spanmonthEventDetails31878}>
                        <div className={styles.amChildrensServiceContainer}>
                          <span className={styles.amChildrensServiceContainer1}>
                            <b>{`9:15am `}</b>
                            <span>Children's Service</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcMonthRow} />
                  </div>
                </div>
                <div className={styles.divrbcEvent1}>
                  <div className={styles.divrbcEventContent}>
                    <div className={styles.spanmonthEventDetails31878}>
                      <div className={styles.amSundayServiceContainer}>
                        <span className={styles.amChildrensServiceContainer1}>
                          <b>{`9:15am `}</b>
                          <span>Sunday Service</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divrbcEvent2}>
                  <div className={styles.divrbcEventContent}>
                    <div className={styles.spanmonthEventDetails31878}>
                      <div className={styles.amChildrensServiceContainer2}>
                        <span className={styles.amChildrensServiceContainer1}>
                          <b>{`11am `}</b>
                          <span>Children's Service</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divrbcEvent3}>
                  <div className={styles.divrbcEventContent}>
                    <div className={styles.spanmonthEventDetails31878}>
                      <div className={styles.amSundayServiceContainer2}>
                        <span className={styles.amChildrensServiceContainer1}>
                          <b>{`11am `}</b>
                          <span>Sunday Service</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divrbcEvent4}>
                  <div className={styles.divrbcEventContent}>
                    <div className={styles.spanmonthEventDetails31878}>
                      <div className={styles.pmSrHighContainer}>
                        <span className={styles.amChildrensServiceContainer1}>
                          <b>{`6pm `}</b>
                          <span>Sr High Youth Group</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divwidget5}>
              <div className={styles.divgreen}>
                <div />
                <b className={styles.peopleAddedIn}>
                  $17,669.00 Received in the Last 30 Days
                </b>
              </div>
              <div className={styles.divwidgetBody}>
                <div className={styles.divwidgetTableDataContain}>
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName}>
                      <b className={styles.b}>2023</b>
                    </div>
                  </div>
                </div>
                <div className={styles.marApr}>Mar - Apr , 2023</div>
                <img className={styles.frameIcon} alt="" src="/frame17.svg" />
                <b className={styles.b1}>$17,669.00</b>
                <img className={styles.frameIcon1} alt="" src="/frame18.svg" />
                <img
                  className={styles.divwidgetBodyChild}
                  alt=""
                  src="/ellipse-2.svg"
                />
                <img
                  className={styles.divwidgetBodyChild}
                  alt=""
                  src="/ellipse-3.svg"
                />
                <div className={styles.divrbcRowContent} />
              </div>
            </div>
            <div className={styles.divwidget6}>
              <div className={styles.divpurple}>
                <b className={styles.recentlyViewedTags}>Recent Attendance</b>
              </div>
              <div className={styles.divwidgetBody1}>
                <div className={styles.divwidgetTableDataContain1}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName1}>
                      <b className={styles.srHighYouth}>Sr High Youth Group</b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Sunday, April 02 at 6pm
                    </div>
                  </div>
                </div>
                <b className={styles.b2}>9</b>
                <div className={styles.divwidgetTableDataContain2}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName2}>
                      <b className={styles.childrensService}>
                        Children's Service
                      </b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Sunday, April 02 at 11am
                    </div>
                  </div>
                </div>
                <b className={styles.b3}>11</b>
                <div className={styles.divwidgetTableDataContain3}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName2}>
                      <b className={styles.sundayService}>Sunday Service</b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Sunday, April 02 at 11am
                    </div>
                  </div>
                </div>
                <b className={styles.b4}>9</b>
                <div className={styles.divwidgetTableDataContain4}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName4}>
                      <b className={styles.childrensService}>
                        Children's Service
                      </b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Sunday, April 02 at 9:15am
                    </div>
                  </div>
                </div>
                <b className={styles.b5}>9</b>
                <div className={styles.divwidgetTableDataContain5}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName4}>
                      <b className={styles.sundayService}>Sunday Service</b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Sunday, April 02 at 9:15am
                    </div>
                  </div>
                </div>
                <b className={styles.b6}>10</b>
                <div className={styles.divwidgetTableDataContain6}>
                  <img
                    className={styles.divpurpleIcon}
                    alt=""
                    src="/divpurple.svg"
                  />
                  <div className={styles.divwidgetTableDataTextCo}>
                    <div className={styles.awidgetTableDataName6}>
                      <b className={styles.jrHighYouth}>Jr High Youth Group</b>
                    </div>
                    <div className={styles.sundayApril02}>
                      Wednesday, March 29
                    </div>
                  </div>
                </div>
                <b className={styles.b7}>10</b>
              </div>
              <div className={styles.divwidgetLinkContainer4}>
                <b className={styles.goToEvents}>Go to Events</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divnavigationBar}>
        <div className={styles.ulnavigationWrapper}>
          <div className={styles.svg} />
          <div className={styles.atertiary}>
            <div className={styles.dashboard1}>Dashboard</div>
          </div>
          <div className={styles.people} onClick={onPeopleTextClick}>
            People
          </div>
          <div className={styles.tags} onClick={onTagsTextClick}>
            Tags
          </div>
          <div className={styles.events} onClick={onEventsTextClick}>
            Events
          </div>
          <div className={styles.anavigationMoreDropdownTo}>
            <div className={styles.more2}>More</div>
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
            src="/anavmini--dropdownicon3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
