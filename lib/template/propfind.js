import prop from './prop';

export default function propfind(object) {
  return `<d:propfind xmlns:c="urn:ietf:params:xml:ns:caldav"
              xmlns:card="urn:ietf:params:xml:ns:carddav"
              xmlns:cs="http://calendarserver.org/ns/"
              xmlns:ca="http://apple.com/ns/ical/"
              xmlns:d="DAV:">
    <d:prop>
      ${object.props.map(prop).join('')}
    </d:prop>
  </d:propfind>`;
}
