
const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="bg-indigo-500 flex justify-center items-center h-full">
            {children}
        </div>
    );
}
 
export default AuthLayout;