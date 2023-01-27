import useOnlineStatus from './useOnlineStatus'

export default function OnlineStatusComponent() {
    const online = useOnlineStatus()
    return (
        <div>{`User is online? ${online ? 'Yes, user is online.' : 'No, user is offline'}`}</div>
    )
}
