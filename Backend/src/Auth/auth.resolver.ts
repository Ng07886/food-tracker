import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async createUserCreds( @Args("email") email: string, @Args("password") password: string ): Promise<String> {
    return this.authService.createUserCreds(email, password);
  }

  @Query(() => String)
  async authenticateUser( @Args("email") email: string, @Args("password") password: string ): Promise<string> {
    return this.authService.authenticateUser(email, password);
  }


}
