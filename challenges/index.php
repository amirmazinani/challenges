<section class="-b-c-white -brd-left -brd-c-eee">
    <main class="-mx-w-480 -dis-f -al-it-s -h-100vh">
        <div class="-dis-f -jus-c-se -f-w-w -p-20 -bx-s-b">
            <p class="-w-11 -px-20 -t-al-c -py-20 -fnt-lalezar -fnt-s-bigger">چالش های برنامه نویسی</p>
            <div class="-p-20 -bx-s-b" ng-repeat="i in [].constructor(30) track by $index">
                <a href="/#!/challenges/{{$index+1}}"
                   class="-dis-ib -b-c-gray-1-hvr -p-5 -transition -b-c-white -h-30px -w-30px -fnt-s-smaller -dis-f -al-it-c -jus-c-c -brd-r-c -bxsh-1"
                >{{$index+1}}</a>
            </div>
        </div>
    </main>
</section>