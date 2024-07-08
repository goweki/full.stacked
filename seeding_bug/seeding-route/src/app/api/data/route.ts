import prisma from "@/lib/prisma/prisma";
import { seed as seedDB } from "@/scripts/seed"; // PS:removed seeding from route, now done running /script/seed.js
// export const dynamic = "auto"; // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 604800; //after 7 days // false | 0 | number

//seed key, used at POST
const seedAuth = process.env.TOKEN;

// PS:removed seeding from route, now done running /script/seed.js
// // POST seed data
// const postHandler = async (request: Request) => {
//   try {
//     // request body
//     const doc = await request.json();
//     console.log("POST REQUEST: to seed: ", doc);
//     if (!doc.key) {
//       console.error("No key provided by client: ", doc);
//       return Response.json({ failed: "no key provided" });
//     }
//     if (!seedAuth) {
//       console.error("No seeding auth ENV variable provided");
//       return Response.json({ error: "missing .env AUTH_SEEDING" });
//     }
//     if (seedAuth === doc.key) {
//       seedDB()
//         .then(async () => {
//           await prisma.$disconnect();
//         })
//         .catch(async (e) => {
//           console.error(e);
//           await prisma.$disconnect();
//           process.exit(1);
//         });
//     } else {
//       return await new Promise<Response>((resolve) =>
//         setTimeout(() => resolve(Response.json({ failed: "zi !" })), 2000)
//       );
//     }
//     return await new Promise<Response>((resolve) =>
//       setTimeout(() => resolve(Response.json({ success: "wazi !" })), 2000)
//     );

//     //return Response.json({ failed: 'action NOT performed' });
//   } catch (err) {
//     console.error("ERROR in route: api/data - POST \n > ", err);
//     return Response.json({ error: "SERVER ERROR" });
//   }
// };

// GET ui data
const getHandler = async (request: Request) => {
  try {
    // console.log(`GET REQUEST: UI data: `);

    //  API call
    const allMps = await prisma.mp.findMany({
      include: {
        constituency: true,
      },
    });
    const allLegislations = await prisma.legislation.findMany();

    return Response.json({
      success: { mps: allMps, legislations: allLegislations },
    });
    //return Response.json({ failed: 'action NOT performed' });
  } catch (err: any) {
    console.error("ERROR in route: api/data - GET \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

//   // PUT
//   const putHandler = async (request: Request) => {
//     try {
//       // request body
//       const doc = await request.json();
//       console.log(`PUT REQUEST: item data: `, doc);
//       // const { id, ...doc_ } = doc;
//       // update doc
//       // const res_ = await prisma.case.update({
//       //   where: { id },
//       //   data: {
//       //     ...doc_,
//       //   },
//       // });

//       //return Response.json({ success: 'action performed' });
//       //return Response.json({ failed: 'action NOT performed' });
//     } catch (err) {
//       console.error("ERROR in route: api/otp - PUT \n > ", err);
//       return Response.json({ error: "SERVER ERROR" });
//     }
//   };

// // DELETE
// const deleteHandler = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
//     console.log(`PUT REQUEST: item data: `, id);
//     //return Response.json({ success: 'action performed' });
//     //return Response.json({ failed: 'action NOT performed' });
//   } catch (err: any) {
//     console.error("ERROR in route: api/otp - DELETE \n > ", err);
//     return Response.json({ error: "SERVER ERROR" });
//   }
// };

// export const POST = withAuthAdmin(postHandler);
// export const PUT = withAuthAdmin(putHandler);
// export const GET = withAuthAdmin(getHandler);
// export const DELETE = withAuthAdmin(deleteHandler);

// PS:removed seeding from route, now done running /script/seed.js
// export const POST = postHandler;

export const GET = getHandler;
// export const DELETE = deleteHandler;
// export const PUT = putHandler;
