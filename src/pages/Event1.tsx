import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Event1.module.css";

const Event1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPeopleTextClick = useCallback(() => {
    navigate("/people");
  }, [navigate]);

  const onTagsTextClick = useCallback(() => {
    navigate("/tags");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.event}>
      <div className={styles.divlayout}>
        <div className={styles.divsidebar}>
          <div className={styles.divrbcCalendar}>
            <div className={styles.divrbcToolbar}>
              <img className={styles.frameIcon} alt="" src="/frame19.svg" />
              <div className={styles.april2023}>April 2023</div>
              <img className={styles.frameIcon1} alt="" src="/frame20.svg" />
            </div>
            <div className={styles.monthView}>
              <div className={styles.divrbcRow}>
                <div className={styles.divrbcHeader}>
                  <b className={styles.sun}>Sun</b>
                </div>
                <div className={styles.divrbcHeader1}>
                  <b className={styles.sun}>Mon</b>
                </div>
                <div className={styles.divrbcHeader2}>
                  <b className={styles.sun}>Tue</b>
                </div>
                <div className={styles.divrbcHeader3}>
                  <b className={styles.sun}>Wed</b>
                </div>
                <div className={styles.divrbcHeader4}>
                  <b className={styles.sun}>Thu</b>
                </div>
                <div className={styles.divrbcHeader5}>
                  <b className={styles.sun}>Fri</b>
                </div>
                <div className={styles.divrbcHeader6}>
                  <b className={styles.sun}>Sat</b>
                </div>
              </div>
              <div className={styles.divrbcMonthRow}>
                <div className={styles.divrbcRow1}>
                  <div className={styles.div}>26</div>
                  <div className={styles.div1}>27</div>
                  <div className={styles.div2}>28</div>
                  <div className={styles.div3}>29</div>
                  <div className={styles.div4}>30</div>
                  <div className={styles.div5}>31</div>
                  <div className={styles.div6}>1</div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow1}>
                <div className={styles.divrbcRow2}>
                  <div className={styles.buttonrbcButtonLink}>
                    <div className={styles.div7}>2</div>
                  </div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>4</div>
                  <div className={styles.div10}>5</div>
                  <div className={styles.div11}>6</div>
                  <div className={styles.div12}>7</div>
                  <div className={styles.div13}>8</div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow1}>
                <div className={styles.divrbcRow1}>
                  <div className={styles.div14}>9</div>
                  <div className={styles.div1}>10</div>
                  <div className={styles.div2}>11</div>
                  <div className={styles.div3}>12</div>
                  <div className={styles.div4}>13</div>
                  <div className={styles.div5}>14</div>
                  <div className={styles.div20}>15</div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow1}>
                <div className={styles.divrbcRow4}>
                  <div className={styles.div21}>16</div>
                  <div className={styles.div21}>17</div>
                  <div className={styles.div21}>18</div>
                  <div className={styles.div21}>19</div>
                  <div className={styles.div21}>20</div>
                  <div className={styles.div21}>21</div>
                  <div className={styles.div21}>22</div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow1}>
                <div className={styles.divrbcRow4}>
                  <div className={styles.div21}>23</div>
                  <div className={styles.div21}>24</div>
                  <div className={styles.div21}>25</div>
                  <div className={styles.div21}>26</div>
                  <div className={styles.div21}>27</div>
                  <div className={styles.div21}>28</div>
                  <div className={styles.div21}>29</div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow}>
                <div className={styles.divrbcRow1}>
                  <div className={styles.div35}>30</div>
                  <div className={styles.div8}>1</div>
                  <div className={styles.div9}>2</div>
                  <div className={styles.div10}>3</div>
                  <div className={styles.div11}>4</div>
                  <div className={styles.div12}>5</div>
                  <div className={styles.div13}>6</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divcalendarList}>
            <div className={styles.h4rbcToolbarLabel}>
              <div className={styles.calendars}>Calendars</div>
              <div className={styles.frame} />
            </div>
          </div>
        </div>
        <div className={styles.divcontentView}>
          <div className={styles.divcalendarMainViewMonth}>
            <div className={styles.divrbcToolbar1}>
              <div className={styles.divbtnGroup}>
                <div className={styles.buttoncompact}>
                  <img
                    className={styles.frameIcon2}
                    alt=""
                    src="/frame21.svg"
                  />
                </div>
                <div className={styles.buttoncompact1}>
                  <img
                    className={styles.frameIcon2}
                    alt=""
                    src="/frame22.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonprimaryButtonLight}>
                <div className={styles.today}>Today</div>
              </div>
              <div className={styles.april20231}>April 2023</div>
              <div className={styles.buttonsecondaryButton}>
                <img className={styles.frameIcon4} alt="" src="/frame23.svg" />
                <div className={styles.pseudo} />
              </div>
              <div className={styles.divactionButtons}>
                <div className={styles.buttonsecondaryButton1}>
                  <img
                    className={styles.frameIcon5}
                    alt=""
                    src="/frame24.svg"
                  />
                  <div className={styles.pseudo1} />
                </div>
                <div className={styles.buttonnoPrint}>
                  <img
                    className={styles.frameIcon6}
                    alt=""
                    src="/frame25.svg"
                  />
                  <div className={styles.today}>Add Event</div>
                </div>
              </div>
            </div>
            <div className={styles.divrbcMonthView}>
              <div className={styles.divrbcRow7}>
                <div className={styles.divrbcHeader7}>
                  <b className={styles.sun}>Sun</b>
                </div>
                <div className={styles.divrbcHeader8}>
                  <b className={styles.sun}>Mon</b>
                </div>
                <div className={styles.divrbcHeader9}>
                  <b className={styles.sun}>Tue</b>
                </div>
                <div className={styles.divrbcHeader10}>
                  <b className={styles.sun}>Wed</b>
                </div>
                <div className={styles.divrbcHeader11}>
                  <b className={styles.sun}>Thu</b>
                </div>
                <div className={styles.divrbcHeader12}>
                  <b className={styles.sun}>Fri</b>
                </div>
                <div className={styles.divrbcHeader13}>
                  <b className={styles.sun}>Sat</b>
                </div>
              </div>
              <div className={styles.divrbcMonthRow6}>
                <div className={styles.divrbcRowBg}>
                  <div className={styles.divrbcDayBg} />
                  <div className={styles.divrbcDayBg1} />
                  <div className={styles.divrbcDayBg2} />
                  <div className={styles.divrbcDayBg3} />
                  <div className={styles.divrbcDayBg4} />
                  <div className={styles.divrbcDayBg5} />
                </div>
                <div className={styles.divrbcRowContent}>
                  <div className={styles.divrbcRow8}>
                    <div className={styles.div42}>26</div>
                    <div className={styles.div43}>27</div>
                    <div className={styles.div44}>28</div>
                    <div className={styles.div45}>29</div>
                    <div className={styles.div46}>30</div>
                    <div className={styles.div47}>31</div>
                    <div className={styles.div48}>1</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow9}>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.divrbcMonthRow7}>
                          <div className={styles.divrbcRowBg}>
                            <div className={styles.divrbcDayBg} />
                            <div className={styles.divrbcDayBg1} />
                            <div className={styles.divrbcDayBg2} />
                            <div className={styles.divrbcDayBg3} />
                            <div className={styles.divrbcDayBg4} />
                            <div className={styles.divrbcDayBg5} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow8}>
                <div className={styles.divrbcRowBg2}>
                  <div className={styles.divrbcDayBg12} />
                  <div className={styles.divrbcDayBg13} />
                  <div className={styles.divrbcDayBg14} />
                  <div className={styles.divrbcDayBg15} />
                  <div className={styles.divrbcDayBg16} />
                  <div className={styles.divrbcDayBg17} />
                </div>
                <div className={styles.divrbcRowContent1}>
                  <div className={styles.divrbcRow8}>
                    <div className={styles.buttonrbcButtonLink1}>
                      <div className={styles.div7}>2</div>
                    </div>
                    <div className={styles.div50}>3</div>
                    <div className={styles.div51}>4</div>
                    <div className={styles.div52}>5</div>
                    <div className={styles.div53}>6</div>
                    <div className={styles.div54}>7</div>
                    <div className={styles.div55}>8</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow11}>
                      <div className={styles.divrbcEvent6}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent7}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.childrensPajamaParty}>
                              Children's Pajama Party
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent8}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow9}>
                <div className={styles.divrbcRowBg2}>
                  <div className={styles.divrbcDayBg12} />
                  <div className={styles.divrbcDayBg13} />
                  <div className={styles.divrbcDayBg14} />
                  <div className={styles.divrbcDayBg15} />
                  <div className={styles.divrbcDayBg16} />
                  <div className={styles.divrbcDayBg17} />
                </div>
                <div className={styles.divrbcRowContent1}>
                  <div className={styles.divrbcRow8}>
                    <div className={styles.div56}>9</div>
                    <div className={styles.div43}>10</div>
                    <div className={styles.div44}>11</div>
                    <div className={styles.div45}>12</div>
                    <div className={styles.div46}>13</div>
                    <div className={styles.div47}>14</div>
                    <div className={styles.div62}>15</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow11}>
                      <div className={styles.divrbcEvent6}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent8}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent15}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighMovie}>
                              Jr High Movie Night
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow10}>
                <div className={styles.divrbcRowBg2}>
                  <div className={styles.divrbcDayBg12} />
                  <div className={styles.divrbcDayBg13} />
                  <div className={styles.divrbcDayBg14} />
                  <div className={styles.divrbcDayBg15} />
                  <div className={styles.divrbcDayBg16} />
                  <div className={styles.divrbcDayBg17} />
                </div>
                <div className={styles.divrbcRowContent1}>
                  <div className={styles.divrbcRow14}>
                    <div className={styles.div21}>16</div>
                    <div className={styles.div21}>17</div>
                    <div className={styles.div21}>18</div>
                    <div className={styles.div21}>19</div>
                    <div className={styles.div21}>20</div>
                    <div className={styles.div21}>21</div>
                    <div className={styles.div21}>22</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow9}>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow11}>
                <div className={styles.divrbcRowBg2}>
                  <div className={styles.divrbcDayBg12} />
                  <div className={styles.divrbcDayBg13} />
                  <div className={styles.divrbcDayBg14} />
                  <div className={styles.divrbcDayBg15} />
                  <div className={styles.divrbcDayBg16} />
                  <div className={styles.divrbcDayBg17} />
                </div>
                <div className={styles.divrbcRowContent1}>
                  <div className={styles.divrbcRow14}>
                    <div className={styles.div21}>23</div>
                    <div className={styles.div21}>24</div>
                    <div className={styles.div21}>25</div>
                    <div className={styles.div21}>26</div>
                    <div className={styles.div21}>27</div>
                    <div className={styles.div21}>28</div>
                    <div className={styles.div21}>29</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow9}>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divrbcMonthRow12}>
                <div className={styles.divrbcRowBg2}>
                  <div className={styles.divrbcDayBg12} />
                  <div className={styles.divrbcDayBg13} />
                  <div className={styles.divrbcDayBg14} />
                  <div className={styles.divrbcDayBg15} />
                  <div className={styles.divrbcDayBg16} />
                  <div className={styles.divrbcDayBg17} />
                </div>
                <div className={styles.divrbcRowContent1}>
                  <div className={styles.divrbcRow8}>
                    <div className={styles.div77}>30</div>
                    <div className={styles.div50}>1</div>
                    <div className={styles.div51}>2</div>
                    <div className={styles.div52}>3</div>
                    <div className={styles.div53}>4</div>
                    <div className={styles.div54}>5</div>
                    <div className={styles.div55}>6</div>
                  </div>
                  <div className={styles.divrbcAddonsDndRowBody}>
                    <div className={styles.divrbcRow9}>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.amChildrensServiceContainer}>
                              <span
                                className={styles.amChildrensServiceContainer1}
                              >
                                <b>{`9:15am `}</b>
                                <span>Children's Service</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divrbcEvent}>
                        <div className={styles.divrbcEventContent}>
                          <div className={styles.spanmonthEventDetails31878}>
                            <div className={styles.jrHighYouth}>
                              Jr High Youth Group
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent2}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`9:15am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent3}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amChildrensServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Children's Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent4}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.amSundayServiceContainer2}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`11am `}</b>
                              <span>Sunday Service</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divrbcEvent5}>
                      <div className={styles.divrbcEventContent}>
                        <div className={styles.spanmonthEventDetails31878}>
                          <div className={styles.pmSrHighContainer}>
                            <span
                              className={styles.amChildrensServiceContainer1}
                            >
                              <b>{`6pm `}</b>
                              <span>Sr High Youth Group</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
          <div className={styles.people} onClick={onPeopleTextClick}>
            People
          </div>
          <div className={styles.tags} onClick={onTagsTextClick}>
            Tags
          </div>
          <div className={styles.events}>Events</div>
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

export default Event1;
