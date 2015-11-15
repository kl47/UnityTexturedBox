#pragma strict
var rb : Rigidbody;
var speed : float;
var cameraMan : GameObject;
function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
}

function FixedUpdate () {
	var vert : float = Input.GetAxis("Mouse Y");
	var moveDirection : Vector3 = cameraMan.transform.rotation.eulerAngles;
	// We only care about the yaw of the rotation...
	var yaw : float = moveDirection.y * Mathf.Deg2Rad;
	// "Forward" is (sine of yaw, 0,  cosine of yaw)...
	var fwd : Vector3 = new Vector3(Mathf.Sin(yaw), 0, Mathf.Cos(yaw)).normalized;
	var forceVector : Vector3 = fwd * vert * speed;
	rb.AddForce(forceVector);
}