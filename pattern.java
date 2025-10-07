
class Main {
    public static void main(String[] args) {

        int n = 16;


        for(int i=0; i<=n; i++){

            for(int j=i; j<n; j++){
                System.out.print(" ");
            }
            
            for(int k=0; k<=i; k++){
                System.out.print("*");
                if(i!=0) System.out.print("*");
            }

            System.out.println();

        }


    
    

    }
}