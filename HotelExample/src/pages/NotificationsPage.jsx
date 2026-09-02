import { notifications } from "../data/hotelData.js";

function NotificationsPage() {
  return (
    <div className="notifications-page">

      <div className="notifications-header">
        <h1>Notifications</h1>
        <p>Recent activity and important updates</p>
      </div>

      <section className="notifications-list">

        {notifications.map((notification) => (
          <article
            className={`notification-card ${
              notification.read ? "read" : "unread"
            }`}
            key={notification.id}
          >

            <div className="notification-icon">
              <i className={`bx ${notification.icon}`} />
            </div>

            <div className="notification-content">

              <h2>{notification.title}</h2>

              <p>{notification.description}</p>

              <div className="notification-date">
                <span>
                  <i className="bx bx-calendar" />
                  {notification.date}
                </span>

                <span>
                  <i className="bx bx-time-five" />
                  {notification.time}
                </span>
              </div>

            </div>

            {!notification.read && (
              <span className="notification-new">
                New
              </span>
            )}

          </article>
        ))}

      </section>

    </div>
  );
}

export default NotificationsPage;
