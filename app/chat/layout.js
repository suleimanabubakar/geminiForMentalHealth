const ChatLayout = ({children}) => {
    return ( 
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
        {children}
</div>
     );
}
 
export default ChatLayout;