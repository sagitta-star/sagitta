
 
//pendiente 
export const Mododark = () =>{
        const [theme, setTheme]= useState(() => {
            if (window.matchMedia("(prefers--color-scheme: dark)").matches){
              return "dark";
            }
                return "light";
              })
            
          
            
            useEffect(() => {
            if (theme == "dark" ){
              document.querySelector('html').classList.add('dark');
            } else{
              
              document.querySelector('html').classList.remove('dark');
            }
            }, [ theme])
              const HandleChangeTheme =() => {
             setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
              }

}
  

export default Mododark